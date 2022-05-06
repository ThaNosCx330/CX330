import $ from 'jquery'

import './css/index.css'

import './css/index.less'

import Vue from 'vue'
    
import App from './components/App.vue'

$(() => {
    $('li:odd').css('backgroundColor','pink'),
    $('li:even').css('backgroundColor','red')

    class Fn {
        static a = 'OKKKK'
    }
    
    console.log(Fn.a);
    
    
    const vm = new Vue({
        el:'#app',
        render: h => h(App)
    })
})

