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

-- Listage de la structure de la table bd_ngboador. follow_user
CREATE TABLE IF NOT EXISTS `follow_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_prim_id` int(11) unsigned NOT NULL,
  `user_sec_id` int(11) unsigned NOT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `statut_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_prim_id` (`user_prim_id`),
  KEY `student_sec` (`user_sec_id`),
  KEY `statut_id` (`statut_id`),
  CONSTRAINT `FK_rs_naner_student_rs_student` FOREIGN KEY (`user_prim_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_naner_student_rs_student_2` FOREIGN KEY (`user_sec_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_naner_student_statut` FOREIGN KEY (`statut_id`) REFERENCES `statut` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='la table de qui sert de relation pour une demande d''am entre student';

-- Listage des données de la table bd_ngboador.follow_user : ~2 rows (environ)
DELETE FROM `follow_user`;
/*!40000 ALTER TABLE `follow_user` DISABLE KEYS */;
INSERT INTO `follow_user` (`id`, `user_prim_id`, `user_sec_id`, `register_date`, `statut_id`) VALUES
	(1, 9, 6, '2019-03-31 01:30:23', 4),
	(2, 14, 6, '2019-03-31 01:30:28', 4);
/*!40000 ALTER TABLE `follow_user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
