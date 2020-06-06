const paymentCtrl = {};
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var app_id = process.env.APPID;
var private_key = process.env.private_key;

paymentCtrl.Payment = async (req, res) => {
  console.log("ok");
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      var response = JSON.parse(this.responseText);
      res.send(this.responseText);
      if (this.status == 201) {
        console.log("Successfully Registered payment: " + response.id);
      } else {
        console.log("Error: " + this.status);
      }
    }
  };
  request.open("POST", "https://api.paymentsos.com/payments");
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("api-version", "1.3.0");
  request.setRequestHeader("x-payments-os-env", "test");
  request.setRequestHeader("app-id", app_id);
  request.setRequestHeader("private-key", private_key);
  var body = {
    amount: parseInt(req.body.amount),
    currency: req.body.currency,
    statement_soft_descriptor: req.body.description,
  };
  token = req.body.token;
  request.send(JSON.stringify(body));
};

paymentCtrl.Authorize = async (req, res) => {
  var request = new XMLHttpRequest();
  var url =
    "https://api.paymentsos.com/payments/" +
    req.body.paymentID +
    "/authorizations";
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      var response = JSON.parse(this.responseText);
      res.send(this.responseText);
      if (this.status == 201) {
        console.log("Successfully authorized payment: " + response.id);
      } else {
        console.log("Error: " + this.status);
      }
    }
  };
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("api-version", "1.3.0");
  request.setRequestHeader("x-payments-os-env", "test");
  request.setRequestHeader("app-id", app_id);
  request.setRequestHeader("private-key", private_key);
  var body = {
    payment_method: {
      type: "tokenized",
      token: req.body.token,
      credit_card_cvv: req.body.cvv,
    },
    reconciliation_id: "23434534534",
  };
  request.send(JSON.stringify(body));
};

paymentCtrl.Capture = async (req, res) => {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://api.paymentsos.com/payments/" + req.body.paymentID + "/captures"
  );

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      var response = JSON.parse(this.responseText);
      res.send(this.responseText);
      if (this.status == 201) {
        console.log("Successfully captured payment: " + response.id);
      } else {
        console.log("Error: " + this.status);
      }
    }
  };

  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("api-version", "1.3.0");
  request.setRequestHeader("x-payments-os-env", "test");
  request.setRequestHeader("app-id", app_id);
  request.setRequestHeader("private-key", private_key);
  request.send();
};

paymentCtrl.Refound = async (req, res) => {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://api.paymentsos.com/payments/" + req.body.paymentID + "/refunds"
  );

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      var response = JSON.parse(this.responseText);
      res.send(this.responseText);
      if (this.status == 201) {
        console.log("Successfully refounded payment: " + response.id);
      } else {
        console.log("Error: " + this.status);
      }
    }
  };

  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("api-version", "1.3.0");
  request.setRequestHeader("x-payments-os-env", "test");
  request.setRequestHeader("app-id", app_id);
  request.setRequestHeader("private-key", private_key);
  request.setRequestHeader("idempotency-key", "cust-34532-trans-001356-c");
  request.send();
};

module.exports = paymentCtrl;
