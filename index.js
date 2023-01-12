import test from "./test/test.vue";
import Vue from "vue";
const components = {
  install(Vue) {
    Vue.component("test", test);
  },
};
if (typeof window != "undefined" && window.Vue) {
  window.Vue.use(components);
}
export default test;
