const { createApp } = Vue;
createApp({
  data () {
    return {
        title: "Vue Email List",
        listaMail: [],
        listaMailTemporanea: [],
    };
  },
    methods: {
    fetchData() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp);
                console.log("L'email generata dal server è: " + resp.data.response);
                this.listaMailTemporanea.push(resp.data.response);
                if (this.ajaxCounter === 10) {
                    this.listaMail = this.listaMailTemporanea;
                }
            });
        },
    },
    mounted () {
        this.ajaxCounter = 0;
        for (let i = 0; i < 10; i++) {
            this.fetchData();
            this.ajaxCounter++;
        };
    },
}).mount("#app")
