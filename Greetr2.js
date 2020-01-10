//attempt to write Greetr using ES6 class syntax. Needs research to understand the differences

(function ( global, $ ) {

    class Greetr2 {
        constructor(firstName = '', lastName = '', language = 'en') {
            this.firstName = firstName;
            this.lastName = lastName;
            this.language = language;
        }
    
        init() {
            return new Greetr
        }

    }



    global.Greetr2 = global.G$2 = Greetr2; //broken

}(window, jQuery));