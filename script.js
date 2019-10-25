/*global Vue*/
/*global axios*/
let app = new Vue({
    el: '#app',
    data: {
        query: '',
        count: '',
        total: '',
        quotes: {},
        noResults: false,

    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    methods: {
        async fetchQuotes() {
            try {
                this.loading = true;
                console.log("before api call")
                const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/search/quote?query=' + this.query);
                console.log("passed api call");
                this.quotes = response.data._embedded.quotes;
                if (!(this.quotes)) {
                    this.noResults = true;
                }
                else {
                    this.noResults = false;
                }
                this.loading = false;
                console.log(this.quotes)
            }
            catch (error) {
                console.log(error);
            }
        },
    }
});
