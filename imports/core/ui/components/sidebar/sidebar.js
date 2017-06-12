import Navigation from '/imports/core/api/navigation-collection';

import { Template } from 'meteor/templating';

import './sidebar.html';

// Components used in the template

/**
 * TEMPLATE HELPERS
 */
Template.sidebar.helpers({});

/**
 * TEMPLATE EVENTS
 */
Template.sidebar.events({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.sidebar.onCreated(function () {
    this.autorun(() => {
    });
});

Template.sidebar.onRendered(function () {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: (el) => { /* Do Stuff */
            console.log('onOpen', el);
        }, // A function to be called when sideNav is opened
        onClose: (el) => { /* Do Stuff */
            console.log('onClose', el);
        }, // A function to be called when sideNav is closed
    });
});

Template.sidebar.onDestroyed(function () {
});
