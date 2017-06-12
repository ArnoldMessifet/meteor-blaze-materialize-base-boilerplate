// Definition of the links collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import faker from 'faker';
import { Tracker } from 'meteor/tracker';

SimpleSchema.extendOptions(['autoform']);

const Contacts = new Mongo.Collection('contacts');

// Deny all client-side updates
Contacts.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

Contacts.schema = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        autoform: {
            type: 'hidden',
        },
    },
    createdAt: {
        type: Date,
        defaultValue: new Date(),
        optional: true, // IMPORT
        autoform: {
            type: 'hidden',
        },
    },
    lastUpdatedAt: {
        type: Date,
        autoValue() {
            return new Date();
        },
        autoform: {
            type: 'hidden',
        },
    },
    lastname: {
        type: String,
        label: 'Nom',
        optional: true, // IMPORT
    },
    firstname: {
        type: String,
        label: 'Prénom',
        optional: true, // IMPORT
    },
    email: {
        type: String,
        label: 'Email',
        optional: true, // IMPORT
        regEx: SimpleSchema.RegEx.Email,
    },
    phone: {
        type: String,
        // regEx: /^0[0-9][0-9]{8}$/,
        optional: true,
        label: 'Téléphone',
    },
}, { tracker: Tracker });

Contacts.attachSchema(Contacts.schema);

Contacts.publicFields = {
    lastname: 1,
    firstname: 1,
    email: 1,
    phone: 1,
};

/**
 * FACTORY
 */
Factory.define('contact', Contacts, {
    lastname: () => faker.name.lastName(),
    firstname: () => faker.name.firstName(),
    email: () => faker.internet.email(this.lastname, this.firstname),
    phone: () => faker.phone.phoneNumberFormat(),
});

export default Contacts;
