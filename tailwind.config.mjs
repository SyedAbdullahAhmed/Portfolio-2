/** @type {import('tailwindcss').Config} */
const config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
  	extend: {
  		colors: {
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))",
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))",
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))",
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))",
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))",
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))",
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))",
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			shimmer: 'shimmer 2s linear infinite',
  			pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee 60s linear infinite',
  			marquee2: 'marquee2 60s linear infinite',
  			'skill-marquee': 'skill-marquee 25s linear infinite',
  			'skill-marquee-reverse': 'skill-marquee-reverse 25s linear infinite',
  			'skill-float': 'skill-float 3s ease-in-out infinite',
  			'skill-glow': 'skill-glow 2s ease-in-out infinite',
  		},
  		keyframes: {
  			shimmer: {
  				'0%': { backgroundPosition: '200% 0' },
  				'100%': { backgroundPosition: '-200% 0' },
  			},
  			'accordion-down': {
  				from: { height: 0 },
  				to: { height: 'var(--radix-accordion-content-height)' },
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: 0 },
  			},
  			marquee: {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-100%)' }
  			},
  			marquee2: {
  				'0%': { transform: 'translateX(100%)' },
  				'100%': { transform: 'translateX(0%)' }
  			},
  			'skill-marquee': {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-100%)' }
  			},
  			'skill-marquee-reverse': {
  				'0%': { transform: 'translateX(-100%)' },
  				'100%': { transform: 'translateX(0%)' }
  			},
  			'skill-float': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'skill-glow': {
  				'0%, 100%': { 
  					'box-shadow': '0 0 20px rgba(0, 255, 255, 0.3)',
  					'border-color': 'rgba(0, 255, 255, 0.5)'
  				},
  				'50%': { 
  					'box-shadow': '0 0 40px rgba(0, 255, 255, 0.6)',
  					'border-color': 'rgba(0, 255, 255, 1)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			jetbrains: ['var(--font-jetbrains)'],
  			fira: ['var(--font-fira)'],
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
