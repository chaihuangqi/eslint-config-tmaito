'use strict';

module.exports = {
	plugins: ['react'],
	extends: [
		'eslint-config-tmaito-base',
		'./rules/react',
		// './rules/react-hooks',
		// './rules/react-a11y',
	].map(require.resolve),
	rules: {}
};
