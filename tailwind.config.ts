import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{html,js,jsx,ts,tsx}',
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'mat-noturno-blue': '#38496C',
        'mat-noturno-bluedark': '#181C74',
        'blue-800': '#003366',
        blue: { 800: '#003366' },
        bluedark: { 800: '#38496C' },
       
      },
    },
  },
  safelist: [
       { pattern: /bg-(red|blue|black|green|bluedark|gray)-/ }, // Permite todas as cores destas famílias
     ],
  plugins: [],
} satisfies Config;
