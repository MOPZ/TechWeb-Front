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
                console.log(response.body);
                this.users = response.body.users;
                }, function(response){
                //Failure
            });
        },
        getUserById:function(selectedId){
	        var url = 'http://localhost:3000/users/' + selectedId;
	        this.$http.get(url).then(function(response){
	        	//SUCCESS
	        	console.log(response.body);
	        	this.selectedUser = response.body.user;
	        },function(response){
	        	//FAILURE
	        });
        }
	}
});

