const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors()); // Sử dụng middleware cors
// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "medicine",
});

// Connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

// Middleware for parsing JSON data
app.use(express.json());

app.post("/insert_doctor", (req, res) => {
  const { code, cccd, Doctor_name, PhoneNumber, password } = req.body;
  const sql = `INSERT INTO doctor (code, cccd, Doctor_name, PhoneNumber, password) VALUES (?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [code, cccd, Doctor_name, PhoneNumber, password],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error: " + err.message });
      } else {
        res.status(200).json({ message: "Insert thành công" });
      }
    }
  );
});

app.post("/login_doctor", (req, res) => {
  const { code, password } = req.body;
  const sql = `SELECT * FROM doctor WHERE code = ? AND password = ?`;

  db.query(sql, [code, password], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error: " + err.message });
    } else {
      if (results.length > 0) {
        res.status(200).json({ message: "Đăng nhập thành công" });
      } else {
        res.status(401).json({ message: "Sai mã bác sĩ hoặc mật khẩu" });
      }
    }
  });
});
app.get("/patient_medicine_info", (req, res) => {
  const sql = `
    SELECT patient.id AS patientId, patient.Patient_name AS patientName, medicine.*
    FROM patient
    INNER JOIN prescription ON patient.id = prescription.id_Patient
    INNER JOIN medicine ON prescription.is_Medicine = medicine.id
  `;

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error: " + err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/create_prescription_detail", (req, res) => {
  const { id_Prescription, id_Medicine, dose, Frequency, Quantity } = req.body;
  const sql =
    "INSERT INTO Prescription_DEtail (id_Prescription, id_Medicine, dose, Frequency, Quantity) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [id_Prescription, id_Medicine, dose, Frequency, Quantity],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error: " + err.message });
      } else {
        res.status(200).json({ message: "Insert thành công" });
      }
    }
  );
});

app.get("/list_patient", (req, res) => {
  const sql = `SELECT * FROM patient`;

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error: " + err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/add_patient", (req, res) => {
  const { ten, ngaysinh, gioitinh, diachi } = req.body;
  const sql = `INSERT INTO patient (Patient_name, Date_birth, sex, Address) VALUES (?, ?, ?, ?)`;

  db.query(sql, [ten, ngaysinh, gioitinh, diachi], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error: " + err.message });
    } else {
      res.status(200).json({ message: "Insert thành công" });
    }
  });
});

app.post("/search_patient", (req, res) => {
  const { id } = req.body;
  const sql = `SELECT * FROM patient WHERE id = ?`;

  db.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error: " + err.message });
    } else {
      if (results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(404).json({ message: "Không tìm thấy bệnh nhân" });
      }
    }
  });
});
app.post("/create_medicine", (req, res) => {
  const { NameMedicine, min_dose, max_dose, max_frequency, Unit } = req.body;
  const sql = `INSERT INTO medicine (NameMedicine, min_dose, max_dose, max_frequency, Unit) VALUES (?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [NameMedicine, min_dose, max_dose, max_frequency, Unit],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error: " + err.message });
      } else {
        res.status(200).json({ message: "Insert thành công" });
      }
    }
  );
});
app.post("/create_prescription", (req, res) => {
  const { DoctorName, medicineName, date, idPatient } = req.body;

  const sqlMedicine = `SELECT id FROM medicine WHERE NameMedicine = ?`;
  db.query(sqlMedicine, [MedicineName], (err, resultMedicine) => {
    if (err) {
      res.status(500).json({ message: "Error: " + err.message });
    } else {
      const medicineId = resultMedicine[0].id;

      const sqlDoctor = `SELECT id FROM doctor WHERE Doctor_name = ?`;
      db.query(sqlDoctor, [DoctorName], (err, resultDoctor) => {
        if (err) {
          res.status(500).json({ message: "Error: " + err.message });
        } else {
          const doctorId = resultDoctor[0].id;

          const sqlPrescription = `INSERT INTO prescription (id_Patient, is_Medicine, id_doctor, Date) VALUES (?, ?, ?, ?)`;
          db.query(
            sqlPrescription,
            [idPatient, medicineId, doctorId, date],
            (err, result) => {
              if (err) {
                res.status(500).json({ message: "Error: " + err.message });
              } else {
                res.status(200).json({ message: "Insert thành công" });
              }
            }
          );
        }
      });
    }
  });
});

// Start server
const PORT = 3076;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
