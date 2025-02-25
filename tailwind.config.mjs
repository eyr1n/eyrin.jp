/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        twitter: '#1da1f2',
        github: '#484F58',
        apple: '#007aff',
        android: '#3ddc84',
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
          },
        },
      },
    },
  },
  plugins: [typography],
};
