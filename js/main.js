const { createApp } = Vue;
createApp({
  data () {
    return {
        title: "Vue Email List",
    };
  },
    methods: {
    fetchData() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (resp) {
                console.log(resp);
                console.log("L'email generata dal server è: " + resp.data.response);
            });
        },
    },
    mounted () {
        this.fetchData()
    }
}).mount("#app")
