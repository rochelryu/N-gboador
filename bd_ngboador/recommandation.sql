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

-- Listage de la structure de la table bd_ngboador. recommandation
CREATE TABLE IF NOT EXISTS `recommandation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userV_id` int(11) unsigned NOT NULL,
  `userC_id` int(11) unsigned NOT NULL,
  `content` varchar(255) NOT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_recommandation_user` (`userV_id`),
  KEY `FK_recommandation_user_2` (`userC_id`),
  CONSTRAINT `FK_recommandation_user` FOREIGN KEY (`userV_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_recommandation_user_2` FOREIGN KEY (`userC_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Listage des données de la table bd_ngboador.recommandation : ~2 rows (environ)
DELETE FROM `recommandation`;
/*!40000 ALTER TABLE `recommandation` DISABLE KEYS */;
INSERT INTO `recommandation` (`id`, `userV_id`, `userC_id`, `content`, `register_date`) VALUES
	(1, 6, 14, 'THIS IS GREAT HUMAN....\n\nNobody have this mentality', '2019-03-26 20:48:11'),
	(2, 7, 6, 'Limit the input file size\nLimit the total size of all files\nLimit the types of files that can be added\nShow preview for image files', '2019-03-26 20:52:07');
/*!40000 ALTER TABLE `recommandation` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
