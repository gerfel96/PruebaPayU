function getToken() {
    console.log("ok");
    const additionalData = {
      holder_name: document.getElementById("cardholder-name").value,
      billing_address: {
        country: document.getElementById("cardholder-country").value,
        city: document.getElementById("cardholder-city").value,
        line1: document.getElementById("cardholder-line").value,
        phone: document.getElementById("cardholder-phone").value,
        email: document.getElementById("cardholder-email").value,
      },
    };
    POS.createToken(additionalData, (result) => {
      var tokenResult = JSON.parse(result);
      console.log("ID Token: " + tokenResult.token);
      document.getElementById("tokenSpace").innerHTML =
        "Your Token is " + tokenResult.token;
      document.getElementById("auth-token-id").value = tokenResult.token;
    });
}