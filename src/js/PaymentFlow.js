console.log("Inside js");
var token;
POS.setPublicKey("88f54ce4-03ac-4691-8291-f1b74a270e0b");
POS.initSecureFields("card-secure-fields");

document
  .getElementById("card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    getToken();
  });

//Payment
document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("ok");
    payment();
  });

//authorize
document
  .getElementById("authorize-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    autorize();
  });

//capture

document
  .getElementById("capture-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    capture();
  });

//Refound

document
  .getElementById("refound-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    refound();
  });
