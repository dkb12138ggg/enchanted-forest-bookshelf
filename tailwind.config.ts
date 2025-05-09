
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				'primary-foreground': 'hsl(var(--primary-foreground))',
				secondary: 'hsl(var(--secondary))',
				'secondary-foreground': 'hsl(var(--secondary-foreground))',
				destructive: 'hsl(var(--destructive))',
				'destructive-foreground': 'hsl(var(--destructive-foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				accent: 'hsl(var(--accent))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				popover: 'hsl(var(--popover))',
				'popover-foreground': 'hsl(var(--popover-foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				'forest-dark': '#1A3C2A',
				'forest-medium': '#2A5D38',
				'forest-light': '#3E8759',
				'gold': '#DAA520',
				'gold-light': '#FFD700',
				'parchment': '#F5F0E1',
				'parchment-dark': '#E8DFC9',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.3)' }
				},
				'firefly': {
					'0%': { transform: 'translate(0, 0) scale(0.5)', opacity: '0' },
					'30%': { opacity: '0.5' },
					'70%': { opacity: '0.5' },
					'100%': { transform: 'translate(100px, -100px) scale(0)', opacity: '0' }
				},
				'mist': {
					'0%': { transform: 'translateX(-5%)', opacity: '0.3' },
					'50%': { opacity: '0.5' },
					'100%': { transform: 'translateX(5%)', opacity: '0.3' }
				},
				'page-turn': {
					'0%': { transform: 'rotateY(0deg)', opacity: '1' },
					'100%': { transform: 'rotateY(-180deg)', opacity: '0' }
				},
				'rune-fade': {
					'0%': { opacity: '0' },
					'30%': { opacity: '1' },
					'70%': { opacity: '1' },
					'100%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'firefly': 'firefly 15s linear infinite',
				'mist': 'mist 20s ease-in-out infinite',
				'page-turn': 'page-turn 1.5s ease-in-out forwards',
				'rune-fade': 'rune-fade 3s ease-in-out'
			},
			backgroundImage: {
				'forest': "url('/forest-bg.png')"
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
