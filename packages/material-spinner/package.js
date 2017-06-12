Package.describe({
    name: 'am25:material-spinner',
    version: '0.1.0',
    summary: 'a material spinner wrapper package for Meteor',
    git: 'https://github.com/ArnoldMessifet/meteor-material-spinner.git',
    documentation: 'README.md',
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');

    api.use([
        'ecmascript',
        'templating',
        'blaze',
        'underscore',
        'materialize:materialize@0.98.2',
    ], 'client');

    api.addFiles([
        'material-spinner.html',
        'material-spinner.js',
    ], 'client');

    api.mainModule('material-spinner.js', 'client');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('am25:material-spinner');
    api.mainModule('material-spinner-tests.js');
});
