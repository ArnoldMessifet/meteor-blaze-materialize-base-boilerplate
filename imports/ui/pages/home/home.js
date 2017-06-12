import { Template } from 'meteor/templating';

import './home.html';

// Components used in the template
import '../../components/hello/hello';
import '../../components/info/info';

/**
 * TEMPLATE HELPERS
 */
Template.home.helpers({});

/**
 * TEMPLATE EVENTS
 */
Template.home.events({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.home.onCreated(function () {
    this.autorun(() => {
    });
});

Template.home.onRendered(function () {
});

Template.home.onDestroyed(function () {
});