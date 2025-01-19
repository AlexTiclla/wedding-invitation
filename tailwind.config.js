module.exports = {
  // ... resto de la configuración
  extend: {
    keyframes: {
      flowDown: {
        '0%': { backgroundPosition: '0 -100%' },
        '100%': { backgroundPosition: '0 100%' }
      }
    },
    animation: {
      flowDown: 'flowDown 3s linear infinite'
    }
  }
} 