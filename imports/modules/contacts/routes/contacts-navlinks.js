import Navigation from '/imports/core/api/navigation-collection';

const links = [{
    label: 'Contacts',
    path: 'App.contacts',
    icon: 'contacts',
}];

_.forEach(links, link => Navigation.insert(link));

