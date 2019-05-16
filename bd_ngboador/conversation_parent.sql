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

-- Listage de la structure de la table bd_ngboador. conversation_parent
CREATE TABLE IF NOT EXISTS `conversation_parent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `user_prim_id` int(11) unsigned NOT NULL,
  `user_sec_id` int(11) unsigned NOT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `student_prim_id` (`user_prim_id`),
  KEY `student_sec_id` (`user_sec_id`),
  CONSTRAINT `FK_rs_conversation_parent_rs_student` FOREIGN KEY (`user_prim_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_conversation_parent_rs_student_2` FOREIGN KEY (`user_sec_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='c''est la table de conversation parent entre deux utilisateurs. c''est à dire que chaque conversation est rangé par conversation entre ami.\r\nsi robbert et cédric discute, les 2 discutes dans la conversation robert & cédric (ce qui va permettre de lister les différente conversation par ordre de dernières causerie. mais on poura aussi épinglé des discussion afin de les avoir constament en haut.\r\non poura épinglé 2 conversations';

-- Listage des données de la table bd_ngboador.conversation_parent : ~0 rows (environ)
DELETE FROM `conversation_parent`;
/*!40000 ALTER TABLE `conversation_parent` DISABLE KEYS */;
/*!40000 ALTER TABLE `conversation_parent` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
