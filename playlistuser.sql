-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-08-2023 a las 21:06:09
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `playlistuser`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id_canciones` int(11) NOT NULL,
  `nombreCancion` varchar(45) NOT NULL,
  `idPlayList` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id_canciones`, `nombreCancion`, `idPlayList`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Swift', 1, 1, '2023-08-28 13:30:13', '2023-08-28 13:30:13', '2023-08-28 13:30:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playlists`
--

CREATE TABLE `playlists` (
  `idPlayList` int(11) NOT NULL,
  `nombrePlaylist` varchar(45) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `playlists`
--

INSERT INTO `playlists` (`idPlayList`, `nombrePlaylist`, `id_usuario`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'dorimsewe', 1, 1, '2023-08-28 05:31:27', '2023-08-28 15:36:49', '2023-08-28 05:31:27'),
(4, 'Wanchopitoo', 2, 1, '2023-08-28 12:40:29', '2023-08-28 12:40:29', '2023-08-28 12:40:29'),
(6, 'asd', 2, 1, '2023-08-28 13:17:11', '2023-08-28 13:17:11', '2023-08-28 13:17:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `email`, `usuario`, `contraseña`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Daniel', 'Gomezszz', 'danielgomez@gmail.com', 'danixx', '202020', 1, '2023-08-28 05:25:45', '2023-08-28 05:25:45', '2023-08-28 05:25:45'),
(2, 'Daniel2', 'Gomezszz', 'danielgomez@gmail.com', 'danixx', '202020', 1, '2023-08-28 12:40:22', '2023-08-28 12:40:22', '2023-08-28 12:40:22'),
(3, 'Daniel2', 'Gomezszz', 'danielgomez@gmail.com', 'danixwx', '202020', 1, '2023-08-28 15:37:05', '2023-08-28 15:37:05', '2023-08-28 15:37:05'),
(4, 'Daniel2', 'Gomezszz', 'danielgomez@gmail.com', 'danixwx', '2020220', 1, '2023-08-28 17:31:41', '2023-08-28 17:31:41', '2023-08-28 17:31:41'),
(5, 'daniel', 'gomez', 'danigmail.com', 'danigomez', '74338427', 1, '2023-08-28 18:42:41', '2023-08-28 18:42:41', '2023-08-28 18:42:41'),
(6, 'msf22df', 'de', '2332', 'sadsadd', '$2b$10$jU87F8/LwrN9gTZRt6QUUO.t8luL1VBJ6IFPuA', 1, '2023-08-28 19:05:44', '2023-08-28 19:05:44', '2023-08-28 19:05:44');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id_canciones`),
  ADD KEY `idPlayList` (`idPlayList`);

--
-- Indices de la tabla `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`idPlayList`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id_canciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `playlists`
--
ALTER TABLE `playlists`
  MODIFY `idPlayList` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD CONSTRAINT `canciones_ibfk_1` FOREIGN KEY (`idPlayList`) REFERENCES `playlists` (`idPlayList`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `playlists`
--
ALTER TABLE `playlists`
  ADD CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
