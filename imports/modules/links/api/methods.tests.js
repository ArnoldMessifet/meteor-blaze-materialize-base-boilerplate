// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { _ } from 'meteor/underscore';
import faker from 'faker';

import Links from './links';
import { insert, remove } from './methods';

const expect = chai.expect;

if (Meteor.isServer) {
    describe('links methods', function () {
        describe('insert', function () {
            beforeEach(function () {
                resetDatabase();
            });

            it('can add a new link', function () {
                const link = Factory.build('link');
                const linkId = insert._execute({}, link);
                const added = Links.findOne({ _id: linkId });

                expect(added).to.deep.equal(link);
            });

            it('throw an error if invalid url', function () {
                const link = {
                    url: 'invalid-url',
                    title: faker.lorem.sentence(),
                };
                expect(() => {
                    insert._execute({}, link);
                }).to.throw(/URL/);
            });

            it('throw an error if title length less than 3 ', function () {
                const link = {
                    url: faker.internet.url(),
                    title: '',
                };
                expect(() => {
                    insert._execute({}, link);
                }).to.throw(/Title/);
            });
        });

        describe('delete', function () {
            const linksNumber = 3;

            beforeEach(function () {
                resetDatabase();
                _.times(linksNumber, () => {
                    Factory.create('link');
                });
            });

            it('can delete a link', function () {
                const links = Links.find().fetch();
                const link = links[0];
                const count = remove._execute({}, { _id: link._id });
                const linksTotal = Links.find().count();

                expect(count).to.equal(1);
                expect(linksTotal).to.equal(links.length - count);
            });

            it('throw an error if id is undefined', function () {
                expect(() => {
                    remove._execute({}, { _id: undefined });
                }).to.throw(/ID/);
            });

            it('do nothing if id is unknown', function () {
                const links = Links.find().fetch();
                const count = remove._execute({}, { _id: Random.id() });
                const linksTotal = Links.find().count();

                expect(count).to.equal(0);
                expect(linksTotal).to.equal(links.length);
            });
        });
    });
}
