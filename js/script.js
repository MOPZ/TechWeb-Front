var view = new Vue({
	el: "#vue-instance",

	data: {
		users:{},
	},
	methods: {
		getAllUsers:function(){
            var userId = 15;
      
            var url = 'http://localhost:3000/users';
            this.$http.get(url).then(function(response){
                //Success
                this.users = response.body.data;
                }, function(response){
                //Failure
            });
        },
	}
});

