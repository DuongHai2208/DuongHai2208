create database medicine;
use medicine ; 
CREATE TABLE `Doctor` (
  `id` int(11) NOT NULL,
  `code` varchar(50) DEFAULT NULL,
  `cccd` bigint(20) DEFAULT NULL,
  `Doctor_name` varchar(50) DEFAULT NULL,
  `PhoneNumber` varchar(10) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Doctor`
--

INSERT INTO `Doctor` (`id`, `code`, `cccd`, `Doctor_name`, `PhoneNumber`, `password`) VALUES
(4, 'ID123', 123456789, 'test', '0123456789', 'test'),
(5, 'ID456', 332628666, 'Demo', '0332628666', 'Demo');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Medicine`
--

CREATE TABLE `Medicine` (
  `id` int(11) NOT NULL,
  `NameMedicine` varchar(50) DEFAULT NULL,
  `min_dose` int(11) DEFAULT NULL,
  `max_dose` int(11) DEFAULT NULL,
  `max_frequency` int(11) DEFAULT NULL,
  `Unit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Medicine`
--

INSERT INTO `Medicine` (`id`, `NameMedicine`, `min_dose`, `max_dose`, `max_frequency`, `Unit`) VALUES
(1, 'Thuoc chong nhuc', 10, 1000, 2, 30),
(2, 'Thuốc chữa xoang', 2, 4, 3, 500);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Patient`
--

CREATE TABLE `Patient` (
  `id` int(11) NOT NULL,
  `Patient_name` varchar(50) DEFAULT NULL,
  `Date_birth` date DEFAULT NULL,
  `sex` varchar(50) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Patient`
--

INSERT INTO `Patient` (`id`, `Patient_name`, `Date_birth`, `sex`, `Address`) VALUES
(1, 'Benh nhan A', '2023-12-01', 'Nam', 'Hai Phong'),
(2, 'Vũ Văn Thuận', '2023-12-01', 'Nam', 'HP');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Prescription`
--

CREATE TABLE `Prescription` (
  `id` int(11) NOT NULL,
  `id_Patient` int(11) DEFAULT NULL,
  `id_doctor` int(11) DEFAULT NULL,
  `is_Medicine` int(11) DEFAULT NULL,
  `Date` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Prescription`
--

INSERT INTO `Prescription` (`id`, `id_Patient`, `id_doctor`, `is_Medicine`, `Date`) VALUES
(1, 1, 4, 1, '2023-12-07T09:38:45.702Z'),
(2, 2, 5, 2, '2023-12-07T10:01:32.563Z');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Prescription_DEtail`
--

CREATE TABLE `Prescription_DEtail` (
  `id` int(11) NOT NULL,
  `id_Prescription` int(11) DEFAULT NULL,
  `id_Medicine` int(11) DEFAULT NULL,
  `dose` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `Doctor`
--
ALTER TABLE `Doctor`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Medicine`
--
ALTER TABLE `Medicine`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Patient`
--
ALTER TABLE `Patient`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Prescription`
--
ALTER TABLE `Prescription`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Patient` (`id_Patient`),
  ADD KEY `id_doctor` (`id_doctor`);

--
-- Chỉ mục cho bảng `Prescription_DEtail`
--
ALTER TABLE `Prescription_DEtail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Prescription` (`id_Prescription`),
  ADD KEY `id_Medicine` (`id_Medicine`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `Doctor`
--
ALTER TABLE `Doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `Medicine`
--
ALTER TABLE `Medicine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `Patient`
--
ALTER TABLE `Patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `Prescription`
--
ALTER TABLE `Prescription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `Prescription_DEtail`
--
ALTER TABLE `Prescription_DEtail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `Prescription`
--
ALTER TABLE `Prescription`
  ADD CONSTRAINT `prescription_ibfk_1` FOREIGN KEY (`id_Patient`) REFERENCES `Patient` (`id`),
  ADD CONSTRAINT `prescription_ibfk_2` FOREIGN KEY (`id_doctor`) REFERENCES `Doctor` (`id`);

--
-- Các ràng buộc cho bảng `Prescription_DEtail`
--
ALTER TABLE `Prescription_DEtail`
  ADD CONSTRAINT `prescription_detail_ibfk_1` FOREIGN KEY (`id_Prescription`) REFERENCES `Prescription` (`id`),
  ADD CONSTRAINT `prescription_detail_ibfk_2` FOREIGN KEY (`id_Medicine`) REFERENCES `Medicine` (`id`);
COMMIT;

