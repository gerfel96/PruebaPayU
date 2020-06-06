function capture() {
    console.log("ok");
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var captureResult = JSON.parse(this.responseText);
        console.log("ID Capture: " + captureResult.id);
        document.getElementById("capSpace").innerHTML =
          "Your Capture ID is " +
          captureResult.id +
          " and is " +
          captureResult.result.status;
        if (captureResult.result.status === "Failed") {
          console.log(captureResult.result);
          document.getElementById("capErrorSpace").innerHTML =
            "Check the console for more information";
        }
      }
    };

    var url = "http://localhost:3000/api/capture";
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    var body = {
      paymentID: document.getElementById("cap-payment-id").value,
    };
    request.send(JSON.stringify(body));
}