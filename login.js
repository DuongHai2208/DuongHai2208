function login() {
  const code = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  const data = {
    code: code,
    password: password,
  };

  // Gửi yêu cầu POST đến server
  fetch("http://localhost:3076/login_doctor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.href = "donthuocgan.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
