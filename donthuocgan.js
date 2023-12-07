function getMedicineData() {
  fetch("http://localhost:3076/patient_medicine_info")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const tbody = document.querySelector("#medicineTable tbody");
      data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.patientName}</td>
            <td>${item.NameMedicine}</td>
            <td>${item.Unit}</td>
          `;
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
getMedicineData();
