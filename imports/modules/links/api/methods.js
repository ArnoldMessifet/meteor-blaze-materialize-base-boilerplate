// Methods related to links

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import SimpleSchema from 'simpl-schema';

import Links from './links.js';

/**
 * Insert a link in Links collection
 */
export const insert = new ValidatedMethod({
    name: 'links.insert',
    validate: Links.simpleSchema().validator(),
    // mixins: [CallPromiseMixin], //TODO: add and test mixin
    run(link) {
        return Links.insert({
            ...link,
            createdAt: new Date(),
        });
    },
});

/**
 * Remove a link in links collection
 */
export const remove = new ValidatedMethod({
    name: 'links.remove',
    validate: new SimpleSchema({
        _id: {
            type: String,
            regEx: SimpleSchema.RegEx._id,
        },
    }).validator(),
    // Mixins: [CallPromiseMixin], //TODO: add and test mixin
    run({ _id }) {
        return Links.remove( _id );
    },
});
