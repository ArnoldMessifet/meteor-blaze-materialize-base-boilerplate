import { Template } from 'meteor/templating';

import './material-spinner.html';

/**
 * TEMPLATE HELPERS
 */
Template.materialSpinner.helpers({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.materialSpinner.onCreated(function () {
    // TODO: test two params size and color
    this.autorun(() => {
    });
});

Template.materialSpinner.onRendered(function () {

});

Template.materialSpinner.onDestroyed(function () {
});
