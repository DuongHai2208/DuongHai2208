function them() {
    const ten = document.getElementById("ten").value;
    const ngaysinh = document.getElementById("ngaysinh").value;
    const gioitinh = document.getElementById("gioitinh").value;
    const diachi = document.getElementById("diachi").value;
  
    const data = {
      ten: ten,
      ngaysinh: ngaysinh,
      gioitinh: gioitinh,
      diachi: diachi
    };
  
    fetch("http://localhost:3076/add_patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // window.location.href = "taodonthuoc.html";
        // Xử lý dữ liệu sau khi gửi thành công, ví dụ hiển thị thông báo, làm mới form, v.v.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  