/*
SQLyog Community v12.09 (64 bit)
MySQL - 10.1.8-MariaDB : Database - db_turismo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_turismo` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_turismo`;

/*Table structure for table `departamentos` */

DROP TABLE IF EXISTS `departamentos`;

CREATE TABLE `departamentos` (
  `id_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `departamentos` */

insert  into `departamentos`(`id_departamento`,`nombre`,`descripcion`,`createdAt`,`updatedAt`) values (1,'Izabal','Departamento','2016-05-07 05:45:09','2016-05-07 05:45:09');

/*Table structure for table `lugarturisticos` */

DROP TABLE IF EXISTS `lugarturisticos`;

CREATE TABLE `lugarturisticos` (
  `id_lugarturistico` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `id_departamento` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_lugarturistico`),
  KEY `id_departamento` (`id_departamento`),
  CONSTRAINT `lugarturisticos_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `lugarturisticos` */

insert  into `lugarturisticos`(`id_lugarturistico`,`nombre`,`descripcion`,`direccion`,`id_departamento`,`createdAt`,`updatedAt`) values (1,'Castillo de San Felipe','Lugar Recreativo','Rio Dulce',1,'2016-05-06 23:45:43','2016-05-06 23:45:45');

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `nick` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
