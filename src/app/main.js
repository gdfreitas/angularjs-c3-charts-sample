import _ from 'lodash';
import angular from 'angular';

import './deps';
import '../style/app.css';

import MainController from './main.controller'

let main = () => {
    return {
        template: require('./main.html'),
        controller: 'MainController',
        controllerAs: 'vm'
    }
};

export default angular
    .module('app', ['gridshore.c3js.chart'])
    .directive('main', main)
    .controller('MainController', MainController)
    .name;