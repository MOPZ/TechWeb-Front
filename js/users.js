var view = new Vue({
	el: "#vue-users",

	data: {
		selectedId:0,
		users:{},
		selectedUser:{},
	},
	methods: {
		getAllUsers:function(){
            var url = 'http://localhost:3000/users';
            this.$http.get(url).then(function(response){
                //Success
                this.users = response.body;
                }, function(response){
                //Failure
            });
        },
        getUserById:function(selectedId){
	        var url = 'http://localhost:3000/users/' + selectedId;
	        this.$http.get(url).then(function(response){
	        	//SUCCESS
	        	this.selectedUser = response.body;
	        },function(response){
	        	//FAILURE
	        });
        }
	}
});

