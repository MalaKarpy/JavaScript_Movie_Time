//
describe('Ticket', function() {
  it("creates a new movie ticket", function() {
    var testTicket = new Ticket("Spiderman","12:00pm","10");
    expect(testTicket.newMovie).to.equal("Spiderman");
    expect(testTicket.newTime).to.equal("12:00pm");
    expect(testTicket.newAge).to.equal("10");
  });
});
//
//   it("adds the fullName method to all contacts", function() {
//     var testContact = new Contact("Sherlock","Holmes");
//     expect(testContact.fullName()).to.equal("Sherlock Holmes");
//   });
// });
//
 describe('calculateTicket', function() {

  it("calculates ticket price based on age", function() {
    var calculateTestTicket = new calculateTicket("Spiderman","12:00pm","10");
    expect(calculateTestTicket.newTicketPrice).to.equal("8");
  });
});
