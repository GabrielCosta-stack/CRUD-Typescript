module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [
            'module-resolver', {
                alias: {
                    '@controllers': './src/controllers',
                    '@models': './src/models',
                    '@views': './src/views',
                    '@config': './src/config',
                    '@database': './src/database',
                    '@services': './src/services',
                    "@shared": "./src/shared",
                    "@interfaces": "./src/interfaces"
                }
            }
        ]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
};