var view = new Vue({
	el: "#vue-alliances",

	data: {
		selectedId:0,
		alliances:{},
		selectedAlliance:{},
	},
	methods: {
		getAllAlliances:function(){
            var url = 'http://localhost:3000/alliances';
            this.$http.get(url).then(function(response){
                //Success
                this.alliances = response.body;
                }, function(response){
                //Failure
            });
        },
        getAllianceById:function(selectedId){
	        var url = 'http://localhost:3000/alliances/' + selectedId;
	        this.$http.get(url).then(function(response){
	        	//SUCCESS
	        	this.selectedAlliance = response.body;
	        },function(response){
	        	//FAILURE
	        });
        }
	}
});

