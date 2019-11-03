module.exports = {
    plugins: ['react'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parser: 'babel-eslint',
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        node: true,
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'comma-dangle': ['error', 'always-multiline']
    },
}