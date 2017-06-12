import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import '/imports/utils/extendMatch';

Meteor.startup(() => {
    // configuration for moment.js
    moment.locale('fr');
});
