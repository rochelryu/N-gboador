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

-- Listage de la structure de la table bd_ngboador. user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `pseudo` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `profil` varchar(255) DEFAULT NULL,
  `biblio` varchar(255) DEFAULT NULL,
  `birth_day` datetime NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `couverture` varchar(255) DEFAULT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lieu` varchar(255) NOT NULL,
  `login_date` datetime DEFAULT NULL,
  `range_id` int(11) unsigned NOT NULL,
  `emailcrypt` text NOT NULL,
  `keyconfirm` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `range_id` (`range_id`),
  CONSTRAINT `FK_user_role_user` FOREIGN KEY (`range_id`) REFERENCES `role_user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='la table utilisateur du reseaux social\r\nla photo de profil ainsi que la couverture ont des valeur par defaut (gravatar) selon le sexe de l''etudiant.\r\nvaut mieux choisir le gravatar depuis le php car mysql ne poura pas faire la diff entre sexe.';

-- Listage des données de la table bd_ngboador.user : ~9 rows (environ)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `name`, `firstname`, `pseudo`, `email`, `password`, `contact`, `profession`, `profil`, `biblio`, `birth_day`, `sexe`, `couverture`, `register_date`, `lieu`, `login_date`, `range_id`, `emailcrypt`, `keyconfirm`, `age`) VALUES
	(6, 'cesar', 'Ryu Ryota', NULL, 'cesar@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userBoy18.png', NULL, '1993-06-19 12:58:39', 'Homme', NULL, '2019-01-08 12:58:38', 'Côte D\'Ivoire, Abdjan', '2019-05-16 09:22:10', 1, '58d41e38a431af44d40153eb38069660d9a69b13c3c3d5e65790371815813308', '484505719493985', 26),
	(7, 'mezan', 'Fabienne', NULL, 'mezan@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userGirl05.jpg', NULL, '1993-06-17 13:12:03', 'Femme', NULL, '2019-01-08 13:12:03', 'Mali', '2019-03-26 20:50:59', 1, '82dfbf9c15e07121c5faf52641faf9198e05632977db2b7fe6b2a80da0b29629', '912132416137660', 26),
	(8, 'Ze', 'Zean', NULL, 'zea@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userChild01.jpg', NULL, '2000-03-18 14:49:55', 'Homme', NULL, '2019-01-18 14:49:55', 'Côte D\'Ivoire, Abdjan', '2019-01-18 22:01:36', 1, 'e889b8398348d7c8dad7dedca369b74bafc2629a80fd5bda730f13eca155b031', '814632203935165', 19),
	(9, 'Fred', 'Frederick', NULL, 'de@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userGirl28.png', NULL, '2007-03-19 14:52:37', 'Femme', NULL, '2019-01-18 14:52:36', 'Côte D\'Ivoire, Abdjan', '2019-01-18 14:52:36', 1, '25a034568eb90520728b208cf5247e576087423d8995483b493981066e356aa4', '556553313856923', 12),
	(10, 'Patrick', 'Venon', NULL, 'ps@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userBoy18.png', NULL, '1996-10-01 14:55:46', 'Homme', NULL, '2019-01-18 14:55:45', 'Côte D\'Ivoire, Abdjan', '2019-01-18 14:55:45', 1, '2c5631fd02baa45c278c8765f175a295418e0aea43f740c3b61409ad392479d9', '760381319639541', 23),
	(11, 'Check', 'Cheky', NULL, 'ch@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userGirl05.jpg', NULL, '1988-04-09 15:00:41', 'Femme', NULL, '2019-01-18 15:00:41', 'Côte D\'Ivoire, Abdjan', '2019-01-18 15:00:41', 1, 'b100388afdfe241d7b1395ae5adaef08621c38ab47d9a6202a2153193ded0754', '857170692762028', 31),
	(12, 'tet', 'aze', NULL, 'az@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userGirl05.jpg', NULL, '1985-10-28 15:06:15', 'Femme', NULL, '2019-01-18 15:06:15', 'Côte D\'Ivoire, Abdjan', '2019-01-18 15:06:15', 1, '6be2faafe47483e375fa1ae5a7d1106c72c08873680b9eb02c058fcdd2785bf1', '872710092624333', 34),
	(13, 'MElec', 'Roger', NULL, 'ro@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userBoy18.png', NULL, '1992-04-22 15:11:30', 'Homme', NULL, '2019-01-18 15:11:29', 'Côte D\'Ivoire, Abdjan', '2019-01-18 15:11:29', 1, '93530414f3b0a5ad84e6e8bc99b05d453a214cc1e4ee84b46cf0f421178d0676', '926715863203624', 27),
	(14, 'MECH', 'DES', NULL, 'as@gmail.com', 'cc7b555a56ef4e4dea39c6f376474aa5bcb24232590e85d8db1014a42da78800', NULL, NULL, 'userBoy18.png', NULL, '1988-04-21 15:13:49', 'Homme', NULL, '2019-01-18 15:13:48', 'Côte D\'Ivoire, Abdjan', '2019-03-26 12:42:15', 1, 'fbda122c9fc8e5726aab54fe6656019134b56a82645ff65853f006d4df938061', '668709871065589', 31);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
