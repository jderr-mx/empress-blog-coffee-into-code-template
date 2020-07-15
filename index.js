'use strict';
const TailwindCss = require('tailwindcss')('./tailwind.config.js');

module.exports = {
  name: require('./package').name,
  included: function(app) {
    this._super.included.apply(this, arguments);
    app.options = app.options || {};
    app.options.postcssOptions = {
      compile: {
        plugins: [
          TailwindCss
        ]
      }
    }
  }
};
