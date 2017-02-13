var view = new Vue({
	el: "#vue-users",

	data: {
		selectedId:1,
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

                var url2 = 'http://localhost:3000/alliances';

                this.$http.get(url2).then(function(response){
                	for (var i = this.users.length - 1; i >= 0; i--) {
                		for (var j = response.body.alliances.length - 1; j >= 0; j--) {
                			if(this.users[i].alliance_id == response.body.alliances[j].id)
                				this.users[i].alliance_id = response.body.alliances[j].name;
                		};
                	};
                }, function(response){
                		//Failure
                	});




            }, function(response){
                //Failure
            });
		},
		getUserById:function(selectedId){
			var url = 'http://localhost:3000/users/' + selectedId;
			this.$http.get(url).then(function(response){
	        	//SUCCESS
	        	this.selectedUser = response.body.user;
	        	var url2 = 'http://localhost:3000/alliances';

	        	this.$http.get(url2).then(function(response){
	        		for (var i = response.body.alliances.length - 1; i >= 0; i--) {
	        				if(this.selectedUser.alliance_id == response.body.alliances[i].id)
	        					this.selectedUser.alliance_id = response.body.alliances[i].name;
	        		
	        		};
	        	}, function(response){
                		//Failure
                });

	        },function(response){
	        	//FAILURE
	        });
		}
	}
});

