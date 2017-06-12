import { Template } from 'meteor/templating';

import './contacts-list.html';

/**
 * TEMPLATE HELPERS
 */
Template.contactsList.helpers({});

/**
 * TEMPLATE EVENTS
 */
Template.contactsList.events({
    'click #contacts-table tr'(evt, tmpl) {
        const dataTable = $(evt.target).closest('table').DataTable();
        const rowData = dataTable.row(evt.currentTarget).data();

        if (!rowData) return;
    },
});

/**
 * TEMPLATE LIFECYCLE
 */
Template.contactsList.onCreated(function () {
    this.autorun(() => {
    })
});

Template.contactsList.onRendered(function () {
    // move input tag out of label
    const inputSearch = this.$('input[type=search]').detach();
    // inputSearch.appendTo('.dataTables_filter');
    this.$('.dataTables_filter label')
        .before(inputSearch)
        .addClass('label-icon')
        .append('<i class="material-icons">search</i>');

    this.$('select').material_select();
});
