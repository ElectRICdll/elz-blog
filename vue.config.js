const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.ts', '.vue'],
            alias: {
                '^@blog/(.*)$': path.resolve(__dirname, 'src')
            }
        },
        entry: {
            app: './src/index.ts',
        },
    },
    chainWebpack: config => {
        config.resolve.extensions.add('.ts');
        config.resolve.extensions.add('.vue');
        config.entry('app').clear().add('./src/index.ts');
        config.module
            .rule('ts')
            .test(/\.ts$/)
            .use('ts-loader')
            .loader('ts-loader')
            .options({
                appendTsSuffixTo: [/\.vue$/],
            });
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                    require('unocss'),
                ],
            },
            sass: {
                additionalData: `@use "/theme.scss" as *;`,
            }
        },
    },
};