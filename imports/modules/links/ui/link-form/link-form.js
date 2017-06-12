import { Template } from 'meteor/templating';
import { AutoForm } from 'meteor/aldeed:autoform';
import { Materialize } from 'meteor/materialize:materialize';

import Links from '/imports/modules/links/api/links';

import './link-form.html';

/**
 * TEMPLATE HELPERS
 */
Template.linkForm.helpers({
    formConfig() {
        return {
            collection: Links,
            id: 'insertLinkForm',
            type: 'method',
            meteormethod: 'links.insert',
            buttonContent: 'Add new link',
        };
    },
});

/**
 * TEMPLATE EVENTS
 */
Template.linkForm.events({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.linkForm.onCreated(() => {});

Template.linkForm.onRendered(() => {});

Template.linkForm.onDestroyed(() => {});

/**
 * AUTOFORM'S HOOKS
 */
AutoForm.addHooks(['insertLinkForm'], {
    before: {},
    after: {},
    onSubmit() {},
    onSuccess(formType, result) {
        console.log('===================================================');
        console.log('onSuccess', formType, result);
        console.log('===================================================');
        Materialize.toast('New link created!', 4000);
    },
    onError(formType, error) {
        console.log('===================================================');
        console.log('onError', formType, error);
        console.log('===================================================');

    },
    formTodoc() {},
    formToModifier() {},
    docToForm() {},
    beginSubmit() {},
    endSubmit() {},
});

