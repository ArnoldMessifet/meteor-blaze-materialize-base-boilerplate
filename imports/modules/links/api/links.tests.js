// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';

import Links from './links.js';
import { insert } from './methods';

const expect = chai.expect;

if (Meteor.isServer) {
    // describe('links collection', function () {
    //     before(function () {
    //         resetDatabase();
    //     });
    //
    //     it('insert correctly', function () {
    //         const link = Factory.create('link');
    //         const linkId = insert(link);
    //         const added = Links.find({ _id: linkId });
    //         const collectionName = added._getCollectionName();
    //         const count = added.count();
    //
    //         expect(collectionName).to.be('links');
    //         expect(count).to.equal(1);
    //     });
    // });
}
