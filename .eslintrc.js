module.exports = {
	extends: [
		// add more generic rulesets here, such as:
		// 'eslint:recommended',
		'plugin:vue/vue3-recommended',

		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
	],
	rules: {
		'vue/singleline-html-element-content-newline': 'off',

		'vue/html-indent': [
			'error',
			type,
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
	},

	// override/add rules settings here, such as:
	// 'vue/no-unused-vars': 'error'
};
