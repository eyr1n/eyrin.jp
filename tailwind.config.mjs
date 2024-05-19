/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        twitter: '#1da1f2',
        github: '#484F58',
        apple: '#007aff',
        android: '#3ddc84',
      },
      fontFamily: {
        mono: ['"Ubuntu Sans Mono Variable"', ...defaultTheme.fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              quotes: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
