const manifest = {"name":"HV-Decky"};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
let api;
try {
    api = internalAPIConnection.connect(API_VERSION, manifest.name);
}
catch {
    api = internalAPIConnection.connect(1, manifest.name);
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version 1. Some features may not work.`);
}
if (api._version != API_VERSION) {
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version ${api._version}. Some features may not work.`);
}
const callable = api.callable;
const routerHook = api.routerHook;
const toaster = api.toaster;
const openFilePicker = api.openFilePicker;
const definePlugin = (fn) => {
    return (...args) => {
        return fn(...args);
    };
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && /*#__PURE__*/SP_REACT.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/SP_REACT.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/SP_REACT.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/SP_REACT.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/SP_REACT.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaTerminal (props) {
  return GenIcon({"attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},"child":[]}]})(props);
}function FaMicrochip (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"},"child":[]}]})(props);
}function FaCog (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},"child":[]}]})(props);
}function FaChevronRight (props) {
  return GenIcon({"attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},"child":[]}]})(props);
}function FaChevronLeft (props) {
  return GenIcon({"attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},"child":[]}]})(props);
}function FaChevronDown (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},"child":[]}]})(props);
}function FaCheck (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},"child":[]}]})(props);
}

const getStatus = callable("get_status");
const getOperationLog = callable("get_operation_log");
const setSourceDirectory = callable("set_source_directory");
const setSourceZip = callable("set_source_zip");
const setContainerBuildEnabled = callable("set_container_build_enabled");
const setModuleRepository = callable("set_module_repository");
const setProtonRepository = callable("set_proton_repository");
const getProtonReleaseAssets = callable("get_proton_release_assets");
const downloadProtonAsset = callable("download_proton_asset");
const completeSetup = callable("complete_setup");
const buildModule = callable("build_module");
const buildContainerImage = callable("build_container_image");
const buildModuleContainer = callable("build_module_container");
const installBuildDependencies = callable("install_build_dependencies");
const downloadBin = callable("download_bin");
const disableUmip = callable("disable_umip");
const rebootSystem = callable("reboot_system");
const loadModule = callable("load_module");
const unloadModule = callable("unload_module");
const loadAutomaticModule = callable("load_automatic_module");
const unloadAutomaticModule = callable("unload_automatic_module");
const testCpuidFaulting = callable("test_cpuid_faulting");
const getNativeCpuidNotice = callable("get_native_cpuid_notice");
const dismissNativeCpuidNotice = callable("dismiss_native_cpuid_notice");
const setGameHv = callable("set_game_hv");
callable("set_game_module_source");
const setGameWatcherMode = callable("set_game_watcher_mode");
const updateGameLifetime = callable("update_game_lifetime");

function useStatus(pollInterval = 5000) {
    const [status, setStatus] = SP_REACT.useState(null);
    const [error, setError] = SP_REACT.useState(null);
    const refresh = SP_REACT.useCallback(async () => {
        try {
            const current = await getStatus();
            setStatus(current);
            setError(null);
            return current;
        }
        catch (reason) {
            setError(String(reason));
            return null;
        }
    }, []);
    SP_REACT.useEffect(() => {
        void refresh();
        const timer = window.setInterval(() => void refresh(), pollInterval);
        return () => window.clearInterval(timer);
    }, [pollInterval, refresh]);
    return { status, setStatus, error, setError, refresh };
}
function visibleGames(games) {
    return (games ?? []).filter((game) => {
        if (game.non_steam)
            return true;
        const overview = window.appStore?.GetAppOverviewByAppID(Number(game.app_id));
        return overview == null || Boolean(overview.app_type & ((1 << 0) | (1 << 3)));
    });
}

var styles = ":root {\n  --hv-accent: #59bf40;\n  --hv-accent-bright: #7bdc63;\n  --hv-panel: #1b2229;\n  --hv-panel-light: #252e37;\n  --hv-border: rgba(255, 255, 255, 0.11);\n  --hv-text-muted: rgba(255, 255, 255, 0.64);\n  --hv-warning: #e7ab3e;\n}\n\n.hv-decky-good {\n  color: var(--hv-accent-bright);\n}\n\n.hv-decky-warn {\n  color: var(--hv-warning);\n}\n\n.hv-decky-muted {\n  color: var(--hv-text-muted);\n}\n\n.hv-decky-error {\n  margin-top: 18px;\n  padding: 12px 14px;\n  border: 1px solid rgba(255, 107, 107, 0.45);\n  border-radius: 6px;\n  background: rgba(255, 107, 107, 0.1);\n  color: #ff9a9a;\n  overflow-wrap: anywhere;\n}\n\n.hv-decky-log {\n  width: 100%;\n  max-height: 220px;\n  box-sizing: border-box;\n  margin: 18px 0 0;\n  padding: 14px;\n  overflow: auto;\n  border: 1px solid var(--hv-border);\n  border-radius: 6px;\n  background: rgba(0, 0, 0, 0.35);\n  color: rgba(255, 255, 255, 0.78);\n  font: 12px/1.45 monospace;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.hv-decky-log.failed {\n  border-color: rgba(255, 107, 107, 0.45);\n}\n\n.hv-decky-wizard-layout {\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr);\n  box-sizing: border-box;\n  padding-top: 42px;\n  overflow: hidden;\n  background: #000;\n  color: white;\n}\n\n.hv-decky-visual-rail {\n  min-height: 0;\n  border-right: 1px solid var(--hv-border);\n  background: #000;\n}\n\n.hv-decky-visual-rail-title {\n  min-height: 54px;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 22px;\n  border-bottom: 1px solid var(--hv-border);\n  font-size: 20px;\n  font-weight: 650;\n}\n\n.hv-decky-visual-steps {\n  padding: 14px 22px;\n}\n\n.hv-decky-visual-step {\n  min-height: 30px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 14px;\n}\n\n.hv-decky-visual-step > span {\n  display: grid;\n  width: 18px;\n  place-items: center;\n  color: inherit;\n  font-size: 13px;\n}\n\n.hv-decky-visual-step.current {\n  color: white;\n}\n\n.hv-decky-visual-step.complete {\n  color: rgba(255, 255, 255, 0.68);\n}\n\n.hv-decky-visual-step.complete > span {\n  color: var(--hv-accent-bright);\n}\n\n.hv-decky-visual-step svg {\n  width: 11px;\n}\n\n.hv-decky-native-step-page {\n  width: 100%;\n  min-width: 0;\n  height: 100%;\n  min-height: 0;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: hidden;\n  background: #000;\n}\n\n.hv-decky-wizard-layout:focus,\n.hv-decky-native-step-page:focus {\n  outline: none !important;\n}\n\n.hv-decky-advanced-fullscreen {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.hv-decky-advanced-fullscreen .hv-decky-settings-list {\n  max-width: none;\n}\n\n.hv-decky-native-body {\n  height: auto !important;\n  max-height: none !important;\n  min-height: 0;\n  flex: 1 1 0 !important;\n  box-sizing: border-box;\n  padding: 28px 40px 72px;\n  overflow: auto;\n}\n\n.hv-decky-native-body > div:first-child {\n  margin-bottom: 22px;\n}\n\n.hv-decky-native-content {\n  max-width: 900px;\n}\n\n.hv-decky-native-actions {\n  display: grid;\n  grid-template-columns: 170px 1fr 190px;\n  gap: 18px;\n  align-items: center;\n  box-sizing: border-box;\n  margin-top: 32px;\n  padding-top: 18px;\n  border-top: 1px solid var(--hv-border);\n}\n\n.hv-decky-native-actions > span {\n  color: var(--hv-text-muted);\n  font-size: 12px;\n  text-align: center;\n}\n\n.hv-decky-native-actions .DialogButton {\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  justify-content: center;\n}\n\n.hv-decky-lead {\n  max-width: 760px;\n  margin: 0 0 28px;\n  color: var(--hv-text-muted);\n  font-size: 17px;\n  line-height: 1.55;\n}\n\n.hv-decky-control-card,\n.hv-decky-install-card {\n  max-width: 820px;\n  box-sizing: border-box;\n  padding: 22px;\n  border: 1px solid var(--hv-border);\n  border-radius: 10px;\n  background: rgba(31, 39, 47, 0.78);\n}\n\n.hv-decky-facts {\n  max-width: 820px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1px;\n  margin-top: 24px;\n  overflow: hidden;\n  border: 1px solid var(--hv-border);\n  border-radius: 9px;\n  background: var(--hv-border);\n}\n\n.hv-decky-welcome-text {\n  margin: 0;\n  color: var(--hv-text-muted);\n  font-size: 17px;\n  line-height: 1.5;\n}\n\n.hv-decky-facts > div {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  padding: 17px;\n  background: var(--hv-panel);\n}\n\n.hv-decky-facts span,\n.hv-decky-source-path > span,\n.hv-decky-install-status span,\n.hv-decky-install-card-header span {\n  color: var(--hv-text-muted);\n  font-size: 12px;\n}\n\n.hv-decky-facts strong,\n.hv-decky-source-path strong {\n  overflow: hidden;\n  font-size: 14px;\n  text-overflow: ellipsis;\n}\n\n.hv-decky-choice-grid {\n  max-width: 850px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.hv-decky-choice.DialogButton {\n  min-height: 120px;\n  display: flex;\n  align-items: stretch;\n  box-sizing: border-box;\n  padding: 18px;\n  border: 1px solid var(--hv-border);\n  border-radius: 6px;\n  background: var(--hv-panel);\n  text-align: left;\n  white-space: normal;\n}\n\n.hv-decky-choice.DialogButton.selected {\n  border-color: var(--hv-accent);\n  background: var(--hv-panel-light);\n}\n\n.hv-decky-choice-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.hv-decky-choice-title {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  font-size: 19px;\n  font-weight: 650;\n}\n\n.hv-decky-choice-title svg {\n  color: var(--hv-accent-bright);\n}\n\n.hv-decky-choice-description {\n  color: var(--hv-text-muted);\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.hv-decky-choice.DialogButton:focus {\n  outline: 3px solid white !important;\n  outline-offset: -3px;\n  background: var(--hv-panel) !important;\n  color: white !important;\n}\n\n.hv-decky-choice.DialogButton:focus .hv-decky-choice-title {\n  color: white !important;\n}\n\n.hv-decky-choice.DialogButton:focus .hv-decky-choice-description {\n  color: var(--hv-text-muted) !important;\n}\n\n.hv-decky-kernel-display {\n  max-width: 850px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  box-sizing: border-box;\n  margin-top: 18px;\n  padding: 13px 16px;\n  border: 1px solid var(--hv-border);\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.045);\n}\n\n.hv-decky-kernel-display span {\n  color: var(--hv-text-muted);\n  font-size: 13px;\n}\n\n.hv-decky-kernel-display strong {\n  min-width: 0;\n  overflow-wrap: anywhere;\n  font-family: monospace;\n  font-size: 13px;\n  text-align: right;\n}\n\n.hv-decky-control-card > div + div,\n.hv-decky-control-card > div + label {\n  margin-top: 16px;\n}\n\n.hv-decky-proton-card {\n  max-width: 850px;\n}\n\n.hv-decky-proton-card > .DialogButton {\n  width: 100%;\n  margin-top: 16px;\n}\n\n.hv-decky-proton-release {\n  padding-top: 16px;\n  border-top: 1px solid var(--hv-border);\n}\n\n.hv-decky-proton-release-title,\n.hv-decky-proton-asset,\n.hv-decky-proton-asset > div {\n  display: flex;\n}\n\n.hv-decky-proton-release-title,\n.hv-decky-proton-asset {\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.hv-decky-proton-release-title span,\n.hv-decky-proton-asset small {\n  color: var(--hv-text-muted);\n  font-size: 12px;\n}\n\n.hv-decky-proton-assets {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 14px;\n}\n\n.hv-decky-proton-asset {\n  padding: 12px;\n  border: 1px solid var(--hv-border);\n  border-radius: 6px;\n  background: rgba(0, 0, 0, 0.18);\n}\n\n.hv-decky-proton-asset > div {\n  min-width: 0;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.hv-decky-proton-asset strong {\n  overflow-wrap: anywhere;\n}\n\n.hv-decky-proton-asset > .DialogButton {\n  min-width: 190px;\n}\n\n.hv-decky-proton-success {\n  margin-top: 14px;\n  color: var(--hv-accent-bright);\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n\n.hv-decky-manual-control-card {\n  position: relative;\n}\n\n.hv-decky-manual-control-card .hv-decky-source-path {\n  padding-right: 48px;\n}\n\n.hv-decky-compact-icon-button.DialogButton {\n  width: 34px !important;\n  min-width: 34px !important;\n  max-width: 34px !important;\n  height: 34px !important;\n  min-height: 34px !important;\n  max-height: 34px !important;\n  display: flex !important;\n  flex: 0 0 34px !important;\n  align-items: center !important;\n  justify-content: center !important;\n  box-sizing: border-box !important;\n  padding: 0 !important;\n  font-size: 12px;\n  line-height: 1 !important;\n}\n\n.hv-decky-compact-icon-button.DialogButton > div {\n  width: 100% !important;\n  height: 100% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  box-sizing: border-box !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.hv-decky-compact-icon-button.DialogButton svg {\n  width: 14px;\n  height: 14px;\n  display: block;\n  margin: auto;\n}\n\n.hv-decky-manual-options-button.DialogButton {\n  position: absolute !important;\n  top: 14px !important;\n  right: 14px !important;\n  bottom: auto !important;\n  left: auto !important;\n  margin: 0 !important;\n}\n\n.hv-decky-build-options-modal {\n  width: 100%;\n}\n\n.hv-decky-source-path {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 7px 12px;\n  align-items: center;\n  margin-bottom: 18px;\n}\n\n.hv-decky-source-path > span {\n  grid-column: 1 / -1;\n}\n\n.hv-decky-inline-buttons {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.hv-decky-inline-buttons .DialogButton,\n.hv-decky-action-stack .DialogButton {\n  flex: 1;\n}\n\n.hv-decky-install-card {\n  display: grid;\n  grid-template-columns: minmax(200px, 0.8fr) minmax(260px, 1.2fr);\n  column-gap: 24px;\n  row-gap: 14px;\n}\n\n.hv-decky-install-card-header {\n  grid-column: 1 / -1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.hv-decky-install-card-header > div {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.hv-decky-install-status small {\n  display: block;\n  margin-top: 8px;\n  color: var(--hv-text-muted);\n  overflow-wrap: anywhere;\n}\n\n.hv-decky-action-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.hv-decky-pill {\n  display: inline-flex;\n  align-items: center;\n  width: max-content;\n  padding: 4px 9px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n\n.hv-decky-pill.good {\n  background: rgba(89, 191, 64, 0.16);\n  color: var(--hv-accent-bright);\n}\n\n.hv-decky-pill.warn {\n  background: rgba(231, 171, 62, 0.14);\n  color: #f0bd5f;\n}\n\n.hv-decky-verify-grid {\n  max-width: 850px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.hv-decky-verify-lead {\n  margin-bottom: 18px;\n}\n\n.hv-decky-check-card {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  min-height: 150px;\n  padding: 16px;\n  border: 1px solid var(--hv-border);\n  border-radius: 7px;\n  background: var(--hv-panel);\n}\n\n.hv-decky-check-card-header {\n  min-height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.hv-decky-check-card-header strong {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 17px;\n}\n\n.hv-decky-check-card-header strong span {\n  color: var(--hv-accent-bright);\n  font-size: 13px;\n}\n\n.hv-decky-check-card > p {\n  flex: 1;\n  margin: 8px 0 12px;\n  color: var(--hv-text-muted);\n  font-size: 13px;\n  line-height: 1.45;\n}\n\n.hv-decky-check-card > .DialogButton {\n  width: 100%;\n}\n\n.hv-decky-game-groups {\n  max-width: 900px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.hv-decky-game-search {\n  max-width: 420px;\n}\n\n.hv-decky-game-group {\n  overflow: hidden;\n  border: 1px solid var(--hv-border);\n  border-radius: 10px;\n  background: var(--hv-panel);\n}\n\n.hv-decky-game-group-toggle.DialogButton {\n  width: 100%;\n  height: 52px;\n  padding: 0 16px;\n  border-radius: 0;\n  background: rgba(255, 255, 255, 0.035);\n}\n\n.hv-decky-game-group-toggle.DialogButton > div {\n  display: flex;\n  align-items: center;\n}\n\n.hv-decky-game-group-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.hv-decky-game-group-title svg {\n  color: var(--hv-accent-bright);\n  font-size: 13px;\n}\n\n.hv-decky-game-group-list {\n  border-top: 1px solid var(--hv-border);\n}\n\n.hv-decky-game-group-list > div {\n  padding: 8px 14px;\n  border-bottom: 1px solid var(--hv-border);\n}\n\n.hv-decky-game-group-list > div:last-child {\n  border-bottom: 0;\n}\n\n.hv-decky-game-group-empty {\n  color: var(--hv-text-muted);\n  font-size: 13px;\n  text-align: center;\n}\n\n.hv-decky-empty,\n.hv-decky-loading {\n  max-width: 780px;\n  padding: 28px;\n  border: 1px dashed var(--hv-border);\n  border-radius: 9px;\n  color: var(--hv-text-muted);\n  text-align: center;\n}\n\n.hv-decky-complete {\n  max-width: 760px;\n  padding-top: 12px;\n  text-align: center;\n}\n\n.hv-decky-complete-icon {\n  display: grid;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 20px;\n  place-items: center;\n  border-radius: 50%;\n  background: var(--hv-accent);\n  box-shadow: 0 0 0 10px rgba(89, 191, 64, 0.1);\n  color: #0b1609;\n  font-size: 30px;\n}\n\n.hv-decky-complete h2 {\n  margin: 0 0 10px;\n  font-size: 30px;\n}\n\n.hv-decky-complete > p {\n  max-width: 600px;\n  margin: 0 auto;\n  color: var(--hv-text-muted);\n  font-size: 16px;\n  line-height: 1.5;\n}\n\n.hv-decky-facts.compact {\n  margin: 26px auto 0;\n  text-align: left;\n}\n\n@media (max-width: 850px) {\n  .hv-decky-native-body {\n    padding: 24px 30px 18px;\n  }\n\n  .hv-decky-choice.DialogButton {\n    height: 160px;\n  }\n}\n\n.hv-decky-settings-list {\n  max-width: 900px;\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid var(--hv-border);\n}\n\n.hv-decky-manager-body {\n  padding-bottom: 28px;\n}\n\n.hv-decky-manager-body > div:last-child {\n  max-width: 1000px;\n}\n\n.hv-decky-manager-proton {\n  max-width: 900px;\n}\n\n.hv-decky-proton-loading {\n  margin-top: 16px;\n  color: var(--hv-text-muted);\n  font-size: 13px;\n}\n\n.hv-decky-settings-row {\n  box-sizing: border-box;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--hv-border);\n  background: transparent;\n}\n\n.hv-decky-settings-row > .DialogButton {\n  width: 100%;\n}\n\n.hv-decky-log-modal {\n  width: 100%;\n}\n\n.hv-decky-log-modal > div:first-child {\n  margin-bottom: 10px;\n  color: var(--hv-text-muted);\n  overflow-wrap: anywhere;\n}\n\n.hv-decky-log-modal .hv-decky-log {\n  max-height: 55vh;\n}\n";

function AdvancedPage() {
    const { status, setStatus, error, setError } = useStatus(3000);
    const [busy, setBusy] = SP_REACT.useState(null);
    const pageRef = SP_REACT.useRef(null);
    SP_REACT.useEffect(() => {
        if (!status)
            return;
        const animationFrame = window.requestAnimationFrame(() => {
            pageRef.current
                ?.querySelector(".hv-decky-settings-list [tabindex]:not([tabindex='-1']):not([disabled]), .hv-decky-settings-list .DialogButton:not([disabled])")
                ?.focus({ preventScroll: true });
        });
        return () => window.cancelAnimationFrame(animationFrame);
    }, [Boolean(status)]);
    const run = async (label, action) => {
        setBusy(label);
        setError(null);
        try {
            const result = await action();
            setStatus(result.status);
            toaster.toast({
                title: result.ok ? `${label} complete` : `${label} failed`,
                body: result.message,
            });
            return result;
        }
        catch (reason) {
            const message = String(reason);
            setError(message);
            toaster.toast({ title: `${label} failed`, body: message });
            return null;
        }
        finally {
            setBusy(null);
        }
    };
    const changeHostBuild = async (enabled) => {
        setBusy("build-method");
        setError(null);
        try {
            setStatus(await setContainerBuildEnabled(!enabled));
        }
        catch (reason) {
            setError(String(reason));
        }
        finally {
            setBusy(null);
        }
    };
    const changeGameWatcher = async (enabled) => {
        setBusy("game-watcher");
        setError(null);
        try {
            setStatus(await setGameWatcherMode(enabled ? "steam_log" : "steam_api"));
        }
        catch (reason) {
            setError(String(reason));
        }
        finally {
            setBusy(null);
        }
    };
    const disableLegacyUmip = async () => {
        const result = await run("Disable UMIP", disableUmip);
        if (!result?.ok || !result.reboot_required)
            return;
        const modal = DFL.showModal(SP_JSX.jsx(DFL.ConfirmModal, { strTitle: "Reboot required", strDescription: "UMIP has been disabled, but the kernel command-line change will not apply until the Steam Deck restarts.", strOKButtonText: "Reboot now", strCancelButtonText: "Later", onOK: () => {
                modal.Close();
                void run("Reboot", rebootSystem);
            }, onCancel: () => modal.Close(), bDisableBackgroundDismiss: true }));
    };
    const showLogs = async () => {
        setBusy("logs");
        let log;
        try {
            log = await getOperationLog();
        }
        catch (reason) {
            log = `Could not read the operation log: ${String(reason)}`;
        }
        finally {
            setBusy(null);
        }
        const modal = DFL.showModal(SP_JSX.jsx(DFL.ConfirmModal, { strTitle: "Operation logs", strDescription: SP_JSX.jsxs("div", { className: "hv-decky-log-modal", children: [SP_JSX.jsx("div", { children: status?.operation_log_path ?? "Session log unavailable" }), SP_JSX.jsx("pre", { className: "hv-decky-log", children: log })] }), strOKButtonText: "Close", bAlertDialog: true, onOK: () => modal.Close() }));
    };
    return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("style", { children: styles }), SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-wizard-layout hv-decky-advanced-fullscreen", "flow-children": "column", noFocusRing: true, navEntryPreferPosition: DFL.NavEntryPositionPreferences.PREFERRED_CHILD, children: SP_JSX.jsx(DFL.Focusable, { ref: pageRef, className: "hv-decky-native-step-page", "flow-children": "column", preferredFocus: true, noFocusRing: true, onCancelActionDescription: "Back", onCancelButton: (event) => {
                        if (event.detail.is_repeat || busy !== null)
                            return;
                        event.preventDefault();
                        event.stopPropagation();
                        DFL.Navigation.NavigateBack();
                    }, children: SP_JSX.jsxs(DFL.DialogBody, { className: "hv-decky-native-body", children: [SP_JSX.jsx(DFL.DialogHeader, { children: "Advanced settings" }), !status ? (SP_JSX.jsx("div", { className: "hv-decky-loading", children: error ?? "Loading…" })) : (SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-settings-list", "flow-children": "column", noFocusRing: true, children: [SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-settings-row", "flow-children": "column", noFocusRing: true, children: SP_JSX.jsx(DFL.ToggleField, { label: "Build directly on SteamOS", checked: !status.container_build_enabled, disabled: busy !== null, onChange: (enabled) => void changeHostBuild(enabled) }) }), SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-settings-row", "flow-children": "column", noFocusRing: true, children: SP_JSX.jsx(DFL.ToggleField, { label: "Use alternative Steam log watcher", checked: status.game_watcher_mode === "steam_log", disabled: busy !== null, onChange: (enabled) => void changeGameWatcher(enabled) }) }), SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-settings-row", "flow-children": "column", noFocusRing: true, children: SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null || status.umip_disabled, onClick: () => void disableLegacyUmip(), children: status.umip_disabled ? "UMIP is already disabled" : busy === "Disable UMIP" ? "Disabling…" : "Disable UMIP" }) }), SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-settings-row", "flow-children": "column", noFocusRing: true, children: SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null, onClick: () => void showLogs(), children: busy === "logs" ? "Reading logs…" : "Show operation logs" }) })] })), error && SP_JSX.jsx("div", { className: "hv-decky-error", children: error })] }) }) })] }));
}

function GameGroup({ title, games, disabled, onChange, }) {
    const [open, setOpen] = SP_REACT.useState(true);
    return (SP_JSX.jsxs("div", { className: "hv-decky-game-group", children: [SP_JSX.jsx(DFL.DialogButton, { className: "hv-decky-game-group-toggle", onOKActionDescription: open ? `Collapse ${title}` : `Expand ${title}`, onClick: () => setOpen((current) => !current), children: SP_JSX.jsxs("span", { className: "hv-decky-game-group-title", children: [open ? SP_JSX.jsx(FaChevronDown, {}) : SP_JSX.jsx(FaChevronRight, {}), SP_JSX.jsx("strong", { children: title })] }) }), open && (SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-game-group-list", "flow-children": "column", children: games.length ? games.map((game) => (SP_JSX.jsx(DFL.ToggleField, { label: game.name, description: game.running ? "Running now" : game.non_steam ? "Non-Steam game" : `Steam app ${game.app_id}`, checked: game.hv_enabled, disabled: disabled, onChange: (enabled) => onChange(game, enabled) }, game.app_id))) : (SP_JSX.jsxs("div", { className: "hv-decky-game-group-empty", children: ["No ", title.toLowerCase(), " were found."] })) }))] }));
}
function GameToggleGroups({ games, disabled, onChange }) {
    const [search, setSearch] = SP_REACT.useState("");
    if (!games.length) {
        return SP_JSX.jsx("div", { className: "hv-decky-empty", children: "No installed games were found." });
    }
    const query = search.trim().toLocaleLowerCase();
    const filteredGames = query
        ? games.filter((game) => game.name.toLocaleLowerCase().includes(query) ||
            game.app_id.toLocaleLowerCase().includes(query))
        : games;
    const steamGames = filteredGames.filter((game) => !game.non_steam);
    const nonSteamGames = filteredGames.filter((game) => game.non_steam);
    return (SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-game-groups", "flow-children": "column", children: [SP_JSX.jsx("div", { className: "hv-decky-game-search", children: SP_JSX.jsx(DFL.TextField, { label: "Search games", value: search, onChange: (event) => setSearch(event.currentTarget.value) }) }), filteredGames.length ? (SP_JSX.jsxs(SP_JSX.Fragment, { children: [(steamGames.length > 0 || !query) && (SP_JSX.jsx(GameGroup, { title: "Steam Games", games: steamGames, disabled: disabled, onChange: onChange })), (nonSteamGames.length > 0 || !query) && (SP_JSX.jsx(GameGroup, { title: "Non-Steam Apps", games: nonSteamGames, disabled: disabled, onChange: onChange }))] })) : (SP_JSX.jsxs("div", { className: "hv-decky-empty", children: ["No games match \u201C", search.trim(), "\u201D."] }))] }));
}

function GamesProtonPage({ initialTab }) {
    const { status, setStatus, error, setError, refresh } = useStatus(3000);
    const [activeTab, setActiveTab] = SP_REACT.useState(initialTab);
    const [busy, setBusy] = SP_REACT.useState(null);
    const [protonRepository, setProtonRepositoryState] = SP_REACT.useState("default");
    const [customProtonRepository, setCustomProtonRepository] = SP_REACT.useState("");
    const [protonRelease, setProtonRelease] = SP_REACT.useState(null);
    const [configurationReady, setConfigurationReady] = SP_REACT.useState(false);
    const configurationInitialized = SP_REACT.useRef(false);
    const lastProtonRequest = SP_REACT.useRef("");
    SP_REACT.useEffect(() => {
        if (!status || configurationInitialized.current)
            return;
        configurationInitialized.current = true;
        setProtonRepositoryState(status.proton_repository);
        if (status.proton_repository === "custom") {
            setCustomProtonRepository(status.proton_repository_url);
        }
        setConfigurationReady(true);
    }, [status]);
    const loadProtonRelease = async (selectedRepository = protonRepository, selectedCustomRepository = customProtonRepository) => {
        lastProtonRequest.current = selectedRepository === "custom"
            ? `custom:${selectedCustomRepository.trim()}`
            : selectedRepository;
        setBusy("proton-assets");
        setError(null);
        setProtonRelease(null);
        try {
            setStatus(await setProtonRepository(selectedRepository, selectedCustomRepository.trim()));
            setProtonRelease(await getProtonReleaseAssets());
        }
        catch (reason) {
            setError(String(reason));
        }
        finally {
            setBusy(null);
        }
    };
    SP_REACT.useEffect(() => {
        if (!status
            || !configurationReady
            || activeTab !== "proton"
            || protonRelease
            || busy !== null)
            return;
        void loadProtonRelease();
    }, [activeTab, Boolean(status), configurationReady]);
    SP_REACT.useEffect(() => {
        const customRepository = customProtonRepository.trim();
        if (!configurationReady
            || activeTab !== "proton"
            || protonRepository !== "custom"
            || !customRepository)
            return;
        const requestKey = `custom:${customRepository}`;
        const timer = window.setTimeout(() => {
            if (lastProtonRequest.current !== requestKey) {
                void loadProtonRelease("custom", customRepository);
            }
        }, 600);
        return () => window.clearTimeout(timer);
    }, [
        activeTab,
        configurationReady,
        customProtonRepository,
        protonRepository,
    ]);
    const changeGame = async (game, enabled) => {
        setBusy(`game-${game.app_id}`);
        setError(null);
        try {
            setStatus(await setGameHv(game.app_id, enabled));
        }
        catch (reason) {
            setError(String(reason));
            void refresh();
        }
        finally {
            setBusy(null);
        }
    };
    const installProton = async (assetId) => {
        setBusy(`proton-${assetId}`);
        setError(null);
        try {
            const result = await downloadProtonAsset(assetId);
            setStatus(result.status);
            toaster.toast({
                title: result.ok ? "Proton installed" : "Proton installation failed",
                body: result.message,
            });
            if (!result.ok)
                setError(result.message);
        }
        catch (reason) {
            const message = String(reason);
            setError(message);
            toaster.toast({ title: "Proton installation failed", body: message });
        }
        finally {
            setBusy(null);
        }
    };
    const gamesContent = !status ? (SP_JSX.jsx("div", { className: "hv-decky-loading", children: error ?? "Loading…" })) : (SP_JSX.jsx(GameToggleGroups, { games: visibleGames(status.games), disabled: busy !== null, onChange: (game, enabled) => void changeGame(game, enabled) }));
    const protonContent = !status ? (SP_JSX.jsx("div", { className: "hv-decky-loading", children: error ?? "Loading…" })) : (SP_JSX.jsxs("div", { className: "hv-decky-manager-proton", children: [SP_JSX.jsx("p", { className: "hv-decky-lead", children: "Download HV Proton versions straight from the plugin! Steam has to be restarted after installing a new Proton version for it to be recognized." }), SP_JSX.jsxs("div", { className: "hv-decky-control-card hv-decky-proton-card", children: [SP_JSX.jsx(DFL.DropdownItem, { label: "Proton repository", rgOptions: [
                            { data: "default", label: "Default" },
                            { data: "alternative", label: "Alternative" },
                            { data: "custom", label: "Custom" },
                        ], selectedOption: protonRepository, disabled: busy !== null, onChange: (option) => {
                            const selected = option.data;
                            setProtonRepositoryState(selected);
                            setProtonRelease(null);
                            if (selected !== "custom")
                                void loadProtonRelease(selected, "");
                        } }), protonRepository === "custom" && (SP_JSX.jsx(DFL.TextField, { label: "GitHub release", description: "Enter owner/repository, a repository URL, or a /releases/tag/... URL.", value: customProtonRepository, disabled: busy !== null, onChange: (event) => {
                            setCustomProtonRepository(event.currentTarget.value);
                            setProtonRelease(null);
                        } })), busy === "proton-assets" && (SP_JSX.jsx("div", { className: "hv-decky-proton-loading", children: "Loading release assets\u2026" })), protonRelease && (SP_JSX.jsxs("div", { className: "hv-decky-proton-release", children: [SP_JSX.jsxs("div", { className: "hv-decky-proton-release-title", children: [SP_JSX.jsx("strong", { children: protonRelease.name }), protonRelease.tag_name && SP_JSX.jsx("span", { children: protonRelease.tag_name })] }), protonRelease.assets.length ? (SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-proton-assets", "flow-children": "column", children: protonRelease.assets.map((asset) => (SP_JSX.jsxs("div", { className: "hv-decky-proton-asset", children: [SP_JSX.jsxs("div", { children: [SP_JSX.jsx("strong", { children: asset.name }), SP_JSX.jsx("small", { children: asset.size ? `${(asset.size / 1024 / 1024).toFixed(1)} MiB` : "Archive" })] }), SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null, onClick: () => void installProton(asset.id), children: busy === `proton-${asset.id}` ? "Installing…" : "Download & install" })] }, asset.id))) })) : SP_JSX.jsx("div", { className: "hv-decky-empty", children: "This release has no supported Proton archives." })] }))] })] }));
    return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("style", { children: styles }), SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-wizard-layout hv-decky-advanced-fullscreen", "flow-children": "column", noFocusRing: true, navEntryPreferPosition: DFL.NavEntryPositionPreferences.PREFERRED_CHILD, children: SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-native-step-page hv-decky-manager-page", "flow-children": "column", preferredFocus: true, noFocusRing: true, onCancelActionDescription: "Back", onCancelButton: (event) => {
                        if (event.detail.is_repeat || busy !== null)
                            return;
                        event.preventDefault();
                        event.stopPropagation();
                        DFL.Navigation.NavigateBack();
                    }, children: SP_JSX.jsxs(DFL.DialogBody, { className: "hv-decky-native-body hv-decky-manager-body", children: [SP_JSX.jsx(DFL.Tabs, { activeTab: activeTab, onShowTab: (tab) => setActiveTab(tab), autoFocusContents: true, tabs: [
                                    { id: "games", title: "Games", content: gamesContent },
                                    { id: "proton", title: "Proton", content: protonContent },
                                ] }), error && SP_JSX.jsx("div", { className: "hv-decky-error", children: error })] }) }) })] }));
}

let nativeCpuidNoticeShownThisSession = false;
function ProbeResult({ result }) {
    return (SP_JSX.jsxs("div", { style: { width: "100%" }, children: [SP_JSX.jsx("div", { style: { marginBottom: "12px" }, children: result.message }), SP_JSX.jsx("pre", { className: "hv-decky-log", children: result.output.trim() || "No probe output was produced." })] }));
}
function QuickActions({ openSetup, openAdvanced, openGames, openProton, }) {
    const { status, setStatus, error, setError } = useStatus(3000);
    const [busy, setBusy] = SP_REACT.useState(null);
    SP_REACT.useEffect(() => {
        if (!status?.setup_complete || nativeCpuidNoticeShownThisSession)
            return;
        nativeCpuidNoticeShownThisSession = true;
        void getNativeCpuidNotice().then((notice) => {
            if (!notice.show)
                return;
            const modal = DFL.showModal(SP_JSX.jsx(DFL.ConfirmModal, { strTitle: "Native CPUID faulting is available", strDescription: SP_JSX.jsx(ProbeResult, { result: notice }), strOKButtonText: "OK", strCancelButtonText: "Don't show again", onOK: () => modal.Close(), onCancel: () => {
                    modal.Close();
                    void dismissNativeCpuidNotice();
                }, bDisableBackgroundDismiss: true }));
        }).catch(() => undefined);
    }, [status?.setup_complete]);
    const run = async (label, action) => {
        setBusy(label);
        setError(null);
        try {
            const result = await action();
            setStatus(result.status);
            toaster.toast({
                title: result.ok ? `${label} complete` : `${label} failed`,
                body: result.message,
            });
            if (label === "Test HV") {
                const modal = DFL.showModal(SP_JSX.jsx(DFL.ConfirmModal, { strTitle: result.ok ? "HV is working" : "HV test failed", strDescription: SP_JSX.jsx(ProbeResult, { result: result }), strOKButtonText: "Close", bAlertDialog: true, onOK: () => modal.Close() }));
            }
        }
        catch (reason) {
            const message = String(reason);
            setError(message);
            toaster.toast({ title: `${label} failed`, body: message });
        }
        finally {
            setBusy(null);
        }
    };
    if (!status) {
        return (SP_JSX.jsx(DFL.PanelSection, { children: SP_JSX.jsx(DFL.PanelSectionRow, { children: error ?? "Loading HV-Decky…" }) }));
    }
    if (!status.setup_complete) {
        return (SP_JSX.jsx(SP_JSX.Fragment, { children: SP_JSX.jsx(DFL.PanelSection, { children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: openSetup, children: "Start setup" }) }) }) }));
    }
    const mode = status.setup_mode ?? status.game_module_source;
    const modules = mode === "automatic"
        ? status.automatic_modules
        : status.manual_modules;
    const loaded = modules.some((module) => module.loaded);
    const compatible = modules.length > 0 &&
        modules.every((module) => module.kernel_compatible !== false);
    const load = mode === "automatic" ? loadAutomaticModule : loadModule;
    const unload = mode === "automatic" ? unloadAutomaticModule : unloadModule;
    return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsxs(DFL.PanelSection, { title: "Status", children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsxs("div", { style: { width: "100%", lineHeight: 1.5 }, children: [SP_JSX.jsxs("div", { children: ["Module: ", SP_JSX.jsx("span", { className: loaded ? "hv-decky-good" : "hv-decky-muted", children: loaded ? "Running" : "Stopped" })] }), SP_JSX.jsxs("div", { children: ["Setup: ", mode === "automatic" ? "Automatic" : "Manual"] }), SP_JSX.jsxs("div", { children: ["Kernel: ", SP_JSX.jsx("span", { className: compatible ? "hv-decky-good" : "hv-decky-warn", children: compatible ? "Compatible" : modules.length ? "Update required" : "Not installed" })] })] }) }), mode === "automatic" && !compatible && (SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: busy !== null, onClick: () => void run("Update module", downloadBin), children: busy === "Update module" ? "Updating…" : "Download compatible module" }) })), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: busy !== null, onClick: () => void run(loaded ? "Stop module" : "Start module", loaded ? unload : load), children: busy ? "Working…" : loaded ? "Stop module" : "Start module" }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: busy !== null, onClick: () => void run("Test HV", testCpuidFaulting), children: "Test HV" }) })] }), error && (SP_JSX.jsx(DFL.PanelSection, { children: SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx("div", { className: "hv-decky-error", children: error }) }) })), SP_JSX.jsxs(DFL.PanelSection, { title: "Manage", children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: busy !== null, onClick: openGames, children: "Games" }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: busy !== null, onClick: openProton, children: "Proton" }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: busy !== null, onClick: openSetup, children: "Open setup wizard" }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", disabled: busy !== null, onClick: openAdvanced, children: "Advanced settings" }) })] })] }));
}

const steps = [
    { title: "Welcome to HV-Decky", shortTitle: "Welcome" },
    { title: "Choose how to set up", shortTitle: "Setup method" },
    { title: "Configure your setup", shortTitle: "Configuration" },
    { title: "Install the module", shortTitle: "Installation" },
    { title: "Test your Setup", shortTitle: "Test" },
    { title: "Choose your games", shortTitle: "Games" },
    { title: "Install Proton", shortTitle: "Proton" },
    { title: "Setup complete", shortTitle: "Complete" },
];
function StatusPill({ good, children }) {
    return SP_JSX.jsx("span", { className: good ? "hv-decky-pill good" : "hv-decky-pill warn", children: children });
}
function BuildOptionsModal({ initialStatus, onStatus, onClose, }) {
    const [buildOnSteamOS, setBuildOnSteamOS] = SP_REACT.useState(!initialStatus.container_build_enabled);
    const [saving, setSaving] = SP_REACT.useState(false);
    const [modalError, setModalError] = SP_REACT.useState(null);
    const changeBuildMode = async (enabled) => {
        setSaving(true);
        setModalError(null);
        try {
            const nextStatus = await setContainerBuildEnabled(!enabled);
            setBuildOnSteamOS(enabled);
            onStatus(nextStatus);
        }
        catch (reason) {
            setModalError(String(reason));
        }
        finally {
            setSaving(false);
        }
    };
    return (SP_JSX.jsx(DFL.ConfirmModal, { strTitle: "Advanced options", strDescription: SP_JSX.jsxs("div", { className: "hv-decky-build-options-modal", children: [SP_JSX.jsx(DFL.ToggleField, { label: "Build directly on SteamOS", checked: buildOnSteamOS, disabled: saving, onChange: (enabled) => void changeBuildMode(enabled) }), modalError && SP_JSX.jsx("div", { className: "hv-decky-error", children: modalError })] }), strOKButtonText: "Close", bAlertDialog: true, onOK: onClose }));
}
function ChoiceCard({ selected, title, description, onClick, }) {
    return (SP_JSX.jsx(DFL.DialogButton, { className: `hv-decky-choice${selected ? " selected" : ""}`, onOKActionDescription: selected ? "Next" : "Select", onClick: onClick, children: SP_JSX.jsxs("div", { className: "hv-decky-choice-content", children: [SP_JSX.jsxs("div", { className: "hv-decky-choice-title", children: [title, selected && SP_JSX.jsx(FaCheck, {})] }), SP_JSX.jsx("div", { className: "hv-decky-choice-description", children: description })] }) }));
}
function GameToggles({ status, disabled, onChange, }) {
    const games = visibleGames(status.games);
    return SP_JSX.jsx(GameToggleGroups, { games: games, disabled: disabled, onChange: onChange });
}
function SetupWizard() {
    const { status, setStatus, error, setError, refresh } = useStatus(2000);
    const [step, setStep] = SP_REACT.useState(0);
    const [mode, setMode] = SP_REACT.useState(null);
    const [repository, setRepository] = SP_REACT.useState("default");
    const [customRepository, setCustomRepository] = SP_REACT.useState("");
    const [protonRepository, setProtonRepositoryState] = SP_REACT.useState("default");
    const [customProtonRepository, setCustomProtonRepository] = SP_REACT.useState("");
    const [protonRelease, setProtonRelease] = SP_REACT.useState(null);
    const [busy, setBusy] = SP_REACT.useState(null);
    const [operationLog, setOperationLog] = SP_REACT.useState("");
    const [lastResult, setLastResult] = SP_REACT.useState(null);
    const [verified, setVerified] = SP_REACT.useState(null);
    const configurationInitialized = SP_REACT.useRef(false);
    const lastProtonRequest = SP_REACT.useRef("");
    const pageRef = SP_REACT.useRef(null);
    SP_REACT.useEffect(() => {
        if (!status || configurationInitialized.current)
            return;
        configurationInitialized.current = true;
        setMode((current) => current ?? status.setup_mode);
        setRepository(status.module_repository);
        if (status.module_repository === "custom") {
            setCustomRepository(status.module_repository_url);
        }
        setProtonRepositoryState(status.proton_repository);
        if (status.proton_repository === "custom") {
            setCustomProtonRepository(status.proton_repository_url);
        }
    }, [status]);
    SP_REACT.useEffect(() => {
        if (!status || step !== 6 || protonRelease || busy !== null)
            return;
        void loadProtonRelease();
    }, [step, Boolean(status)]);
    SP_REACT.useEffect(() => {
        if (!status)
            return;
        let cancelled = false;
        let retryTimer = 0;
        const focusStep = () => {
            if (cancelled || !pageRef.current)
                return;
            const content = pageRef.current;
            const selector = step === 0 || step === steps.length - 1
                ? ".hv-decky-primary-action:not([disabled])"
                : [
                    ".hv-decky-step-content .hv-decky-inline-buttons .DialogButton:not([disabled])",
                    ".hv-decky-step-content .DialogButton:not([disabled])",
                    ".hv-decky-step-content [tabindex]:not([tabindex='-1']):not([disabled])",
                    ".hv-decky-step-content input:not([disabled])",
                ].join(", ");
            const target = content.querySelector(selector)
                ?? content.querySelector(".hv-decky-primary-action:not([disabled])");
            if (target) {
                target.focus({ preventScroll: true });
            }
            else {
                retryTimer = window.setTimeout(focusStep, 50);
            }
        };
        const animationFrame = window.requestAnimationFrame(focusStep);
        return () => {
            cancelled = true;
            window.cancelAnimationFrame(animationFrame);
            window.clearTimeout(retryTimer);
        };
    }, [step, Boolean(status)]);
    const modules = SP_REACT.useMemo(() => {
        if (!status || !mode)
            return [];
        return mode === "automatic" ? status.automatic_modules : status.manual_modules;
    }, [mode, status]);
    const moduleInstalled = modules.length > 0 &&
        modules.every((module) => module.kernel_compatible !== false);
    const moduleLoaded = modules.some((module) => module.loaded);
    const run = async (label, action) => {
        setBusy(label);
        setError(null);
        setLastResult(null);
        setOperationLog("Starting operation…");
        const poll = window.setInterval(() => {
            void refresh().then((current) => {
                if (current?.last_log)
                    setOperationLog(current.last_log);
            });
        }, 700);
        try {
            const result = await action();
            setStatus(result.status);
            setLastResult(result);
            setOperationLog(result.output.trim()
                ? `${result.message}\n\n${result.output.trim()}`
                : result.message);
            if (!result.ok)
                setError(result.message);
            return result;
        }
        catch (reason) {
            const message = String(reason);
            setError(message);
            setOperationLog(message);
            return null;
        }
        finally {
            window.clearInterval(poll);
            setBusy(null);
        }
    };
    const selectPath = async (zip) => {
        if (!status)
            return;
        setBusy("source");
        setError(null);
        try {
            const selected = await openFilePicker(zip ? 0 /* FileSelectionType.FILE */ : 1 /* FileSelectionType.FOLDER */, status.source_path || "/home/deck", zip, !zip, undefined, zip ? ["zip"] : undefined);
            const path = selected.realpath || selected.path;
            setStatus(zip ? await setSourceZip(path) : await setSourceDirectory(path));
        }
        catch (reason) {
            const message = String(reason);
            if (!message.toLowerCase().includes("cancel"))
                setError(message);
        }
        finally {
            setBusy(null);
        }
    };
    const changeGame = async (game, enabled) => {
        setBusy(`game-${game.app_id}`);
        try {
            setStatus(await setGameHv(game.app_id, enabled));
            setError(null);
        }
        catch (reason) {
            setError(String(reason));
        }
        finally {
            setBusy(null);
        }
    };
    const loadProtonRelease = async (selectedRepository = protonRepository, selectedCustomRepository = customProtonRepository) => {
        lastProtonRequest.current = selectedRepository === "custom"
            ? `custom:${selectedCustomRepository.trim()}`
            : selectedRepository;
        setBusy("proton-assets");
        setError(null);
        setProtonRelease(null);
        try {
            setStatus(await setProtonRepository(selectedRepository, selectedCustomRepository.trim()));
            setProtonRelease(await getProtonReleaseAssets());
        }
        catch (reason) {
            setError(String(reason));
        }
        finally {
            setBusy(null);
        }
    };
    SP_REACT.useEffect(() => {
        const customRepository = customProtonRepository.trim();
        if (step !== 6
            || protonRepository !== "custom"
            || !customRepository)
            return;
        const requestKey = `custom:${customRepository}`;
        const timer = window.setTimeout(() => {
            if (lastProtonRequest.current !== requestKey) {
                void loadProtonRelease("custom", customRepository);
            }
        }, 600);
        return () => window.clearTimeout(timer);
    }, [customProtonRepository, protonRepository, step]);
    const next = async () => {
        if (!status)
            return;
        if (step === 2 && mode === "automatic") {
            setBusy("repository");
            try {
                setStatus(await setModuleRepository(repository, customRepository.trim()));
                setError(null);
            }
            catch (reason) {
                setError(String(reason));
                setBusy(null);
                return;
            }
            setBusy(null);
        }
        if (step === 6 && mode) {
            setBusy("complete");
            try {
                setStatus(await setProtonRepository(protonRepository, customProtonRepository.trim()));
                setStatus(await completeSetup(mode));
                setError(null);
            }
            catch (reason) {
                setError(String(reason));
                setBusy(null);
                return;
            }
            setBusy(null);
        }
        setOperationLog("");
        setLastResult(null);
        setStep((current) => Math.min(steps.length - 1, current + 1));
    };
    const canContinue = Boolean(status) && busy === null && (step === 0 ||
        (step === 1 && mode !== null) ||
        (step === 2 && mode === "automatic" && (repository !== "custom" || customRepository.trim())) ||
        (step === 2 && mode === "manual" && status?.source_ready) ||
        (step === 3 && moduleInstalled) ||
        step === 4 ||
        step === 5 ||
        (step === 6 && (protonRepository !== "custom" || Boolean(customProtonRepository.trim()))));
    const previous = () => {
        if (busy !== null || step === 0)
            return;
        setError(null);
        setOperationLog("");
        setStep((current) => Math.max(0, current - 1));
    };
    const finish = () => {
        toaster.toast({
            title: "HV-Decky setup complete",
            body: "Manage settings in Quick Access.",
        });
        DFL.Navigation.NavigateBack();
    };
    const showTestOutput = () => {
        const modal = DFL.showModal(SP_JSX.jsx(DFL.ConfirmModal, { strTitle: "HV test output", strDescription: SP_JSX.jsx("div", { className: "hv-decky-log-modal", children: SP_JSX.jsx("pre", { className: `hv-decky-log${verified === false ? " failed" : ""}`, children: operationLog || "No test output is available yet." }) }), strOKButtonText: "Close", bAlertDialog: true, onOK: () => modal.Close() }));
    };
    const showInstallationOutput = () => {
        const modal = DFL.showModal(SP_JSX.jsx(DFL.ConfirmModal, { strTitle: mode === "automatic" ? "Download output" : "Build output", strDescription: SP_JSX.jsx("div", { className: "hv-decky-log-modal", children: SP_JSX.jsx("pre", { className: `hv-decky-log${lastResult && !lastResult.ok ? " failed" : ""}`, children: operationLog || "No installation output is available yet." }) }), strOKButtonText: "Close", bAlertDialog: true, onOK: () => modal.Close() }));
    };
    const showBuildOptions = (currentStatus) => {
        const modal = DFL.showModal(SP_JSX.jsx(BuildOptionsModal, { initialStatus: currentStatus, onStatus: setStatus, onClose: () => modal.Close() }));
    };
    const renderStep = () => {
        if (!status) {
            return SP_JSX.jsx("div", { className: "hv-decky-loading", children: error ?? "Loading…" });
        }
        switch (step) {
            case 0:
                return (SP_JSX.jsx("p", { className: "hv-decky-welcome-text", children: "This will guide you through setting up HV." }));
            case 1:
                return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("p", { className: "hv-decky-lead", children: "Choose the setup method that best suits you." }), SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-choice-grid", "flow-children": "row", children: [SP_JSX.jsx(ChoiceCard, { selected: mode === "automatic", title: "Automatic", description: "Recommended. Download a module built for your kernel. Future updates are straightforward.", onClick: () => {
                                        if (mode === "automatic")
                                            void next();
                                        else
                                            setMode("automatic");
                                    } }), SP_JSX.jsx(ChoiceCard, { selected: mode === "manual", title: "Manual", description: "Build from a hypervisor source tree or ZIP. Only select if you know what you are doing and/or have a reason to do so.", onClick: () => {
                                        if (mode === "manual")
                                            void next();
                                        else
                                            setMode("manual");
                                    } })] }), SP_JSX.jsxs("div", { className: "hv-decky-kernel-display", children: [SP_JSX.jsx("span", { children: "Current kernel" }), SP_JSX.jsx("strong", { children: status.kernel_release })] })] }));
            case 2:
                return mode === "automatic" ? (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("p", { className: "hv-decky-lead", children: "Select where HV-Decky should obtain the prebuilt module." }), SP_JSX.jsxs("div", { className: "hv-decky-control-card", children: [SP_JSX.jsx(DFL.DropdownItem, { label: "Module repository", description: repository === "default" ? "Frequently updated builds from the primary repository." : repository === "alternative" ? "Daily builds from the alternative repository. Use if default didn't work (sometimes needed for SteamOS Beta)" : "Use releases from your own GitHub repository. Make sure you trust the source!!!", rgOptions: [
                                        { data: "default", label: "Default" },
                                        { data: "alternative", label: "Alternative" },
                                        { data: "custom", label: "Custom" },
                                    ], selectedOption: repository, disabled: busy !== null, onChange: (option) => setRepository(option.data) }), repository === "custom" && (SP_JSX.jsx(DFL.TextField, { label: "GitHub repository", description: "Enter owner/repository or a GitHub URL.", value: customRepository, disabled: busy !== null, onChange: (event) => setCustomRepository(event.currentTarget.value) }))] })] })) : (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("p", { className: "hv-decky-lead", children: "Choose the hypervisor source and how it should be built." }), SP_JSX.jsxs("div", { className: "hv-decky-control-card hv-decky-manual-control-card", children: [SP_JSX.jsxs("div", { className: "hv-decky-source-path", children: [SP_JSX.jsx("span", { children: "Source" }), SP_JSX.jsx("strong", { children: status.source_path }), SP_JSX.jsx(StatusPill, { good: status.source_ready, children: status.source_ready ? "Makefile found" : "Source required" })] }), SP_JSX.jsx(DFL.DialogButton, { className: "hv-decky-compact-icon-button hv-decky-manual-options-button", disabled: busy !== null, onOKActionDescription: "Advanced options", onClick: () => showBuildOptions(status), children: SP_JSX.jsx(FaCog, {}) }), SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-inline-buttons", "flow-children": "row", children: [SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null, onClick: () => void selectPath(false), children: "Choose folder" }), SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null, onClick: () => void selectPath(true), children: "Choose ZIP" })] })] })] }));
            case 3:
                return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("p", { className: "hv-decky-lead", children: mode === "automatic" ? "Download the module that matches the running kernel." : "Prepare the build environment, then compile the module." }), SP_JSX.jsxs("div", { className: "hv-decky-install-card", children: [SP_JSX.jsxs("div", { className: "hv-decky-install-card-header", children: [SP_JSX.jsxs("div", { children: [SP_JSX.jsx("span", { children: "Kernel module" }), SP_JSX.jsx(StatusPill, { good: moduleInstalled, children: moduleInstalled ? "Installed" : "Not ready" })] }), SP_JSX.jsx(DFL.DialogButton, { className: "hv-decky-compact-icon-button hv-decky-install-output-button", disabled: busy !== null || !operationLog, onOKActionDescription: "View output", onClick: showInstallationOutput, children: SP_JSX.jsx(FaTerminal, {}) })] }), SP_JSX.jsx("div", { className: "hv-decky-install-status", children: modules.map((module) => SP_JSX.jsxs("small", { children: [module.name, ": ", module.compatibility_message] }, module.path)) }), SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-action-stack", "flow-children": "column", children: mode === "automatic" ? (SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null, onClick: () => void run("download", downloadBin), children: busy === "download" ? "Downloading…" : moduleInstalled ? "Download again" : "Download module" })) : status.container_build_enabled ? (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null || !status.podman_path || !status.container_files_ready, onClick: () => void run("container-image", buildContainerImage), children: busy === "container-image" ? "Building image… This will take a while." : "1. Build Podman image" }), SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null || !status.source_ready || !status.podman_path, onClick: () => void run("module-build", buildModuleContainer), children: busy === "module-build" ? "Building module…" : "2. Build kernel module" })] })) : (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null || !status.is_steamos, onClick: () => void run("dependencies", installBuildDependencies), children: busy === "dependencies" ? "Installing dependencies…" : "1. Install build dependencies" }), SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null || !status.source_ready, onClick: () => void run("module-build", buildModule), children: busy === "module-build" ? "Building module…" : "2. Build kernel module" })] })) })] })] }));
            case 4: {
                const load = mode === "automatic" ? loadAutomaticModule : loadModule;
                return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("p", { className: "hv-decky-lead hv-decky-verify-lead", children: "Start the module and test that CPUID faulting works. You can continue if you prefer to verify later." }), SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-verify-grid", "flow-children": "row", noFocusRing: true, children: [SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-check-card", "flow-children": "column", noFocusRing: true, children: [SP_JSX.jsx("div", { className: "hv-decky-check-card-header", children: SP_JSX.jsxs("strong", { children: [SP_JSX.jsx("span", { children: "1" }), " Start module"] }) }), SP_JSX.jsx("p", { children: moduleLoaded ? "The module is running." : "Load the installed module into the current kernel." }), SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null || moduleLoaded, onClick: () => void run("load", load), children: busy === "load" ? "Starting…" : "Start module" })] }), SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-check-card", "flow-children": "column", navEntryPreferPosition: DFL.NavEntryPositionPreferences.LAST, noFocusRing: true, children: [SP_JSX.jsxs("div", { className: "hv-decky-check-card-header", children: [SP_JSX.jsxs("strong", { children: [SP_JSX.jsx("span", { children: "2" }), " Test HV"] }), SP_JSX.jsx(DFL.DialogButton, { className: "hv-decky-compact-icon-button hv-decky-output-button", disabled: verified === null || !operationLog, onOKActionDescription: "View output", onClick: showTestOutput, children: SP_JSX.jsx(FaTerminal, {}) })] }), SP_JSX.jsx("p", { children: verified === null ? "Run the same CPUID probe used by HV-aware games." : verified ? "The HV bypasss is working." : "The HV bypass failed. Check the output with the button above for more details." }), SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null, onClick: () => void run("verify", testCpuidFaulting).then((result) => setVerified(result?.ok ?? false)), children: busy === "verify" ? "Testing…" : "Run test" })] })] })] }));
            }
            case 5:
                return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("p", { className: "hv-decky-lead", children: "Optionally enable HV for games that need it. The module will start when an enabled game runs and stop after the last one exits." }), SP_JSX.jsx(GameToggles, { status: status, disabled: busy !== null, onChange: (game, enabled) => void changeGame(game, enabled) })] }));
            case 6:
                return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("p", { className: "hv-decky-lead", children: "Optionally install a patched Proton build. Steam must be restarted after installation for it to be used for games." }), SP_JSX.jsxs("div", { className: "hv-decky-control-card hv-decky-proton-card", children: [SP_JSX.jsx(DFL.DropdownItem, { label: "Proton repository", rgOptions: [
                                        { data: "default", label: "Default" },
                                        { data: "alternative", label: "Alternative" },
                                        { data: "custom", label: "Custom" },
                                    ], selectedOption: protonRepository, disabled: busy !== null, onChange: (option) => {
                                        const selected = option.data;
                                        setProtonRepositoryState(selected);
                                        setProtonRelease(null);
                                        if (selected !== "custom")
                                            void loadProtonRelease(selected, "");
                                    } }), protonRepository === "custom" && (SP_JSX.jsx(DFL.TextField, { label: "GitHub release", description: "Enter owner/repository, a repository URL, or a /releases/tag/... URL.", value: customProtonRepository, disabled: busy !== null, onChange: (event) => {
                                        setCustomProtonRepository(event.currentTarget.value);
                                        setProtonRelease(null);
                                    } })), busy === "proton-assets" && (SP_JSX.jsx("div", { className: "hv-decky-proton-loading", children: "Loading release assets\u2026" })), protonRelease && (SP_JSX.jsxs("div", { className: "hv-decky-proton-release", children: [SP_JSX.jsxs("div", { className: "hv-decky-proton-release-title", children: [SP_JSX.jsx("strong", { children: protonRelease.name }), protonRelease.tag_name && SP_JSX.jsx("span", { children: protonRelease.tag_name })] }), protonRelease.assets.length ? (SP_JSX.jsx(DFL.Focusable, { className: "hv-decky-proton-assets", "flow-children": "column", children: protonRelease.assets.map((asset) => (SP_JSX.jsxs("div", { className: "hv-decky-proton-asset", children: [SP_JSX.jsxs("div", { children: [SP_JSX.jsx("strong", { children: asset.name }), SP_JSX.jsx("small", { children: asset.size ? `${(asset.size / 1024 / 1024).toFixed(1)} MiB` : "Archive" })] }), SP_JSX.jsx(DFL.DialogButton, { disabled: busy !== null, onClick: () => void run(`proton-${asset.id}`, () => downloadProtonAsset(asset.id)), children: busy === `proton-${asset.id}` ? "Installing…" : "Download & install" })] }, asset.id))) })) : (SP_JSX.jsx("div", { className: "hv-decky-empty", children: "This release has no supported Proton archives." })), lastResult?.ok && (SP_JSX.jsx("div", { className: "hv-decky-proton-success", children: lastResult.message }))] }))] })] }));
            default:
                return (SP_JSX.jsxs("div", { className: "hv-decky-complete", children: [SP_JSX.jsx("div", { className: "hv-decky-complete-icon", children: SP_JSX.jsx(FaCheck, {}) }), SP_JSX.jsx("h2", { children: "HV-Decky is ready" }), SP_JSX.jsxs("p", { children: [mode, " setup completed. You can manage the module and per-game HV settings from the Quick Access tab."] }), SP_JSX.jsxs("div", { className: "hv-decky-facts compact", children: [SP_JSX.jsxs("div", { children: [SP_JSX.jsx("span", { children: "Setup" }), SP_JSX.jsx("strong", { children: mode === "automatic" ? "Automatic" : "Manual" })] }), SP_JSX.jsxs("div", { children: [SP_JSX.jsx("span", { children: "Module" }), SP_JSX.jsx("strong", { children: moduleLoaded ? "Running" : "Stopped" })] }), SP_JSX.jsxs("div", { children: [SP_JSX.jsx("span", { children: "Enabled games" }), SP_JSX.jsx("strong", { children: status.games.filter((game) => game.hv_enabled).length })] })] })] }));
        }
    };
    return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("style", { children: styles }), SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-wizard-layout", "flow-children": "row", noFocusRing: true, navEntryPreferPosition: DFL.NavEntryPositionPreferences.PREFERRED_CHILD, children: [SP_JSX.jsxs("aside", { className: "hv-decky-visual-rail", children: [SP_JSX.jsx("div", { className: "hv-decky-visual-rail-title", children: "Setup Assistant" }), SP_JSX.jsx("div", { className: "hv-decky-visual-steps", children: steps.map((item, index) => (SP_JSX.jsxs("div", { className: `hv-decky-visual-step${index < step ? " complete" : index === step ? " current" : " future"}`, children: [SP_JSX.jsx("span", { children: index < step ? SP_JSX.jsx(FaCheck, {}) : index === step ? ">" : null }), item.shortTitle] }, item.shortTitle))) })] }), SP_JSX.jsx(DFL.Focusable, { ref: pageRef, className: "hv-decky-native-step-page", "flow-children": "column", preferredFocus: true, noFocusRing: true, onCancelActionDescription: step === 0 ? "Back" : "Previous", onCancelButton: (event) => {
                            if (event.detail.is_repeat || busy !== null)
                                return;
                            event.preventDefault();
                            event.stopPropagation();
                            if (step === 0)
                                DFL.Navigation.NavigateBack();
                            else
                                previous();
                        }, children: SP_JSX.jsxs(DFL.DialogBody, { className: "hv-decky-native-body", children: [SP_JSX.jsx(DFL.DialogHeader, { children: steps[step].title }), SP_JSX.jsxs("div", { className: "hv-decky-native-content", children: [SP_JSX.jsx("div", { className: "hv-decky-step-content", children: renderStep() }), error && SP_JSX.jsx("div", { className: "hv-decky-error", children: error }), SP_JSX.jsxs(DFL.Focusable, { className: "hv-decky-native-actions", "flow-children": "row", navEntryPreferPosition: DFL.NavEntryPositionPreferences.LAST, children: [SP_JSX.jsxs(DFL.DialogButton, { disabled: busy !== null || step === 0, onClick: previous, children: [SP_JSX.jsx(FaChevronLeft, {}), " Back"] }), step === steps.length - 1 ? (SP_JSX.jsx(DFL.DialogButton, { className: "hv-decky-primary-action", onOKActionDescription: "Finish", onClick: finish, children: "Finish" })) : (SP_JSX.jsx(DFL.DialogButton, { className: "hv-decky-primary-action", disabled: !canContinue, onOKActionDescription: step === 6 ? "Complete" : "Next", onClick: () => void next(), children: step === 6 ? "Complete setup" : "Continue" }))] })] })] }) })] })] }));
}

const SETUP_ROUTE = "/hv-decky/setup";
const ADVANCED_ROUTE = "/hv-decky/advanced";
const GAMES_ROUTE = "/hv-decky/games";
const PROTON_ROUTE = "/hv-decky/proton";
var index = definePlugin(() => {
    const openSetup = () => {
        DFL.Navigation.Navigate(SETUP_ROUTE);
        DFL.Navigation.CloseSideMenus();
    };
    const openAdvanced = () => {
        DFL.Navigation.Navigate(ADVANCED_ROUTE);
        DFL.Navigation.CloseSideMenus();
    };
    const openGames = () => {
        DFL.Navigation.Navigate(GAMES_ROUTE);
        DFL.Navigation.CloseSideMenus();
    };
    const openProton = () => {
        DFL.Navigation.Navigate(PROTON_ROUTE);
        DFL.Navigation.CloseSideMenus();
    };
    routerHook.addRoute(SETUP_ROUTE, SetupWizard);
    routerHook.addRoute(ADVANCED_ROUTE, AdvancedPage);
    routerHook.addRoute(GAMES_ROUTE, () => SP_JSX.jsx(GamesProtonPage, { initialTab: "games" }));
    routerHook.addRoute(PROTON_ROUTE, () => SP_JSX.jsx(GamesProtonPage, { initialTab: "proton" }));
    const showModuleUpdateNotice = (notice) => {
        if (!notice.show)
            return;
        toaster.toast({
            title: "HV module update required",
            body: notice.message,
            critical: true,
        });
    };
    const lifetimeRegistration = SteamClient.GameSessions.RegisterForAppLifetimeNotifications(({ unAppID, nInstanceID, bRunning }) => {
        void updateGameLifetime(String(unAppID), nInstanceID, bRunning)
            .then(showModuleUpdateNotice)
            .catch((reason) => console.error("HV-Decky could not handle game state change", reason));
    });
    return {
        name: "HV-Decky",
        titleView: SP_JSX.jsx("div", { className: DFL.staticClasses.Title, children: "HV-Decky" }),
        content: SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("style", { children: styles }), SP_JSX.jsx(QuickActions, { openSetup: openSetup, openAdvanced: openAdvanced, openGames: openGames, openProton: openProton })] }),
        icon: SP_JSX.jsx(FaMicrochip, {}),
        onDismount: () => {
            lifetimeRegistration.unregister();
            routerHook.removeRoute(SETUP_ROUTE);
            routerHook.removeRoute(ADVANCED_ROUTE);
            routerHook.removeRoute(GAMES_ROUTE);
            routerHook.removeRoute(PROTON_ROUTE);
        },
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
