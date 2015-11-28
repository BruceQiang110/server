import Ember from 'ember';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import BodyClassMixin from 'ember-body-class/mixins/body-class';

export default Ember.Route.extend( ApplicationRouteMixin, BodyClassMixin, {

	title: function( tokens ) {
		return tokens.join( ' ― ' ) + ' ― Muffin';
	},

	redirect: function() {
		if( !this.get( 'session.isAuthenticated' ) ) {
			this.transitionTo( 'login' );
		}
	}

});
