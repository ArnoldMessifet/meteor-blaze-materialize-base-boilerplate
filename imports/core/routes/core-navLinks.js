import Navigation from '/imports/core/api/navigation-collection';

const links = [{
    label: 'Home',
    path: 'App.home',
    icon: 'home',
}];

_.forEach(links, link => Navigation.insert(link));

