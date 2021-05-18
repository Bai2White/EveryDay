module.exports = {
    // css顺序
    extends: ['stylelint-config-recommended', 'stylelint-config-standard', 'stylelint-config-recess-order'],
    rules: {
        // 禁用不可用的hex颜色
        'color-no-invalid-hex': true,
        // css注释前新加一行
        'comment-empty-line-before': ['always', {
            ignore: ['stylelint-commands', 'after-comment']
        }],
        // 问号后面跟一个空格
        'declaration-colon-space-after': 'always-single-line',
        // 多行的时候，新起一行显示，例如box-shadow
        'declaration-colon-newline-after': 'always-multi-line',
        indentation: 4,
        // 取消新起一行
        'rule-empty-line-before': ['never', {
            ignore: ['after-comment']
        }]
    }
}
