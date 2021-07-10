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
    }

})

app.mount('#app')