function kedonthuoc1() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const DoctorName = document.getElementById("DoctorName").value;
  const MedicineName = document.getElementById("MedicineName").value;
  const data = {
    DoctorName: DoctorName,
    MedicineName: MedicineName,
    date: new Date(),
    idPatient: id,
  };
  fetch("http://localhost:3076/create_prescription", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("Kê đơn thành công");
    })
    .catch((error) => {
      console.error("Error:", error);
      // Xử lý khi gọi API gặp lỗi
    });
}
