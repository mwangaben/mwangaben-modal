import {mount} from '@vue/test-utils';
import ModalExample from '../resources/js/components/Example.vue';
import Helpers from 'mwangaben-vthelpers';
import Vue from 'vue';
import Modal from '../src/ModalPlugin';

Vue.use('Modal');
 let seen = Vue.prototype.$modal = {
     show(name){
      return location.hash = name;
     },

     hide(name){
      return  location.hash = '#';
     }
};
 
 




describe('ModalExample', () => {
    let  wrapper, b;
    Vue.config.ignoredElements = ['modal'];
    beforeEach(() => {
        wrapper = mount(ModalExample, {
            data() {
                return {
                    message: 'Hello Js'
                }
            }
        });
        b = new Helpers(wrapper);
    });


    it('it trigger a modal ', () => {
        b.click('.css');
        b.see('Hello Js'); 
     });

     it("it trigger a modal ", () => {
       b.click(".js");
       b.see("Hello Js");
     });

     it('it hides a modal', () => {
        b.click(".js");
        b.see("Hello Js"); 
        b.click('.close');
        b.doNotSee('Hello js');  
     });

     
   
    
});