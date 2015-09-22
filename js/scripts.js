function Ticket(newMovie, newTime,newAge){
  this.newMovie = newMovie;
  this.newTime = newTime;
  this.newAge = newAge;
  // this.addresses = [];
}

Ticket.prototype.ticketInfo = function() {
  return this.newMovie + ", " + this.newTime + ", " + this.newAge;
}

// function Address(street,city,state) {
//   this.street = street;
//   this.city = city;
//   this.state = state;
// }
// Address.prototype.fullAddress = function() {
//   return this.street + ", " + this.city + ", " + this.state;
// }


function resetFields() {
  $("input#new-movie").val("");
  $("input#new-time").val("");
  $("input.new-age").val("");

}

// function resetAddresses(){
//   $("div.new-address").not("div.new-address:nth-child(1)").remove();
//   //use class new-address, all additional classes will be deleted
// }

// function formAddress() {
//   $(".new-address").append('<div class="new-address">' +
//   '<div class="form-group">' +
//   '<label for="new-street">Street</label>'+
//   '<input type="text" class="form-control new-street">' +
//   '</div>' +
//   '<div class="form-group">' +
//   '<label for="new-city">City</label>' +
//   '<input type="text" class="form-control new-city">' +
//   '</div>' +
//   '<div class="form-group">' +
//   '<label for="new-state">State</label>' +
//   '<input type="text" class="form-control new-state">' +
//   '</div>' +
//   '</div>');
// }

$(document).ready(function() {

  /* Form to add an additional address to a contact */
  // $("#add-address").click(function() {
  //   var addAdditionalAddress = new formAddress();
  //
  // });

  /* Form to add a contact */
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("input#new-movie").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedAge = $("input#new-age").val();
    // var newContact = { firstName: inputtedMovieName, lastName: inputtedLastName, addresses: [] };
    var newTicket = new Ticket(inputtedMovieName, inputtedTime,inputtedAge);

    /* Add a contact's address */
  // $(".new-address").each(function() {
  //   var inputtedStreet = $(this).find("input.new-street").val();
  //   var inputtedCity = $(this).find("input.new-city").val();
  //   var inputtedState = $(this).find("input.new-state").val();
  //   //var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
  //   var newAddress = new Address( inputtedStreet, inputtedCity, inputtedState);
  //   newContact.addresses.push(newAddress);
  //
  // });

  /* Hidden form to add a second address or update information */
  // $(".second-address").each(function() {
  //   var inputtedStreet = $(this).find("input.new-street").val();
  //   var inputtedCity = $(this).find("input.new-city").val();
  //   var inputtedState = $(this).find("input.new-state").val();
  //   // var secondAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
  //   var secondAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
  //   newContact.addresses.push(secondAddress);
  // });

    /*Routing new contact information to web site*/
    $("ul#tickets").append("<li><span class='ticket'>" + newTicket.ticketInfo() + "</span></li>");


    /* Show information for the contact that is clicked */
    $(".ticket").last().click(function() {
      $("#show-ticket").show();
      // $("#show-ticket h2").text(newTicket.firstName);
      $(".movie-name").text(newTicket.movie-name);
      $(".movie-time").text(newTicket.movie-time);
      $(".age").text(newTicket.age);

      // $("ul#addresses").text("");
      // newContact.addresses.forEach(function(address) {
      //   $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " +       address.state + "</li>");
      });
    });


    $( "p" )
      .on( "mouseenter", function() {
        $( this ).css({
          "background-color": "yellow",
          "font-weight": "bolder"
        });
      })
      .on( "mouseleave", function() {
        var styles = {
          backgroundColor : "#ddd",
          fontWeight: ""
        };
        $( this ).css( styles );
      });



    // var deleteAdditionalAddresses = new resetAddresses();
    var clear = new resetFields();



  });//closes form new-contact
});
