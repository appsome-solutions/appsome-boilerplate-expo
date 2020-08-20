// This are types we could use in whole app without importing them.
// Whenever we use an interface in two different files, that's the good place to place them.

declare type Theme = {
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
};
