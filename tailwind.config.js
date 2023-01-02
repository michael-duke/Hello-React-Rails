module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Dead end', 'sans-serif'],
        forzan: ['Forzan', 'sans-serif'],
        'syera-inline': ['Syera InLine', 'sans-serif'],
      },
    },
  },
}
