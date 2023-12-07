create database KDT;
use KDT ; 

-- Tạo bảng BenhNhan
CREATE TABLE Patient (
  id INT PRIMARY KEY AUTO_INCREMENT,
  Patient_name VARCHAR(50),
  Date_birth DATE,
  sex bit,
  Address VARCHAR(100)
);

-- Tạo bảng BacSi
CREATE TABLE Doctor (
  id INT PRIMARY KEY AUTO_INCREMENT,
  Doctor_name VARCHAR(50),
  PhoneNumber VARCHAR(10)
);

-- Tạo bảng DonThuoc
CREATE TABLE Prescription (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_Patient INT,
  id_doctor INT,
  Date DATE,
  FOREIGN KEY (id_Patient) REFERENCES Patient(id),
  FOREIGN KEY (id_doctor) REFERENCES Doctor(id)
);

-- Tạo bảng LieuLuong
CREATE TABLE Medicine (
  id INT PRIMARY KEY AUTO_INCREMENT,
  NameMedicine VARCHAR(50),
  min_dose INT,
  max_dose INT,
  max_frequency INT,
  Unit int
);

-- Tạo bảng ChiTietKeDon
CREATE TABLE Prescription_DEtail (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_Prescription INT,
  id_Medicine INT,
  dose DECIMAL(5, 2),
  FOREIGN KEY (id_Prescription) REFERENCES Prescription(id),
  FOREIGN KEY (id_Medicine) REFERENCES Medicine(id)
);

