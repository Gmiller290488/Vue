
const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key";
const ApiKey = "=c74fb5d7de7f4394a37aa1f462430bff";

function buildUrl(url) {
  
  console.log( baseUrl + ApiKey + "&q=" + url)
  
  return baseUrl + ApiKey + "&q=" + url
}

 
  
const vm = new Vue({
  el: '#app',
  data: {
    selected: 'Newest',
    options: [
        { text: 'Newest'},
        { text: 'Oldest'}  ],
    newSearchText: '',  
    results: []
  },
  mounted() {
     },
   methods: {
       makeNewSearch() {
         if (this.newSearchText != '') {
           let url = buildUrl(this.newSearchText + "?sort=" + this.selected);
           axios.get(url).then((response) => {
         
	  	
        <!--  this.results = response.data.response.docs; -->
          this.results = response.data;
           }).catch( error => {console.log(error); });
     }
  }
 }
}); 

