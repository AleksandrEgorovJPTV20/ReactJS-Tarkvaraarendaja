-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 01 2023 г., 12:59
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `programmer`
--

-- --------------------------------------------------------

--
-- Структура таблицы `registers`
--

CREATE TABLE `registers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` text COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `email` text COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'admin@ee.ee', '$2b$10$YK.LalXd9uyeSV96rqO/cumZqeFn.UyKF/xRp.Ni9fGmOhRd99QPe', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZWUuZWUiLCJpYXQiOjE2ODU2MTYwNjcsImV4cCI6MTY4NTcwMjQ2N30.O-PHdaTqJ85Cd4upjUdEh6bX_2lo0PYawEy4kAJXdNA', '2023-04-08 08:30:25', '2023-06-01 10:41:07'),
(2, 'Pupil', 'pupil@ee.ee', '$2b$10$/9CeDjzbI9oi5T5rN4Djrem2XV/OG4B91VhXN3G5MEF1Nigsxz./O', 'user', NULL, '2023-04-14 05:20:30', '2023-04-15 05:22:50');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `registers`
--
ALTER TABLE `registers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `registers`
--
ALTER TABLE `registers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
