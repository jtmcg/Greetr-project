//gets a new object (the architecture allows us to not use the 'new' keyword here)
var g = G$("John", "Doe");

$('#login').click(function() {
     var loginGrtr = G$('John', 'Doe')

     $('#logindiv').hide();

     //uses chainable methods to post a greeting on the webpage using jQuery
     loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});