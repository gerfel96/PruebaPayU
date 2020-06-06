function payment() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var paymentResult = JSON.parse(this.responseText);
        if (paymentResult.id) {
          console.log("ID Payment: " + paymentResult.id);
          document.getElementById("auth-payment-id").value = paymentResult.id;
          document.getElementById("cap-payment-id").value = paymentResult.id;
          document.getElementById("ref-payment-id").value = paymentResult.id;
          document.getElementById("paymentSpace").innerHTML =
            "Your Payment ID is " + paymentResult.id;
        }else{
          console.log(paymentResult);
          document.getElementById("paymentSpace").innerHTML =
            "Error, contact support or check the Console for more information";
        }
      }
    };

    var url = "http://localhost:3000/api/payment";
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    var body = {
      token: document.getElementById("auth-token-id").value,
      amount: document.getElementById("amount").value,
      description: document.getElementById("description").value,
      currency: document.getElementById("currency").value,
    };
    request.send(JSON.stringify(body));
}
