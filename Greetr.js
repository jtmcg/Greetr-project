//Library that helps give greetings

//reqs
//When given first and last name and an optional language, generate formal and informal greetings
//Support English and Spanish
//reusable
//Easy to type: G$(), support jQuery

(function( global, $ ) { 

    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language); //function constructor to create our Greetr object
    }

    //values hidden to the outside world
    var supportedLangs = ['en', 'es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola',
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
    }

    //properties that will be exposed to the outside world to use with Greetr or G$
    Greetr.prototype = { //create a prototype object that we can add upon later
        
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                console.log(this.language);
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;
            //if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        //jQuery enabled greeting. Insert message into html element
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    }; 

    Greetr.init = function(firstName, lastName, language) { //Greetr has been initialized (above) so we are now 

            var self = this;
            self.firstName = firstName || '';
            self.lastName = lastName || '';
            self.language = language || 'en';

            self.validate();
    }

    Greetr.init.prototype = Greetr.prototype; //Gives all calls to Greetr the same properties as the prototype we'll define

    global.Greetr = global.G$ = Greetr; //exposes Greetr to the window

}(window, jQuery));