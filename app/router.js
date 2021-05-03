import EmberRouter from '@embroider/router';
import config from 'embroider-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('lazy-loading-engine');
});
