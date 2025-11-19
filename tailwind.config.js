/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        decos: {
          gold: '#FFD700',
          'gold-light': '#FFE333',
          'gold-dark': '#F4C700',
        },
        industrial: {
          red: '#DC143C',
          'red-light': '#E63956',
          'red-dark': '#B91C3C',
          slate: '#2F4F4F',
        },
        technical: {
          blue: '#4169E1',
          'blue-light': '#5A7FE5',
          'blue-dark': '#2952D9',
        },
        solution: {
          green: '#32CD32',
          'green-light': '#5AD65A',
          'green-dark': '#28A428',
        },
        neutral: {
          charcoal: '#1C1C1C',
          steel: '#708090',
          light: '#B8BCC4',
          soft: '#E5E7EB',
          clean: '#F5F5F5',
          pure: '#FFFFFF',
        },
        functional: {
          warning: '#FF8C00',
          error: '#DC143C',
          success: '#32CD32',
          info: '#00CED1',
          focus: '#4169E1',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'Courier New', 'monospace'],
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',   /* 4px */
        '2': '0.5rem',    /* 8px */
        '3': '0.75rem',   /* 12px */
        '4': '1rem',      /* 16px */
        '5': '1.5rem',    /* 24px */
        '6': '2rem',      /* 32px */
        '7': '3rem',      /* 48px */
        '8': '4rem',      /* 64px */
        '9': '6rem',      /* 96px */
        '10': '8rem',     /* 128px */
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'flow': 'flow 2s linear infinite',
        'modal-slide-in': 'modalSlideIn 0.3s ease-out',
        'spin': 'spin 1s linear infinite',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        flow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        modalSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        skeleton: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
      zIndex: {
        modal: '1000',
        popover: '1100',
        tooltip: '1200',
        notification: '1300',
      }
    },
  },
  plugins: [],
};