// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import Contacts from '/imports/modules/contacts/api/contacts-collection';

Meteor.startup(() => {
    // if the Links collection is empty
    if (!Contacts.find().count()) {
        _.times(25, () => {
            Factory.create('contact');
        });
    }
});
