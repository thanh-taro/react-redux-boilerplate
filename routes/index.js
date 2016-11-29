import App from 'components/App';
import {NotFound} from 'base/pages';

export function routes() {
  const _routes = [
    {
      path: '/',
      component: App,
      childRoutes: []
    },
    {
      path: '*',
      component: NotFound
    }
  ];

  return _routes;
}
