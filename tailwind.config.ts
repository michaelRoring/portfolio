import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#88aaee",
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#dfe5f2",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#212121", // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: "8px",
      },
      boxShadow: {
        light: "6px 3px 0px 0px #000",
        dark: "6px 3px 0px 0px #000",
      },
      translate: {
        boxShadowX: "6px",
        boxShadowY: "3px",
        reverseBoxShadowX: "-6px",
        reverseBoxShadowY: "-3px",
      },
      fontWeight: {
        base: "500",
        heading: "900",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  //   theme: {
  //   	extend: {
  //   		colors: {
  //   			main: 'var(--main)',
  //   			overlay: 'var(--overlay)',
  //   			bg: 'var(--bg)',
  //   			bw: 'var(--bw)',
  //   			blank: 'var(--blank)',
  //   			text: 'var(--text)',
  //   			mtext: 'var(--mtext)',
  //   			border: 'hsl(var(--border))',
  //   			ring: 'hsl(var(--ring))',
  //   			ringOffset: 'var(--ring-offset)',
  //   			secondaryBlack: '#212121',
  //   			background: 'hsl(var(--background))',
  //   			foreground: 'hsl(var(--foreground))',
  //   			card: {
  //   				DEFAULT: 'hsl(var(--card))',
  //   				foreground: 'hsl(var(--card-foreground))'
  //   			},
  //   			popover: {
  //   				DEFAULT: 'hsl(var(--popover))',
  //   				foreground: 'hsl(var(--popover-foreground))'
  //   			},
  //   			primary: {
  //   				DEFAULT: 'hsl(var(--primary))',
  //   				foreground: 'hsl(var(--primary-foreground))'
  //   			},
  //   			secondary: {
  //   				DEFAULT: 'hsl(var(--secondary))',
  //   				foreground: 'hsl(var(--secondary-foreground))'
  //   			},
  //   			muted: {
  //   				DEFAULT: 'hsl(var(--muted))',
  //   				foreground: 'hsl(var(--muted-foreground))'
  //   			},
  //   			accent: {
  //   				DEFAULT: 'hsl(var(--accent))',
  //   				foreground: 'hsl(var(--accent-foreground))'
  //   			},
  //   			destructive: {
  //   				DEFAULT: 'hsl(var(--destructive))',
  //   				foreground: 'hsl(var(--destructive-foreground))'
  //   			},
  //   			input: 'hsl(var(--input))',
  //   			chart: {
  //   				'1': 'hsl(var(--chart-1))',
  //   				'2': 'hsl(var(--chart-2))',
  //   				'3': 'hsl(var(--chart-3))',
  //   				'4': 'hsl(var(--chart-4))',
  //   				'5': 'hsl(var(--chart-5))'
  //   			}
  //   		},
  //   		borderRadius: {
  //   			base: '8px',
  //   			lg: 'var(--radius)',
  //   			md: 'calc(var(--radius) - 2px)',
  //   			sm: 'calc(var(--radius) - 4px)'
  //   		},
  //   		boxShadow: {
  //   			shadow: 'var(--shadow)'
  //   		},
  //   		translate: {
  //   			boxShadowX: '6px',
  //   			boxShadowY: '3px',
  //   			reverseBoxShadowX: '-6px',
  //   			reverseBoxShadowY: '-3px'
  //   		},
  //   		fontWeight: {
  //   			base: '500',
  //   			heading: '900'
  //   		},
  //   		keyframes: {
  //   			'accordion-down': {
  //   				from: {
  //   					height: '0'
  //   				},
  //   				to: {
  //   					height: 'var(--radix-accordion-content-height)'
  //   				}
  //   			},
  //   			'accordion-up': {
  //   				from: {
  //   					height: 'var(--radix-accordion-content-height)'
  //   				},
  //   				to: {
  //   					height: '0'
  //   				}
  //   			}
  //   		},
  //   		animation: {
  //   			'accordion-down': 'accordion-down 0.2s ease-out',
  //   			'accordion-up': 'accordion-up 0.2s ease-out'
  //   		}
  //   	}
  //   },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
