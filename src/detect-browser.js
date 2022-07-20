const userAgent = navigator.userAgent.toLowerCase();

export const isSafari =
  userAgent.indexOf('safari') !== -1 && userAgent.indexOf('chrome') === -1;
