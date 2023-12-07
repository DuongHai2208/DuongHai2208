function keDT() {
  const id_Prescription = document.getElementById("id_Prescription").value;
  const id_Medicine = document.getElementById("id_Medicine").value;
  const dose = document.getElementById("dose").value;
  const Frequency = document.getElementById("Frequency").value;
  const Quantity = document.getElementById("Quantity").value;
  const data = {
    id_Prescription: id_Prescription,
    id_Medicine: id_Medicine,
    dose: dose,
    Frequency: Frequency,
    Quantity: Quantity,
  };

  fetch("http://localhost:3076/create_prescription_detail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("Thêm thành công");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
