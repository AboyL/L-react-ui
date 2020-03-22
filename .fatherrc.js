export default {
  entry: ['src/index.tsx'],
  // extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
  esm: {
    type: 'babel',
    importLibToEs: true
  },
  cjs: 'babel',
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  doc: {
    title: "L-React-UI",
    themeConfig: { mode: 'light' },
    base: '/L-React-UI',
  },
}