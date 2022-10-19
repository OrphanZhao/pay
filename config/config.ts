import path from 'path';
import { defineConfig } from 'umi';
import proxy from './proxy';
import routes from './routes';

export const supportedLocales = ['zh-CN'];

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  /**
   * ⬇️ 自定义新增配置
   */
  dynamicImport: {
    loading: '@/components/pageloading',
  },
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: path.resolve(__dirname, '../tailwind.config.js'),
    }),
  ],
  404: false,
  routes,
  chainWebpack: (config, { webpack }) => {
    // https://github.com/neutrinojs/webpack-chain
    config
      .plugin('context-replacement-plugin')
      .use(
        new webpack.ContextReplacementPlugin(
          /^date-fns[/\\]locale$/,
          new RegExp(`\\.[/\\\\](${supportedLocales.join('|')})[/\\\\]index\\.js$`),
        ),
      );
  },
  proxy,
});
