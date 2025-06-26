import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import Components from 'unplugin-vue-components/rspack';
import AutoImport from 'unplugin-auto-import/rspack';

import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [pluginVue()],
  source: {
    transformImport: [
      {
        libraryName: 'lodash',
        customName: 'lodash/{{ member }}',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx', '.mjs', '.json'],
    alias: {
      '@': './src',
      '@assets': './src/assets',
    },
  },
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          eslintrc: {
            enabled: true,
          },
          imports: ['vue', 'vue-router'],
          dirs: ['core/composable/**'],
          dts: 'auto-imports.d.ts',
        }),
        Components({
          resolvers: [
            AntDesignVueResolver({
              importStyle: false, // css in js
            }),
          ],
        }),
      ],
    },
  },
});
