import { Template } from 'meteor/templating';
import Contacts from '../../../api/contacts-collection';

import './contact.html';

import '../../components/list/contacts-list';

/**
 * TEMPLATE HELPERS
 */
Template.contact.helpers({
    contacts() {
        return Contacts.find().fetch();
    },
});

/**
 * TEMPLATE EVENTS
 */
Template.contact.events({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.contact.onCreated(function () {
    this.subscribe('contacts');
});

Template.contact.onRendered(function () {
});

Template.contact.onDestroyed(function () {
});
