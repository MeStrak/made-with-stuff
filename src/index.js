import Vue from "vue";
import MadeWithStuff from "./MadeWithStuff.vue";

const Components = {
  MadeWithStuff
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]).default;
});

export default Components;
