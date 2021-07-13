const app = Vue.createApp({
    data(){
        return {
            dataObj:{},
            sel:'',
        }
    },
    created(){
        this.get();
    },
    methods:{
        get(){
            const URL = 'https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c';
            let xml = new XMLHttpRequest();
            xml.open('get',URL,true);
            xml.send(null);
            xml.onreadystatechange=function(){
                if(xml.readyState==4&&xml.status==200){
                    let myObj = JSON.parse(xml.response).data.XML_Head.Infos.Info;
                    app.dataObj=myObj;
                }
            }
        }
    }
}).mount('#app')