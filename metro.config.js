// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = getDefaultConfig(__dirname);

// // Ensure Metro prefers React Native builds before ESM/module fields.
// config.resolver = config.resolver || {};
// config.resolver.resolverMainFields = [
//   "react-native",
//   "react-native-web",
//   "browser",
//   "module",
//   "main",
// ];

// module.exports = withNativeWind(config, { input: "../global.css" });

const { getDefaultConfig } = require("expo/metro-config");

/** 
@type
 
{import('expo/metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = false;

module.exports = config;
