module.exports = {
	plugins: [
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
	// View link below for react rules documentation
	// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
	rules: {
		// Specify whether double or single quotes should be used in JSX attributes
		// https://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['error', 'prefer-double'],

		// Enforce boolean attributes notation in JSX(fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

		// Validate closing bracket location in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		'react/jsx-closing-bracket-location': [ 'error', 'line-aligned' ],

		// Validate closing tag location in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
		'react/jsx-closing-tag-location': 'error',

		// Enforce or disallow spaces inside of curly braces in JSX attributes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
		'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

		// Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

		// Enforce JSX indentation(fixable)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		'react/jsx-indent': [ 'error', 2 ],

		// Validate props indentation in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent-props': [ 'error', 2 ],

		// Validate JSX has key prop when in array or iterator
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		'react/jsx-key': 'off',

		// Limit maximum of props on a single line in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
		'react/jsx-max-props-per-line': [ 'error', { maximum: 2, when: 'multiline' } ],

		// Prevent usage of .bind() in JSX props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': [
			'error',
			{
				ignoreRefs: true,
				allowArrowFunctions: true,
				allowFunctions: false,
				allowBind: false,
				ignoreDOMComponents: true
			}
		],

		// Prevent duplicate props in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		'react/jsx-no-duplicate-props': [ 'error', { ignoreCase: true } ],

		// Disallow undeclared variables in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		'react/jsx-no-undef': 'error',

		// Enforce PascalCase for user-defined JSX components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		'react/jsx-pascal-case': [
			'error',
			{
				allowAllCaps: true,
				ignore: []
			}
		],

		// Prevent React to be incorrectly marked as unused
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		'react/jsx-uses-react': [ 'warn' ],

		// Prevent variables used in JSX to be incorrectly marked as unused
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		'react/jsx-uses-vars': 'warn',

		// Prevent usage of dangerous JSX properties
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		'react/no-danger': 'off',

		// Prevent problem with children and props.dangerouslySetInnerHTML
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		'react/no-danger-with-children': 'warn',

		// Prevent usage of deprecated methods
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		'react/no-deprecated': [ 'warn' ],

		// Prevent usage of setState in componentWillUpdate
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
		'react/no-will-update-set-state': 'error',

		// Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    // this is necessary for server-rendering
		'react/no-did-mount-set-state': 'off',

		// Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'off',

		// Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		'react/no-multi-comp': 'off',

		// Prevent usage of setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 'off',

		// Prevent using string references
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
		'react/no-string-refs': 'warn',

		// Prevent usage of unknown DOM property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

		// Require ES6 class declarations over React.createClass
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		'react/prefer-es6-class': ['warn', 'always'],

		// Prevent missing React when using JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		'react/react-in-jsx-scope': 'error',

		// Require render() methods to return something
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
		'react/require-render-return': 'error',

		// Prevent extra closing tags for components without children
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		'react/self-closing-comp': 'error',

		// Enforce component methods order
		// https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
		'react/sort-comp': [
			'error',
			{
				order: [
					'static-methods',
					'instance-variables',
					'lifecycle',
					'/^on.+$/',
					'getters',
					'setters',
					'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
					'instance-methods',
					'everything-else',
					'rendering'
				],
				groups: {
					lifecycle: [
						'displayName',
						'propTypes',
						'contextTypes',
						'childContextTypes',
						'mixins',
						'statics',
						'defaultProps',
						'constructor',
						'getDefaultProps',
						'getInitialState',
						'state',
						'getChildContext',
						'getDerivedStateFromProps',
						'componentWillMount',
						'UNSAFE_componentWillMount',
						'componentDidMount',
						'componentWillReceiveProps',
						'UNSAFE_componentWillReceiveProps',
						'shouldComponentUpdate',
						'componentWillUpdate',
						'UNSAFE_componentWillUpdate',
						'getSnapshotBeforeUpdate',
						'componentDidUpdate',
						'componentDidCatch',
						'componentWillUnmount',
						'componentDidCatch'
					],
					rendering: [ '/^render.+$/', 'render' ]
				}
			}
		],

		// Prevent missing parentheses around multilines JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line'
			}
		],

		// Require that the first prop in a JSX element be on a new line when the element is multiline
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

		// Enforce spacing around jsx equals signs
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
		'react/jsx-equals-spacing': [ 'error', 'never' ],

		// Disallow target="_blank" on links
		// https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-no-target-blank.md
		'react/jsx-no-target-blank': 'off',

		// only .jsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

		// prevent accidental JS comments from being injected into JSX as text
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
		'react/jsx-no-comment-textnodes': 'error',

		// require a shouldComponentUpdate method, or PureRenderMixin
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
		'react/require-optimization': ['off', { allowDecorators: [] }],

		// Forbid certain props on Components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
		'react/forbid-component-props': ['off', { forbid: [] }],

		// Forbid certain elements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
		'react/forbid-elements': ['off', { forbid: [], }],

		// Prevent problem with children and props.dangerouslySetInnerHTML
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		'react/no-danger-with-children': 'error',

		// disallow using React.render/ReactDOM.render's return value
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'warn',

		// disallow using React.render/ReactDOM.render's return value
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
		'react/no-render-return-value': 'warn',

		// warn against using findDOMNode()
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
		'react/no-find-dom-node': 'off',

		// Require style prop value be an object or var
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
		'react/style-prop-object': 'error',

		// Prevent invalid characters from appearing in markup
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		'react/no-unescaped-entities': 'error',

		// Prevent passing of children as props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
		'react/no-children-prop': 'warn',

		// Validate whitespace in and around the JSX opening and closing brackets
		// https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
		'react/jsx-tag-spacing': [
			'error',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never'
			}
		],

		// Enforce spaces before the closing bracket of self-closing JSX elements
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
		// Deprecated in favor of jsx-tag-spacing
		'react/jsx-space-before-closing': [ 'off', 'always' ],

		// Prevent usage of Array index in keys
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		'react/no-array-index-key': 'off',

		// Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

		// Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

		// Prevent void DOM elements from receiving children
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
		'react/void-dom-elements-no-children': 'error',

		// Prevent usage of shouldComponentUpdate when extending React.PureComponent
		// https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
		'react/no-redundant-should-component-update': 'warn',

		// Prevent unused propType definitions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': 'off',

		// Prevent unused state values
		// https://github.com/yannickcr/eslint-plugin-react/pull/1103/
		'react/no-unused-state': 'off',

		// Prevents common casing typos
		// https://github.com/yannickcr/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/no-typos.md
		'react/no-typos': 'warn',

		// Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
		'react/jsx-curly-brace-presence': [ 'warn', { props: 'never', children: 'never' } ],

		// One JSX Element Per Line
		// https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
		'react/jsx-one-expression-per-line': [ 'error', { allow: 'single-child' } ],

		// Prevent using this.state within a this.setState
		// https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
		'react/no-access-state-in-setstate': 'error',

		// Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
		'react/destructuring-assignment': 'off',

		// Prevent using this.state within a this.setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
		'react/no-access-state-in-setstate': 'error',

		// Ensures inline tags are not rendered without spaces between them
    'react/jsx-child-element-spacing': 'off',

		// Prevent this from being used in stateless functional components
		// https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
		'react/no-this-in-sfc': 'warn',

		// Disallow multiple spaces between inline JSX props
		// https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
		'react/jsx-props-no-multi-spaces': 'warn',

		// Enforce linebreaks in curly braces in JSX attributes and expressions.
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
		'react/jsx-curly-newline': [
			'warn',
			{
				multiline: 'consistent',
				singleline: 'consistent'
			}
		],

		// Disallow JSX props spreading
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
		'react/jsx-props-no-spreading': "off",
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: [ '.js', '.jsx', '.json' ]
			}
		},
		react: {
			pragma: 'React',
			version: 'detect'
		},
		propWrapperFunctions: [
			'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
			'exact', // https://www.npmjs.com/package/prop-types-exact
			'Object.freeze' // https://tc39.github.io/ecma262/#sec-object.freeze
		]
	}
};
