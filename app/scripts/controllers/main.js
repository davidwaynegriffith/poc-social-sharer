'use strict';

/**
 * @ngdoc function
 * @name pocssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocssApp
 */
angular.module('pocssApp')
    .controller('MainCtrl', function ($scope) {

        $scope.model = {};

        $scope.model.shares = [
            {
                provider: 'facebook',
                text: 'Checkout this NOUN at this URL by ORG',
                tooltip: 'Share on Facebook',
                icon: 'ion-social-facebook'
            },
            {
                provider: 'google',
                text: 'Twiter text..',
                url: shareUrl,
                tooltip: 'Share on Google+',
                icon: 'ion-social-googleplus'
        },
            {
                provider: 'twitter',
                text: 'Twiter text..',
                url: shareUrl,
                tooltip: 'Tweet on Twitter',
                icon: 'ion-social-twitter'
        },
            {
                provider: 'Tumblr',
                text: 'Tumblr text..',
                url: shareUrl,
                tooltip: 'Publish on Tumblr',
                icon: 'ion-social-tumblr'
        },
            {
                provider: 'wordpress',
                text: 'word press',
                url: shareUrl,
                tooltip: 'Publish on wordpress',
                icon: 'ion-social-wordpress'
        },
            {
                provider: 'pinterest',
                text: 'Pinterest text',
                url: shareUrl,
                tooltip: 'Pin on Pinterest',
                icon: 'ion-social-pinterest'
        }
    ];



        var shareNoun = 'Proset'; // {Proset|Product|Review}
        var shareOrg = 'Acqurate.com';
        var shareUrl = '';

        $scope.model.shares.forEach(function (share) {
            console.log(share);
            share.text = share.text.replace(/ ORG /g, shareOrg);
            share.text = share.text.replace(/ NOUN /g, shareNoun);
            share.text = share.text.replace(/ URL /g, shareUrl);
        });




    });