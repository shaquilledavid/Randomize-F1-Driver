const app = Vue.createApp({
     // template: '<h1>Hello {{firstName}}</h1>', // {{ xx }} is used for declarative rendering
     // at first we started with template here but we can move it to our index.html page as long as we are inside the app div

    data(){ //data is a function/method that returns an object
        return {
            firstName: 'Shaquille',
            lastName: 'David',
            team: 'University of Toronto Mississauga Eagles',
            number: '15',
            gender: 'male',
            picture: 'assets/me.jpg',
            url: 'https://www.ocaa.com/sports/mbkb/2019-20/players/shaquilledavidq1tj',
        }
    },

    
    //define all our methods in here
    methods: {

        pickRandomDriver(obj) {
            //generate a random driver. noted from https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
            var result;
            var count = 0;
            for (var prop in obj)
                if (Math.random() < 1/++count)
                   result = prop;
            return obj[result];
        },

        getDriverTeam(driver){
            // a function to distinguish which team the driver is part of, this information is not in the API response
            if (driver.driverId == "alonso" || driver.driverId == "ocon")
                return "Alpine F1 Team"
            
            if (driver.driverId == "bottas" || driver.driverId == "hamilton")
                return "Mercedes AMG Petronas"
            
            if (driver.driverId == "gasly" || driver.driverId == "tsunoda")
                return "Alpha Tauri F1 Team"
            
            if (driver.driverId == "giovinazzi" || driver.driverId == "raikkonen")
                return "Alfa Romeo F1 Team"
            
            if (driver.driverId == "latifi" || driver.driverId == "russell")
                return "Williams F1 Team"
            
            if (driver.driverId == "leclerc" || driver.driverId == "sainz")
                return "Ferrari F1 Team"
            
            if (driver.driverId == "mazepin" || driver.driverId == "mick_schumacher")
                return "HAAS F1 Team"
            
            if (driver.driverId == "norris" || driver.driverId == "ricciardo")
                return "McLaren F1 Team"

            if (driver.driverId == "perez" || driver.driverId == "max_verstappen")
                return "Red Bull Racing"
            
            if (driver.driverId == "stroll" || driver.driverId == "vettel")
                return "Aston Martin Cognizant F1 Team"
        },

        async getUser(){

            // Using the API: https://documenter.getpostman.com/view/11586746/SztEa7bL

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

            var f1;

            const drivers = await fetch("http://ergast.com/api/f1/2021/drivers.json", requestOptions)
            .then(function(response) { return response.json(); })
            .then(function(json) {
                //console.log(json.MRData.DriverTable.Drivers)
                f1 = json.MRData.DriverTable.Drivers
            });
            
            //pick a random driver on click
            driver = this.pickRandomDriver(f1);
            id = driver.driverId;
            console.log(id)

            //update the driver
            this.firstName = driver.givenName;
            this.lastName = driver.familyName;
            this.number = driver.permanentNumber;
            this.team = this.getDriverTeam(driver);
            this.picture = `assets/${driver.driverId}.jpg`; //https://www.codegrepper.com/code-examples/javascript/javascript+string+formatting

        }, 
    },

})

app.mount('#app')