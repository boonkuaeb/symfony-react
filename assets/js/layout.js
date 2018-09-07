'use strict';


import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '../css/main.scss';

global.$ = $; // use for upgrade from native js  to webpack

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});