-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           5.7.24 - MySQL Community Server (GPL)
-- SE du serveur:                Win32
-- HeidiSQL Version:             9.5.0.5337
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Listage de la structure de la table bd_ngboador. statut
CREATE TABLE IF NOT EXISTS `statut` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '0',
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='la table qui permet de dire si quelque chose est en ligne, en attente ou refusé..\r\nil sera rempli notament avec ses valeurs';

-- Listage des données de la table bd_ngboador.statut : ~8 rows (environ)
DELETE FROM `statut`;
/*!40000 ALTER TABLE `statut` DISABLE KEYS */;
INSERT INTO `statut` (`id`, `name`, `register_date`) VALUES
	(1, 'En Attente', '2018-08-06 19:35:09'),
	(2, 'En Ligne', '2018-08-06 19:35:25'),
	(3, 'Rejeté', '2018-08-06 19:35:35'),
	(4, 'Accepté', '2019-01-08 13:27:02'),
	(5, 'Inner', '2019-01-23 00:19:13'),
	(6, 'Owner', '2019-01-23 00:19:21'),
	(7, 'Admin Group', '2019-02-20 17:16:24'),
	(8, 'membre Groupe', '2019-02-20 17:16:38');
/*!40000 ALTER TABLE `statut` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
