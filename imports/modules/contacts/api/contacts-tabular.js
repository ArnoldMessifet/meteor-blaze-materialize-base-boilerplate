import Tabular from 'meteor/aldeed:tabular';

import Contacts from './contacts-collection';

// Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

new Tabular.Table({
    name: 'Contacts',
    collection: Contacts,
    order: [[0, 'asc']],
    columns: [
        { data: 'lastname', title: 'Nom' },
        { data: 'firstname', title: 'Prénom' },
        { data: 'email', title: 'Email' },
        { data: 'phone', title: 'Téléphone' },
    ],
    pageLength: 10,
    language: {
        paginate: {
            sFirst: 'Première page',
            sPrevious: 'Précédent',
            sNext: 'Suivant',
            sLast: 'Dernière page',
        },
        aria: {
            paginate: {
                sFirst: 'Première page',
                sPrevious: 'Précédent',
                sNext: 'Suivant',
                sLast: 'Dernière page',
            },
        },
        sSortAscending: ': activer pour trier la colonne par ordre croissant',
        sSortDescending: ': activer pour trier la colonne par ordre d&eacute;croissant',
        sDecimal: ',',
        sEmptyTable: 'Il n\'y a pas de données disponibles',
        sInfoEmpty: 'Aucun résultat',
        sZeroRecords: 'Aucun item à afficher',
        sLengthMenu: '_MENU_ items par page',
        sInfo: 'page _PAGE_ / _PAGES_ - item _START_ à _END_ sur _TOTAL_ items',
        sInfoFiltered: '(filtered from _MAX_ total entries)',
        sSearch: '',
        sProcessing: 'Traitement en cours...',
        sLoadingRecords: 'Chargement en cours...',
    },
});
