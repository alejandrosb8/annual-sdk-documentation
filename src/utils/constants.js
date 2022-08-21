const COLORS = {
  primary: '#fffffc',
  secondary: '#393732',
  accent: '#6e6ae6',
  'menu-button-hover': '#222222',
  'nav-bg': '#e9e9e9',
};

const SIZE = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const DEVICE = {
  mobileS: `(min-width: ${SIZE.mobileS})`,
  mobileM: `(min-width: ${SIZE.mobileM})`,
  mobileL: `(min-width: ${SIZE.mobileL})`,
  tablet: `(min-width: ${SIZE.tablet})`,
  laptop: `(min-width: ${SIZE.laptop})`,
  laptopL: `(min-width: ${SIZE.laptopL})`,
  desktop: `(min-width: ${SIZE.desktop})`,
  desktopL: `(min-width: ${SIZE.desktop})`,
};

export { COLORS, DEVICE };
