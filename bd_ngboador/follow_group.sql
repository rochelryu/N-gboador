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

-- Listage de la structure de la table bd_ngboador. follow_group
CREATE TABLE IF NOT EXISTS `follow_group` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `motif` text,
  `role_group_id` int(11) unsigned NOT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statut_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `team_id` (`group_id`),
  KEY `student_id` (`user_id`),
  KEY `role_group_id` (`role_group_id`),
  KEY `statut_id` (`statut_id`),
  CONSTRAINT `FK_rs_naner_team_role_group` FOREIGN KEY (`role_group_id`) REFERENCES `role_group` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_naner_team_rs_student` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_naner_team_rs_team` FOREIGN KEY (`group_id`) REFERENCES `groupe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_naner_team_statut` FOREIGN KEY (`statut_id`) REFERENCES `statut` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='c''est la table de relation entre un student qui veut entrer dans un groupe en envoyant une demande et un motif\r\ndans cette table on trouve une colone qui permet de pointer le(s) student(s) qui sont admin du groupe.';

-- Listage des données de la table bd_ngboador.follow_group : ~10 rows (environ)
DELETE FROM `follow_group`;
/*!40000 ALTER TABLE `follow_group` DISABLE KEYS */;
INSERT INTO `follow_group` (`id`, `group_id`, `user_id`, `motif`, `role_group_id`, `register_date`, `statut_id`) VALUES
	(1, 2, 10, NULL, 1, '2019-02-14 16:58:19', 4),
	(2, 1, 6, NULL, 1, '2019-02-16 00:28:00', 4),
	(3, 3, 6, NULL, 1, '2019-02-16 00:33:06', 4),
	(4, 2, 11, 'eeklfnllenfkdcn lknfkl nzflkezn lzfn lkfen lzenf lzn l fkmqnmfn mlefnmezkn mf', 2, '2019-02-17 23:48:20', 4),
	(5, 1, 7, 'ltel,mafmlzen mlfkn mlzfn mln mlgn lkgn lkzng ', 2, '2019-02-17 23:52:30', 4),
	(6, 1, 14, 'Bonjour je suis interressé par ce groupe', 2, '2019-02-18 11:57:05', 4),
	(7, 3, 12, 'Bonjour', 2, '2019-02-18 11:58:03', 4),
	(8, 3, 10, 'Participant', 2, '2019-02-18 11:59:22', 4),
	(9, 6, 6, 'Ce groupe est génial', 2, '2019-02-19 21:17:43', 4),
	(10, 3, 11, 'interessant les postes', 2, '2019-02-19 21:20:37', 4);
/*!40000 ALTER TABLE `follow_group` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
