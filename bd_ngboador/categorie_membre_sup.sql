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

-- Listage de la structure de la table bd_ngboador. categorie_membre_sup
CREATE TABLE IF NOT EXISTS `categorie_membre_sup` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `profil` varchar(255) NOT NULL,
  `descrybe` text,
  `type` int(11) unsigned NOT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `type` (`type`),
  CONSTRAINT `FK_categorie_membre_sup_statut` FOREIGN KEY (`type`) REFERENCES `statut` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='c''est la table qui est chargé de faire la différence entre les membres de niveau supperieur au membres simple et d''honneurs';

-- Listage des données de la table bd_ngboador.categorie_membre_sup : ~4 rows (environ)
DELETE FROM `categorie_membre_sup`;
/*!40000 ALTER TABLE `categorie_membre_sup` DISABLE KEYS */;
INSERT INTO `categorie_membre_sup` (`id`, `name`, `profil`, `descrybe`, `type`, `register_date`, `level`) VALUES
	(1, 'membres fondateurs', 'ambassadeur2.png', 'Lorem ipsmum de malade quoi', 5, '2019-01-23 00:22:18', 1),
	(2, 'membres d\'honneurs', 'honor3.jpg', 'Lorem ipsmum de malade quoi Lorem ipsmum de malade quoi Lorem ipsmum de malade quoi', 5, '2019-01-23 00:23:56', 2),
	(3, 'membres actifs', 'sympathisant3.png', 'Lorem ipsmum de malade quoi Lorem ipsmum de malade quoi Lorem ipsmum de malade quoi', 6, '2019-01-23 00:28:41', 3),
	(4, 'membre sympathisants', 'volunter2.png', 'Lorem ipsmum de malade quoi Lorem ipsmum de malade quoi Lorem ipsmum de malade quoi', 6, '2019-01-23 00:35:20', 4);
/*!40000 ALTER TABLE `categorie_membre_sup` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
