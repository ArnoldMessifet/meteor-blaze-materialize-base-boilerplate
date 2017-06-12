import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '/imports/core/ui/layouts/body/body.js';
import '../ui/pages/contact/contact';

// Set up all routes fort contact module
FlowRouter.route('/contacts', {
    name: 'App.contacts',
    action() {
        BlazeLayout.render('layoutBody', { main: 'contact' });
    },
});
