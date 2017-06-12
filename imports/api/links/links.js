// Definition of the links collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import faker from 'faker';
import { Tracker } from 'meteor/tracker';

SimpleSchema.extendOptions(['autoform']);

/**
 * COLLECTION
 * @type {Mongo.Collection|Immutable.Collection|Collection|Meteor.Collection|*}
 */
const Links = new Mongo.Collection('links');

// Deny all client-side updates
Links.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

/**
 * SCHEMA
 */
Links.schema = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        autoform: {
            type: 'hidden',
        },
    },
    title: {
        type: String,
        min: 3,
    },
    url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
    },
}, { tracker: Tracker });

Links.publicFields = {
    title: 1,
    url: 1,
};

Links.attachSchema(Links.schema);

/**
 * FACTORY
 */
Factory.define('link', Links, {
    title: () => faker.lorem.sentence(),
    url: () => faker.internet.url(),
});

export default Links;

