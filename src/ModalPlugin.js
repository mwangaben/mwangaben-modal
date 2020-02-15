import Component from "./Component.vue";

let Plugin = {
  install: function(Vue, options={}) {
      let PluginName = options.name ? options.name : 'modal';
    Vue.component(PluginName, Component);

    Vue.prototype.$modal = {
      show(name) {
       return location.hash = name;
      },
      hide(name) {
       return location.hash = "#";
      }
    };

  }
};


export default Plugin;