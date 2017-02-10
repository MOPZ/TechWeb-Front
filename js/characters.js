var view = new Vue({
	el: "#vue-characters",

	data: {
		selectedId:0,
		characters:{},
		selectedChar:{},
	},
	methods: {
		getAllCharacters:function(){
            var url = 'http://localhost:3000/characters';
            this.$http.get(url).then(function(response){
                //Success
                this.characters = response.body;
                }, function(response){
                //Failure
            });
        },
        getCharById:function(selectedId){
	        var url = 'http://localhost:3000/characters/' + selectedId;
	        this.$http.get(url).then(function(response){
	        	//SUCCESS
	        	this.selectedChar = response.body;
	        },function(response){
	        	//FAILURE
	        });
        }
	}
});
