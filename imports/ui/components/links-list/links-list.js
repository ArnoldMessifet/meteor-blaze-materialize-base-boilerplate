import { Template } from 'meteor/templating';
import { check, Match } from 'meteor/check';

import './links-list.html';

// Components used in the template


/**
 * TEMPLATE HELPERS
 */
Template.linksList.helpers({});

/**
 * TEMPLATE EVENTS
 */
Template.linksList.events({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.linksList.onCreated(function () {
    this.autorun(() => {
        // don't use SimpleSchema cause Mongo.Cursor isn't anymore a recognized type
        check(Template.currentData(), {
            linksReady: Boolean,
            links: Match.MongoCursor,
        });
    });
});

Template.linksList.onRendered(function () {
});

Template.linksList.onDestroyed(function () {
});
