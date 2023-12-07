function searchBenhNhan() {
    const id = document.getElementById("id").value;
    const data = {
      id: id,
    };
    fetch("http://localhost:3076/search_patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.href = `kedonthuoc1.html?id=${data[0].id}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  