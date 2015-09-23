function Ticket(newMovie, newTime,newAge){
  this.newMovie = newMovie;
  this.newTime = newTime;
  this.newAge = newAge;
  // this.addresses = [];
}

Ticket.prototype.ticketInfo = function() {

  return this.newMovie + ", " + this.newTime + ", " + this.newAge;
}

function calculateTicket(newMovie,newTime,newAge) {
  this.newMovie = newMovie;
  this.newTime = newTime;
  this.newAge = newAge;
  this.newTicketPrice = [];

  var ticketPrice = 10;
  if(newAge === infant) {
    ticketPrice = 0;
  }else if( newAge === student  && newAge === senior) {
    ticketPrice = ticketPrice - 2;
  } else
  return ticketPrice;
}

function resetFields() {
  $("input#new-movie").val("");
  $("input#new-time").val("");
  $("input.new-age").val("");

}

$(document).ready(function() {
  debugger;

  /* Form to obtain content for new ticket sale */
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("#new-movie").val();

    var inputtedTime = $("#new-time").val();
    var inputtedAge = $("#new-age").val();
    var newTicket = new Ticket(inputtedMovieName, inputtedTime, inputtedAge);

    /*Routing new contact information to web site*/
    $("ul#tickets").append("<li><span class='ticket'>" + newTicket.ticketInfo + "</span></li>");


    /* Show information for the movie ticket that is clicked */
    //$(".tickets").last().click(function() {
      $("#show-tickets").show();
      // $("#show-ticket h2").text(newTicket.firstName);
      $(".movie-name").text(newTicket.movie-name);
      $(".movie-time").text(newTicket.movie-time);
      $(".age").text(newTicket.age);


      // $("ul#addresses").text("");
      // newContact.addresses.forEach(function(address) {
      //   $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " +       address.state + "</li>");
      // });
    //});
    // var deleteAdditionalAddresses = new resetAddresses();
    var clear = new resetFields();
  });//closes form new-contact
});
