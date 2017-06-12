// Startup client configuration
import { Meteor } from 'meteor/meteor';
import { AutoForm } from 'meteor/aldeed:autoform';
import { $ } from 'meteor/jquery';
import { TAPi18n } from 'meteor/tap:i18n';
import dataTablesBootstrap from '/imports/lib/dataTables.materialize';
import '/imports/lib/dataTables.materialize.css';

Meteor.startup(() => {
    // mozfet:autoform-materialize package config
    AutoForm.setDefaultTemplate('materialize');
    // aldeed:tabular dependencies config
    dataTablesBootstrap(window, $);

    TAPi18n.setLanguage('fr')
        .done(function () {
            console.log('TAPi18n done');
        })
        .fail(function (error) {
            // Handle the situation
            console.log(error);
        });
});
