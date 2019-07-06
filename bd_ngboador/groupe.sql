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

-- Listage de la structure de la table bd_ngboador. groupe
CREATE TABLE IF NOT EXISTS `groupe` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `lieu` varchar(100) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `couverture` varchar(255) DEFAULT NULL,
  `biblio` text NOT NULL,
  `crypt` varchar(255) NOT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `level` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `FK_groupe_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='la table groupe prend des valeur pard defaut de profil et couverture (ne pas forcer un student à uploader forcement des images)\r\nles membres de chaque groupe ainsi que ces admins seront géré dans une table.';

-- Listage des données de la table bd_ngboador.groupe : ~6 rows (environ)
DELETE FROM `groupe`;
/*!40000 ALTER TABLE `groupe` DISABLE KEYS */;
INSERT INTO `groupe` (`id`, `user_id`, `lieu`, `name`, `couverture`, `biblio`, `crypt`, `register_date`, `level`) VALUES
	(1, 6, 'Côte D\'Ivoire', 'Nos Enfants', 'group10.jpg', 'Lorem', 'cdrcgftcvstgvtg', '2019-01-23 00:44:38', 1),
	(2, 7, 'Côte D\'Ivoire', 'Helping Children', 'group1.jpg', 'Lorem', 'cftsv gbtbhtbhtybhvtvnhthbt', '2019-01-23 01:02:17', 1),
	(3, 8, 'Côte D\'Ivoire', 'Outre regard', 'group12.jpg', 'Lorem', 'dgtsyfgydf', '2019-01-23 01:02:17', 1),
	(4, 9, 'Côte D\'Ivoire', 'Music group', 'gradient.png', 'Comment allez-vous', 'hijdifji', '2019-02-19 21:09:27', 0),
	(5, 10, 'Côte D\'Ivoire', 'Love group', 'guitar-756326_1920.jpg', 'Avoir de l\'amour pour son prochaiin est une bonne chose', 'fdjfgqsdyq', '2019-02-19 21:13:49', 0),
	(6, 12, 'Côte D\'Ivoire', 'football group', 'group12.jpeg', 'Le sport c\'est la vie', '6', '2019-02-19 21:15:22', 0);
/*!40000 ALTER TABLE `groupe` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
