function refound() {
    console.log("ok");
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var refoundResult = JSON.parse(this.responseText);
        if (refoundResult.id) {
          console.log("ID Capture: " + refoundResult.id);
          document.getElementById("refSpace").innerHTML =
            "Your Refound ID is " +
            refoundResult.id +
            " and is " +
            refoundResult.result.status;
        } else {
          console.log(refoundResult);
          document.getElementById("refSpace").innerHTML =
            "Error, contact support or check the Console for more information";
        }
      }
    };

    var url = "http://localhost:3000/api/refound";
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    var body = {
      paymentID: document.getElementById("ref-payment-id").value,
    };
    request.send(JSON.stringify(body));
}