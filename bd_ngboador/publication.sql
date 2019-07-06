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

-- Listage de la structure de la table bd_ngboador. publication
CREATE TABLE IF NOT EXISTS `publication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content_text` text,
  `file1` varchar(255) DEFAULT NULL,
  `file2` varchar(255) DEFAULT NULL,
  `file3` varchar(255) DEFAULT NULL,
  `file4` varchar(255) DEFAULT NULL,
  `file5` varchar(255) DEFAULT NULL,
  `file6` varchar(255) DEFAULT NULL,
  `file7` varchar(255) DEFAULT NULL,
  `file8` varchar(255) DEFAULT NULL,
  `file9` varchar(255) DEFAULT NULL,
  `file10` varchar(255) DEFAULT NULL,
  `file11` varchar(255) DEFAULT NULL,
  `file12` varchar(255) DEFAULT NULL,
  `file13` varchar(255) DEFAULT NULL,
  `file14` varchar(255) DEFAULT NULL,
  `file15` varchar(255) DEFAULT NULL,
  `file16` varchar(255) DEFAULT NULL,
  `file17` varchar(255) DEFAULT NULL,
  `file18` varchar(255) DEFAULT NULL,
  `file19` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `user_id` int(11) unsigned DEFAULT NULL,
  `team_id` int(11) unsigned DEFAULT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `statuts_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `students_id` (`user_id`),
  KEY `statuts_id` (`statuts_id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `FK_rs_publication_rs_student` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_publication_rs_team` FOREIGN KEY (`team_id`) REFERENCES `groupe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_publication_statut` FOREIGN KEY (`statuts_id`) REFERENCES `statut` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='table contenant les différents info sur une publication d''un etudiant, ou d''un admin.\r\nla colone tags répésente le mot clé qui désigne la publication';

-- Listage des données de la table bd_ngboador.publication : ~3 rows (environ)
DELETE FROM `publication`;
/*!40000 ALTER TABLE `publication` DISABLE KEYS */;
INSERT INTO `publication` (`id`, `title`, `content_text`, `file1`, `file2`, `file3`, `file4`, `file5`, `file6`, `file7`, `file8`, `file9`, `file10`, `file11`, `file12`, `file13`, `file14`, `file15`, `file16`, `file17`, `file18`, `file19`, `tags`, `lieu`, `user_id`, `team_id`, `register_date`, `statuts_id`) VALUES
	(7, NULL, '', '484505719493985_1557361964817_Capture d’écran (2).png', '484505719493985_1557361964885_Capture d’écran (3).png', '484505719493985_1557361964948_Capture d’écran (5).png', '484505719493985_1557361965043_Capture d’écran (10).png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Côte D\'Ivoire, Abdjan', 6, NULL, '2019-05-09 02:32:48', 2),
	(8, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Côte D\'Ivoire, Abdjan', 6, NULL, '2019-05-15 00:38:07', 2),
	(9, NULL, '', '484505719493985_1557873599340_Capture d’écran (11).png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Côte D\'Ivoire, Abdjan', 6, NULL, '2019-05-15 00:40:03', 2);
/*!40000 ALTER TABLE `publication` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
