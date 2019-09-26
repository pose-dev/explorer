import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./TracingPage'),
  loading: () => false
});
