function register() {
  const code = document.getElementById("user").value;
  const cccd = document.getElementById("cccd").value;
  const doctorName = document.getElementById("ten").value;
  const phoneNumber = document.getElementById("sdt").value;
  const password = document.getElementById("pass").value;
  const data = {
    code: code,
    cccd: cccd,
    Doctor_name: doctorName,
    PhoneNumber: phoneNumber,
    password: password
  };
  // Gửi yêu cầu POST đến server
  fetch("http://localhost:3076/insert_doctor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
