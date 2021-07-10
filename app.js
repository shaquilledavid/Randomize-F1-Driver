const app = Vue.createApp({
     // template: '<h1>Hello {{firstName}}</h1>', // {{ xx }} is used for declarative rendering
     // at first we started with template here but we can move it to our index.html page as long as we are inside the app div

    data(){ //data is a function/method that returns an object
        return {
            firstName: 'John',
            lastName: 'Cena',
            email: 'lewishamilton@hotmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },

    //define all our methods in here
    methods: {
        async getUser(){
            //we want to get a random user everytime. we need to use fetch API with async await.
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            //console.log(results);



            
            // we need this. to change the attributes

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }, 
    },

})

app.mount('#app')