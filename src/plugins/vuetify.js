import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0d3554',
        secondary: '#f77a03',
        accent: '#8f8f8f',
        error: '#630803',
        info: '#507097',
        success: '#2dad64',
        warning: '#f44185',
      },
    } 
  },
  icons: {
    iconfont: 'mdi',
  },
});
