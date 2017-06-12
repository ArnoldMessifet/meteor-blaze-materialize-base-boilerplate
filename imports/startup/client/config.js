// Startup client configuration
import { Meteor } from 'meteor/meteor';
import { AutoForm } from 'meteor/aldeed:autoform';

Meteor.startup(() => {
    // mozfet:autoform-materialize package config
    AutoForm.setDefaultTemplate('materialize');
});
