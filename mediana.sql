-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2023 at 11:43 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mediana`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `CREATED_AT` datetime NOT NULL DEFAULT current_timestamp(),
  `MEDIANA` int(11) NOT NULL,
  `STEVILA` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`CREATED_AT`, `MEDIANA`, `STEVILA`) VALUES
('2023-02-06 17:12:08', 637, '[528,637,980,949,620]'),
('2023-02-09 09:37:04', 650, '[123,859,543,920,756,287]'),
('2023-02-09 09:42:56', 417, '[35,984,868,799,13,20]'),
('2023-02-09 09:43:05', 448, '[490,129,195,984,428,786,498,468,119,423]'),
('2023-02-09 09:43:26', 523, '[978,545,670,304,389,500]'),
('2023-02-09 11:35:53', 545, '[805,264,733,545,382]'),
('2023-02-09 11:36:13', 484, '[409,775,742,251,107,559]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`CREATED_AT`),
  ADD KEY `CREATED_AT` (`CREATED_AT`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
