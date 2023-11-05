module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-advanced-variables': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
