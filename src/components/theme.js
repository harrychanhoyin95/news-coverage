export const theme = {
  breakpoints: {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 991px)',
    desktopOrTablet: '(min-width: 768px)',
  },
  colors: {
    whites: [
      'rgba(255, 255, 255, 0.25)',
      'rgba(255, 255, 255, 0.5)',
      'rgba(255, 255, 255, 0.75)',
    ],
    blacks: ['rgb(30, 30, 30)'],
    yellow: '#fbc308',
    label: {
      danger: '#c0392b',
    },
  },
};

export default theme;
