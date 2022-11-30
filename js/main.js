const { createApp } = Vue;
createApp({
  data () {
    return {
        title: "Vue Email List",
        listaMail: [],
    };
  },
    methods: {
    fetchData() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp);
                console.log("L'email generata dal server è: " + resp.data.response);
                this.listaMail.push(resp.data.response);
            });
        },
    },
    mounted () {
        this.fetchData()
    }
}).mount("#app")
