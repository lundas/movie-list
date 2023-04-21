-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'movies'
--
-- ---

DROP TABLE IF EXISTS `movies`;

CREATE TABLE `movies` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` MEDIUMTEXT NULL DEFAULT NULL,
  `rating` VARCHAR(5) NULL DEFAULT NULL,
  `release_year` YEAR NULL DEFAULT NULL,
  `runtime` INTEGER NULL DEFAULT NULL,
  `watched` TINYINT NULL DEFAULT 0,
  `image` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `movies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `movies` (`id`,`title`,`rating`,`release_year`,`runtime`,`watched`,`image`) VALUES
-- ('','','','','','','');