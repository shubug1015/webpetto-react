import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-181830395-1';

const init = () => {
  // Enable debug mode on the local development environment
  //   const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  ReactGA.initialize(TRACKING_ID, { debug: false });
};

const sendPageview = (path) => {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};

const sendEvent = (payload) => {
  ReactGA.event(payload);
};

// const sendEcommerce = (type, payload) => {
//   ReactGA.plugin.execute('ecommerce', type, payload);
// };

export default {
  init,
  sendPageview,
  sendEvent,
  // sendEcommerce,
};
