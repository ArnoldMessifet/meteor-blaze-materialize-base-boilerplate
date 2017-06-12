import { Meteor } from 'meteor/meteor';

import Links from '/imports/api/links/links.js';

import '../link-form/link-form';
import '../links-list/links-list';
import './info.html';

Template.info.onCreated(function () {
    this.subscribe('links.all');
    this.autorun(() => {});
});

/**
 * TEMPLATE HELPERS
 */
Template.info.helpers({
    linksArgs() {
        const templateInstance = Template.instance();
        const links = Links.find({});

        return {
            linksReady: templateInstance.subscriptionsReady(),
            links,
        };
    },
});
