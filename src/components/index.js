import wBtn from './w-btn/w-btn.vue';
const components = [
  wBtn
]
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  wBtn
}
