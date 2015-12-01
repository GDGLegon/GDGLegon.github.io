angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Legon',
        'id'            : '102608342475322325848',
        'googleApi'     : 'AIzaSyDrpn7lPWz29Ww9jGZghwhl2aJatkMVIpY',
        'pwaId'         : '', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://GDGLegon.github.io',
        'twitter'       : '',
        'facebook'      : '',
        'meetup'        : '',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, d MMMM, y - h:mm a',
        'cover' : {
            title: 'Welcome to GDG Legon',
            subtitle: 'A community of Google loving developers on the University of Ghana, Legon campus',
            button: {
                text: 'Find local GDG events near you',
                url: 'http://gdg.events/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
