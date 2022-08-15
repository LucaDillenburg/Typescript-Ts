/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

/*
const path = require('path')

const sharedPath = path.join(__dirname, '/../shared/src')
const extraNodeModules = {
	shared: sharedPath
}
const watchFolders = [sharedPath]

module.exports = {
	resolver: {
		extraNodeModules
	},
	watchFolders,
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false
			}
		})
	}
} */

module.exports = {
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false
			}
		})
	}
}
