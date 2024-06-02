import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'

import '/theme.config.scss';
  
export default defineConfig({
  theme: {
    colors: {
      primary: '$currentTheme.primary',
      secondary: '$currentTheme.sub',
      danger: '$currentTheme.danger',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Monaco', 'monospace'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})