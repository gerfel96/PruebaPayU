function autorize() {
    console.log("ok");
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var authorizedResult = JSON.parse(this.responseText);
        if (authorizedResult.id) {
          console.log("ID Authorize: " + authorizedResult.id);
          document.getElementById("authSpace").innerHTML =
            "Your Authorize ID is " +
            authorizedResult.id +
            " and is " +
            authorizedResult.result.status;
        } else {
          console.log(authorizedResult);
          document.getElementById("authSpace").innerHTML =
            "Error, contact support or check the Console for more information";
        }
      }
    };

    var url = "http://localhost:3000/api/authorize";
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    var body = {
      token: document.getElementById("auth-token-id").value,
      paymentID: document.getElementById("auth-payment-id").value,
      cvv: "123",
    };
    request.send(JSON.stringify(body));
}