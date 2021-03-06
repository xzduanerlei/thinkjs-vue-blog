import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import routerMap from "./admin.router";
import 'static/css/github-markdown.css';

Vue.use(VueResource)
Vue.use(VueRouter);
const router = new VueRouter();
routerMap(router);
const app = Vue.extend({
    el: function () {
        return "html"
    },
    data () {
        return {}
    },
    ready () {
    }
});

router.start(app, "#app");
