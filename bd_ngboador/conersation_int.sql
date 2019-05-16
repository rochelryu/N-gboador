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

-- Listage de la structure de la table bd_ngboador. conersation_int
CREATE TABLE IF NOT EXISTS `conersation_int` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_text` text,
  `files` varchar(255) DEFAULT NULL,
  `conversation_parent_id` int(11) NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `conversation_parent_id` (`conversation_parent_id`),
  KEY `student_id` (`user_id`),
  CONSTRAINT `FK_rs_conersation_int_rs_conversation_parent` FOREIGN KEY (`conversation_parent_id`) REFERENCES `conversation_parent` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_rs_conersation_int_rs_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='il s''agit du contenu de discussion des students....';

-- Listage des données de la table bd_ngboador.conersation_int : ~0 rows (environ)
DELETE FROM `conersation_int`;
/*!40000 ALTER TABLE `conersation_int` DISABLE KEYS */;
/*!40000 ALTER TABLE `conersation_int` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
