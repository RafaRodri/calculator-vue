/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/*Vue.component('CalcComponent', require('./components/Calculator.vue').default);*/
import CalcComponent from './components/Calculator';


const app = new Vue({
    el: '.container',

    components: {
        CalcComponent
    }
    /*data: {
        title: 'Calculadora'
    }*/
});
