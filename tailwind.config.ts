import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.red,
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
} satisfies Config;
