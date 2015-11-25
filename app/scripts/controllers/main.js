'use strict';

/**
 * @ngdoc function
 * @name pocssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocssApp
 */
angular.module('pocssApp')
  .controller('MainCtrl', function () {
    var model = this;
    model.url = 'https://www.test.com';
    model.shares = [
        {provider:'facebook',text:'Facebook text...',url:model.url,label:'Facebook'},
        {provider:'twitter',text:'Twiter text..',url:model.url,label:'Twitter'}
    ];
  });
