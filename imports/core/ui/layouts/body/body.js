import Navigation from '/imports/core/api/navigation-collection';

import { Template } from 'meteor/templating';

import './body.html';

import '../../components/header/header';
import '../../components/sidebar/sidebar';

/**
 * TEMPLATE HELPERS
 */
Template.layoutBody.helpers({
    links() {
        return Navigation.find().fetch();
    },
    connected() {
        if (Template.instance().showConnectionIssue.get()) {
            return Meteor.status().connected;
        }

        return true;
    },
});

/**
 * TEMPLATE EVENTS
 */
Template.layoutBody.events({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.layoutBody.onCreated(function () {
    const CONNECTION_ISSUE_TIMEOUT = 5000;

    this.autorun(() => {
        this.showConnectionIssue = new ReactiveVar(true);
    });
});

Template.layoutBody.onRendered(function () {
});
