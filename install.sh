#!/usr/bin/env bash
set -euo pipefail

PLUGIN_NAME="HV-Decky"
PLUGINS_DIR="$HOME/homebrew/plugins"
DEST="$PLUGINS_DIR/$PLUGIN_NAME"
ZIP_NAME="HV-Decky_20260801193851.zip"
ZIP_URL="https://github.com/Ke619/HV-Decky/raw/refs/heads/main/$ZIP_NAME"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "==> $PLUGIN_NAME installer"
echo "    Source: $ZIP_URL"
echo "    Target: $DEST"

# --- Download the plugin zip -------------------------------------------------
echo "==> Downloading $ZIP_NAME"
curl -fL "$ZIP_URL" -o "$TMP/$ZIP_NAME"

if ! command -v unzip >/dev/null 2>&1; then
    echo "Error: unzip is required but not installed."
    exit 1
fi

# --- Extract -----------------------------------------------------------------
echo "==> Extracting"
unzip -q "$TMP/$ZIP_NAME" -d "$TMP/extracted"

SRC="$TMP/extracted"
TOP="$(find "$SRC" -mindepth 1 -maxdepth 1 -type d | head -1)"
if [ -z "$(find "$SRC" -maxdepth 1 -name plugin.json -print -quit)" ] && [ -n "$TOP" ]; then
    SRC="$TOP"
fi

if [ ! -f "$SRC/plugin.json" ]; then
    echo "Error: plugin.json not found in extracted contents — wrong zip layout?"
    exit 1
fi

# --- Install -----------------------------------------------------------------
mkdir -p "$PLUGINS_DIR"

# Handle leftovers from a previous sudo-based install
if [ -e "$DEST" ]; then
    if ! rm -rf "$DEST" 2>/dev/null; then
        echo "==> Existing install is root-owned; cleaning up with sudo"
        sudo rm -rf "$DEST"
    fi
fi

mv "$SRC" "$DEST"

# Make sure nothing inside is root-owned
if [ "$(stat -c '%U' "$DEST")" != "$(id -un)" ]; then
    echo "==> Fixing ownership of $DEST"
    sudo chown -R "$(id -u):$(id -g)" "$DEST"
fi

echo "==> Installed to $DEST"

# --- Optional: cpuid_fault_emulation.zip -------------------------------------
echo
read -r -p "Download cpuid_fault_emulation.zip? [y/N] " answer
case "$answer" in
    [yY]*)
        echo "==> Downloading cpuid_fault_emulation.zip..."
        curl -fL "https://github.com/Ke619/HV-Decky/raw/refs/heads/main/cpuid_fault_emulation.zip" \
            -o "$HOME/cpuid_fault_emulation.zip"
        echo "==> Downloaded to home directory"
        ;;
    *)
        echo "Skipping cpuid_fault_emulation.zip download."
        ;;
esac

echo "==> Done."
