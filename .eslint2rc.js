module.exports = {
    root: true,
    // 指定环境，使用环境的全局变量和属性
    env: {
        browser: true,
        node: true
    },
    // 指定eslint规范
    extends: [
        // 来自eslint-plugin-vue
        'plugin:vue/recommended',
        // 来自@vue/eslint-config-standard
        '@vue/standard'
    ],
    // plugins: ['vue', '@typescript-eslint'],
    // 自定义规则，覆盖默认规则
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 使用单引号
        quotes: [1, 'single'],
        // 不检查属性的驼峰命名
        camelcase: [2, { properties: 'never' }],
        // 单行的最大长度设置
        'max-len': [2, 120, 4, { ignoreUrls: true, ignoreRegExpLiterals: true }],
        // 缩进默认使用4个空格
        indent: 'off',
        // '@typescript-eslint/indent': ['error', 4],
        // 禁用eslint的规则no-unused-vars，使用typescript-eslint的设置
        // 避免this.$refs.form as Form报错defined but never used
        // https://github.com/typescript-eslint/typescript-eslint/issues/45
        'no-unused-vars': 'off',
        'import/no-duplicates': 'off',
        // "@typescript-eslint/no-unused-vars": "error",
        //  html关闭标签自动闭合
        'vue/html-self-closing': 'off',
        // html标签有三个属性才换行显示
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        'vue/singleline-html-element-content-newline': 'off',
        // html的缩进设置，默认4空格
        'vue/html-indent': ['error', 4],
        // 必须分号结尾
        // semi: ['error', 'always'],
        'vue/no-parsing-error': [2, {
            'x-invalid-end-tag': false
        }]
        // 正则
        // ignoreRegExpLiterals: true
    },
    // 设置解析器选项
    // parserOptions: {
    //     ecmaVersion: 2017,
    //     sourceType: "module",
    //     parser: "@typescript-eslint/parser"
    // },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
