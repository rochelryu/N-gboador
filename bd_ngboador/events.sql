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

-- Listage de la structure de la table bd_ngboador. events
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `content_text` text CHARACTER SET utf8,
  `Mois` date DEFAULT NULL,
  `Heur` time DEFAULT NULL,
  `file1` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `file2` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `file3` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `tags` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `lieu` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `user_id` int(11) unsigned DEFAULT NULL,
  `team_id` int(11) unsigned DEFAULT NULL,
  `register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statuts_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `FK_events_groupe` FOREIGN KEY (`team_id`) REFERENCES `groupe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Listage des données de la table bd_ngboador.events : ~3 rows (environ)
DELETE FROM `events`;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` (`id`, `title`, `content_text`, `Mois`, `Heur`, `file1`, `file2`, `file3`, `tags`, `lieu`, `user_id`, `team_id`, `register_date`, `statuts_id`) VALUES
	(1, 'Beta de ouf', 'the read operation, then the err object will contain the corresponding error, else data will', '2019-04-22', '21:10:05', 'baby.jpg', 'aides.jpg', 'aide.jpeg', 'Ryu', NULL, 6, 2, '2019-04-22 21:10:13', 2),
	(2, 'TCheck de ourf de===', '// Download the helper library from https://www.twilio.com/docs/node/install <br/>\r\n// Your Account Sid and Auth Token from twilio.com/console<br/>\r\nconst accountSid = \'AC2230703c07cca27f0a297f007a613d2f\';<br/>\r\nconst authToken = \'f4134e50019a98847403da72a7ef6572\';<br/>\r\nconst client = require(\'twilio\')(accountSid, authToken);<br/>\r\n<br/>\r\nclient.messages<br/>\r\n      .create({<br/>\r\n         body: \'McAvoy or Stewart? These timelines can get so confusing.\',<br/>\r\n         from: \'+15017122661\',<br/>\r\n         statusCallback: \'http://postb.in/1234abcd\',<br/>\r\n         to: \'+15558675310\'<br/>\r\n       })<br/>\r\n      .then(message => console.log(message.sid))<br/>\r\n      .done();<br/>\r\n<br/>\r\n<br/>\r\nNUmber: (385) 217-3081 :::: +13852173081<br/>\r\nACOUNT SSID : AC2230703c07cca27f0a297f007a613d2f;<br/>\r\nAUTH TOKEN : f4134e50019a98847403da72a7ef6572;<br/>', '2019-03-22', '11:10:27', NULL, NULL, NULL, NULL, NULL, 14, 2, '2019-04-22 22:45:19', 2),
	(3, 'Hello my guy for label', 'LECOLE/: <br/>\r\n\r\n/*L’école NaN est une école de programmation informatique gratuite, atypique et open-source. Pas de cours, pas de professeurs, ce sont les étudiants eux-mêmes qui sont responsables de leur apprentissage et de celui de leurs camarades. Pour progresser, les étudiants devront s’appuyer sur la force du groupe, savoir partager les informations et être à la fois formateur et apprenant. Chacun est responsable de sa réussite et de celle de ses camarades.<br/>\r\n\r\nL’école fournit le cadre, le matériel informatique et les ressources pédagogiques pour guider les étudiants (vidéos tutoriels, exercices et idées de projets).<br/>\r\n\r\nLe programme <br/>\r\nDans le but d’apprendre les notions clés de la programmation, les ressources pédagogiques sont dans un premier temps basées sur le langage JavaScript. Bien sûr, nous ne restreindrons pas les étudiants à l’utilisation d’un seul langage.<br/>\r\n\r\nDurée du cursus <br/>\r\nChaque étudiant progressant à son propre rythme, l’école l’accompagnera le temps qu’il lui sera nécessaire. Cependant c’est un point qu’il nous reste à clarifier et sur lequel nous travaillons encore.*/<br/>\r\n\r\n\r\n\r\nCOMMENT ENTRER A NAN/:<br/>\r\n/*Conditions d’accès <br/>\r\nL’école est ouverte à tous les jeunes de 18 à 25 ans sans pré-requis ou connaissances en programmation nécessaires.<br/>\r\n\r\nÊtre admissible \r\nL’admission à l’école se déroule en deux étapes. La 1ère étape est une épreuve en ligne d’environ 2h sous forme de jeu de logique. Si cette épreuve est réussie, tu passes à la 2ème étape. Il s’agit d’une semaine d’immersion à l’école NaN par groupe de 50 candidats. Tous les jours pendant une semaine, tu auras des exercices et des projets informatiques à faire en collaboration avec les autres candidats à NaN. La semaine d’immersion part de zéro, aborde les notions de manière progressive mais à un rythme très soutenu, elle ne demande donc aucune connaissance préalable mais simplement une forte motivation. Il est tout de même conseillé d’avoir des notions d’anglais et bien sûr, de savoir se servir d’une souris et d’un clavier. Cette semaine d’immersion nous permet d’identifier les personnes les plus motivées et de considérer l’aptitude des futurs étudiants pour le développement informatique. Cette semaine d’immersion va décider de ton admission définitive à l’école. Finalement, nous sélectionnerons 50 étudiants pour rejoindre officiellement le cursus de NaN en se basant sur des critères qu’il nous reste encore à définir. Démontrer d’une forte motivation, d’un esprit collaboratif, d’une bonne rigueur et organisation et d’une bonne progression sur les journées d’exercices durant la semaine d’immersion seront toutefois des éléments qui favoriseront ton admission.<br/>\r\n\r\nComment s’inscrire ? \r\nLorsque la première rentrée officielle sera annoncée, il sera possible de s’inscrire sur nan.ci. En attendant, vous pouvez renseigner votre email sur le site nan.ci en cliquant sur le bouton “Ça m’intéresse” et cocher la case “Je veux recevoir des emails pour suivre le projet”.\r\n\r\nQuand sera la prochaine rentrée ? <br/>\r\nFévrier 2018.<br/>\r\n\r\n*/\r\n\r\n<br/><br/>\r\n\r\nZone Cocody Angré 8ème tranche (proche du nouveau CHU - non loin de la pharmacie Analya) --> Google Map<br/>', '2019-05-22', '23:10:48', 'Black_M_feat_Soprano_-_Fre_rot_-1.jpg', 'benevoles.jpg', NULL, NULL, NULL, 9, 1, '2019-04-22 22:45:31', 2);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
