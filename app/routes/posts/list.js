import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Hello World!', 'Lorem Ipsum...', 'Not All Snakes Will Squish You'];
    }
});
