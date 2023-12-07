function taodonthuoc() {
    const NameMedicine = document.getElementById("NameMedicine").value;
    const min_dose = document.getElementById("min_dose").value;
    const max_dose = document.getElementById("max_dose").value;
    const max_frequency = document.getElementById("max_frequency").value;
    const Unit = document.getElementById("Unit").value;
    const data = {
      NameMedicine: NameMedicine,
      min_dose: min_dose,
      max_dose: max_dose,
      max_frequency: max_frequency,
      Unit: Unit
    };
  
    fetch("http://localhost:3076/create_medicine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Thêm thành công")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  