import '@testing-library/jest-dom';

globalThis.matchMedia =
  globalThis.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {}
  }));
