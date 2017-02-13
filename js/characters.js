var view = new Vue({
	el: "#vue-characters",

	data: {
		selectedId:1,
		characters:{},
		selectedChar:{},
		selectedCharPosX:null,
		selectedCharPosY:null,
	},
	methods: {
		getAllCharacters:function(){
			var url = 'http://localhost:3000/characters';
			this.$http.get(url).then(function(response){
                //Success
                this.characters = response.body.characters;
                var url2 = 'http://localhost:3000/users';

                this.$http.get(url2).then(function(response){
                	for (var i = this.characters.length - 1; i >= 0; i--) {
                		for (var j = response.body.users.length - 1; j >= 0; j--) {
                			if(this.characters[i].user_id == response.body.users[j].id)
                				this.characters[i].user_id = response.body.users[j].name;
                		};
                	};
                }, function(response){
                		//Failure
                	});

            }, function(response){
                //Failure
            });
		},
		getCharById:function(selectedId){
			var url = 'http://localhost:3000/characters/' + selectedId;
			this.$http.get(url).then(function(response){
	        	//SUCCESS
	        	this.selectedChar = response.body.character;
	        	this.selectedCharPosX = this.selectedChar.position.x;
	        	this.selectedCharPosY = this.selectedChar.position.y;

	        	var url2 = 'http://localhost:3000/users';

	        	this.$http.get(url2).then(function(response){
	        		for (var i = response.body.users.length - 1; i >= 0; i--) {
	        				if(this.selectedChar.user_id == response.body.users[i].id)
	        					this.selectedChar.user_id = response.body.users[i].name;
	        		
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
