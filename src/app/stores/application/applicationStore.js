import { defineStore } from "pinia"
export const UseApplicationStore = defineStore('formStore', {
    state: () => {
        return {
            application: null
        }
    },
    getters: {
        getApplication: (state) => {
            const lastApplication = localStorage.getItem('application');
            if(state.application) {
                return state.application;
            }
            else if(lastApplication){
                return JSON.parse(lastApplication);
            }
            else{
                return false;
            }
        }
    },
    actions: {
        saveApplication(formData){
            this.application = formData;
            localStorage.setItem('application', JSON.stringify(this.application));
        }
    }
})