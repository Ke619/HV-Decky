import asyncio
import os
import sys
from pathlib import Path

import decky

PLUGIN_DIR = str(Path(__file__).resolve().parent)
if PLUGIN_DIR not in sys.path:
    sys.path.insert(0, PLUGIN_DIR)

from py_modules.core import Core
from py_modules.games import Games
from py_modules.operations import Operations
from py_modules.system import System
from py_modules.umip import Umip


class Plugin(
    Operations,
    Games,
    System,
    Umip,
    Core,
):
    async def _main(self) -> None:
        self._reset_session_log()
        decky.logger.info(
            "HV-Decky backend started (uid=%s, kernel=%s)",
            os.geteuid(),
            self.kernel_release,
        )
        if self.game_watcher_mode == "steam_log":
            self._game_log_task = asyncio.create_task(
                self._watch_steam_game_log()
            )
        else:
            self._running_game_ids = self._running_steam_games()
            await self._reconcile_game_hv()

    async def _unload(self) -> None:
        await self._stop_game_log_watcher()
        if self._watcher_module_name is not None:
            async with self._operation_lock:
                result = await self._unload_module_path(
                    self._watcher_module_path,
                    "The module path is not available.",
                )
                if not result["ok"]:
                    decky.logger.error(
                        "Could not unload module on shutdown: %s",
                        result["message"],
                    )
            self._watcher_module_path = None
            self._watcher_module_name = None
        decky.logger.info("HV-Decky backend stopped")
