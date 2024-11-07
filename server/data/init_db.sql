
-- drop table first (clear them if they already exist)
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;


CREATE TABLE `items`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NULL,
    `category_id` INT UNSIGNED NOT NULL,
    `is_available` TINYINT DEFAULT 0,
    `user_id` INT UNSIGNED NOT NULL,
    `type` VARCHAR(255) NULL
);
CREATE TABLE `categories`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NULL,
);
ALTER TABLE
    `items` ADD CONSTRAINT `items_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `items` ADD CONSTRAINT `items_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `categories`(`id`);

/* hard code categories */
INSERT INTO `mvp_db`.`categories` (`name`) VALUES ('Cleaning');
INSERT INTO `mvp_db`.`categories` (`name`) VALUES ('DIY');
INSERT INTO `mvp_db`.`categories` (`name`) VALUES ('Gardening');
INSERT INTO `mvp_db`.`categories` (`name`) VALUES ('Outdoors');
INSERT INTO `mvp_db`.`categories` (`name`) VALUES ('Cooking');
INSERT INTO `mvp_db`.`categories` (`name`) VALUES ('Audiovisual');
INSERT INTO `mvp_db`.`categories` (`name`) VALUES ('Games & Hobbies');

/* hard code users */
INSERT INTO `mvp_db`.`users` (`username`) VALUES ('Neighbour001');

/* hard code item */
INSERT INTO `mvp_db`.`items` (`title`, `description`, `image`, `category_id`, `user_id`, `type`) VALUES ('Drill (cordless)\nDrill (cordless)\nDrill (cordless)', 'I have a Bosch GSB 18V-EC drill available to borrow, please recharge the battery before returning it.', 'https://libraryofthings-images.s3.eu-west-2.amazonaws.com/things/drill-cordless-hands-1080x720.jpg', '2', '1', 'lend');
