import { Meteor } from 'meteor/meteor';
import Contacts from '../contacts-collection';

/**
 * Publish all contacts
 */
Meteor.publish('contacts', function() {
    if (this.userId) {
        return Contacts.find({});
    }

    // return this.ready();
    return Contacts.find({});
});

/**
 * Publish activated users list
 */
Meteor.publish('get.contact', function(contactId) {
    // case for "add contact"
    if (!contactId) {
        return this.ready();
    }
    check(contactId,Match._id);

    if (this.userId) {
        return Contacts.find(contactId);
    }

    return this.ready();
});
