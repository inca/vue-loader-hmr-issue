import Vue from 'vue';

Vue.config.devtools = false;

import App from './app.vue';

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
