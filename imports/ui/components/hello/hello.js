import { Template } from 'meteor/templating';

import './hello.html';

// Components used in the template


/**
 * TEMPLATE HELPERS
 */
Template.hello.helpers({
    counter() {
        const templateInstance = Template.instance();

        return templateInstance.counter.get();
    },
});

/**
 * TEMPLATE EVENTS
 */
Template.hello.events({
    'click .js-add-counter'(event, templateInstance) {
        // increment the counter when button is clicked
        templateInstance.counter.set(templateInstance.counter.get() + 1);
    },
});

/**
 * TEMPLATE LIFECYCLE
 */
Template.hello.onCreated(function () {
    const templateInstance = this;

    // counter starts at 0
    templateInstance.counter = new ReactiveVar(0);

    this.autorun(() => {
    });
});

Template.hello.onRendered(function () {
});

Template.hello.onDestroyed(function () {
});