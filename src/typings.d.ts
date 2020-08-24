// Place for declaration of libs without types.
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    border: { type: string };
    colors: {
      main: {
        primary: string;
      };
      utils: {
        text: {
          dark: string;
          light: string;
        };
        border: {
          mid: string;
          dark: string;
        };
        link: string;
        placeholder: string;
        background: {
          mid: {
            color: string;
            opacity: string;
          };
          light: string;
          accent: string;
        };
      };
      functional: {
        error: string;
        success: string;
        disabled: string;
      };
    };
  }
}
