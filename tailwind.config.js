/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        black: '#1F2234',
        'real-black': '#000000',
        gray: {
          50: '#F9F9F9',
          200: '#E5E5E5',
          300: '#BDBDBD',
          400: '#828282'
        },
        red: {
          500: '#FF4C41'
        },
        purple: {
          500: '#703EFF'
        },
        cyan: '#45e4db'
      },
      fontSize: {
        '4xl': '35px',
        '4.5xl': '40px',
        '6.5xl': '4rem',
        '7xl': '5rem',
        '2.5xl': '28px'
      },
      padding: {
        18: '4.3rem',
        26: '6.3rem',
        30: '7.3rem'
      },
      maxWidth: {
        xs: '21.625rem',
        sm: '25.25rem',
        'md-2.5': '29.5rem',
        '9xl': '90rem'
      },
      borderWidth: {
        3: '3px'
      },
      boxShadow: {
        xl: '0px 30px 60px rgba(0, 0, 0, 0.08)'
      }
    }
  }
}
