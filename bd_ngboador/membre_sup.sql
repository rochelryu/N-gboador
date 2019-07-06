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

-- Listage de la structure de la table bd_ngboador. membre_sup
CREATE TABLE IF NOT EXISTS `membre_sup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `biblio` text NOT NULL,
  `profil` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL DEFAULT '#',
  `categorie` int(11) unsigned NOT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `statut_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `statut_id` (`statut_id`),
  KEY `categorie` (`categorie`),
  CONSTRAINT `FK_membre_categorie_membre_sup` FOREIGN KEY (`categorie`) REFERENCES `categorie_membre_sup` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_entreprise_statut` FOREIGN KEY (`statut_id`) REFERENCES `statut` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='table de chaque membre contenant son type(categorie) avec leur statut (en attente, en ligne)';

-- Listage des données de la table bd_ngboador.membre_sup : ~0 rows (environ)
DELETE FROM `membre_sup`;
/*!40000 ALTER TABLE `membre_sup` DISABLE KEYS */;
/*!40000 ALTER TABLE `membre_sup` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
