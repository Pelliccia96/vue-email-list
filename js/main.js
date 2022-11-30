const { createApp } = Vue;
createApp({
  data () {
    return {
        title: "Vue Email List",
        listaMail: [],
        listaMailTemporanea: [],
        ajaxCounter : 0,
    };
  },
    methods: {
    fetchData() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp);
                console.log("L'email generata dal server è: " + resp.data.response);
                this.listaMailTemporanea.push(resp.data.response);
                this.ajaxCounter++;
                if (this.ajaxCounter === 10) {
                    this.listaMail = this.listaMailTemporanea;
                }
            });
        },
    },
    mounted () {
        for (let i = 0; i < 10; i++) {
            this.fetchData();
        };
    },
}).mount("#app")
