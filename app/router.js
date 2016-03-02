import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('posts', function() {
    this.route('new');
    this.route('list');
  });
});

export default Router;
