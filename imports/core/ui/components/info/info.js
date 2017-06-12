
import Links from '/imports/modules/links/api/links';

import '/imports/modules/links/ui/link-form/link-form';
import '/imports/modules/links/ui/links-list/links-list';
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
