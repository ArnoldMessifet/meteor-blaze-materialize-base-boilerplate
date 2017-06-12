// Definition of the Navigation collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Navigation = new Mongo.Collection(null);

Navigation.schema = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
    },
    label: {
        type: String,
    },
    path: {
        type: String,
    },
    icon: {
        type: String,
    },
}, { tracker: Tracker });

Navigation.attachSchema(Navigation.schema);

export default Navigation;
