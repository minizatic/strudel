import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Controller.extend({
    currentUrl: null,
    onPathChanged: Ember.observer('target.url', function() {
        Ember.run.next(this, function() {
            this.set('currentUrl', getOwner(this).lookup('controller:application').currentPath);
        });
    })
});