import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      sub: 'var(--sub-color)',
      border: 'var(--border-color)',
      text: 'var(--text-color)',
      bg: 'var(--bg-color)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({}),
    presetTypography(),
  ],
  rules: [
    ['blog-border', { border: '1px solid var(--border-color)' }],
    [
      /^blog-border-(t|r|b|l)$/,
      ([, direction]) => {
        const directions = {
          t: '-top',
          r: '-right',
          b: '-bottom',
          l: '-left',
        }
        return {
          [`border${directions[direction]}`]: '1px solid var(--border-color)',
        }
      },
    ],
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
