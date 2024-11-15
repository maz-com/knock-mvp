
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
    `is_available` TINYINT DEFAULT 1,
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
    `name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) DEFAULT "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png",
    `email` VARCHAR(255) NOT NULL
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
INSERT INTO `mvp_db`.`users` (`username`, `name`, `image`, `email`) VALUES ('neighbour001', 'Mara', 'https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png', 'user@email.com');
INSERT INTO `mvp_db`.`users` (`username`, `name`, `image`, `email`) VALUES ('neighbour002', 'Elliot', 'https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png', 'user@email.com');
INSERT INTO `mvp_db`.`users` (`username`, `name`, `image`, `email`) VALUES ('neighbour003', 'Alex', 'https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png', 'user@email.com');

/* hard code items */
INSERT INTO `mvp_db`.`items` (`title`, `description`, `image`, `category_id`, `user_id`, `type`) VALUES ('Drill (cordless)\n', 'I have a Bosch GSB 18V-EC drill available to borrow, please recharge the battery before returning it.', 'https://libraryofthings-images.s3.eu-west-2.amazonaws.com/things/drill-cordless-hands-1080x720.jpg', '2', '1', 'lend');
INSERT INTO `mvp_db`.`items` (`title`, `description`, `image`, `category_id`, `is_available`, `user_id`, `type`) VALUES ('Projector', 'I have an Optoma DX349 available to borrow.', 'https://libraryofthings-images.s3.eu-west-2.amazonaws.com/things/89eea43c0d834a3c962b9359a8012c10-projector-2048w.png', '6', '0', '2', 'lend');
INSERT INTO `mvp_db`.`items` (`title`, `description`, `image`, `category_id`, `is_available`, `user_id`, `type`) VALUES ('Lawnmower (cordless)\n', 'I have a Stihl RMA 339 battery powered lawnmower available to borrow', 'https://libraryofthings-images.s3.eu-west-2.amazonaws.com/things/Stihl_Lawnmower_RMA-339_1080x720.jpg', '3', '1', '1', 'lend');
INSERT INTO `mvp_db`.`items` (`title`, `description`, `image`, `category_id`, `is_available`, `user_id`, `type`) VALUES ('Tent (3 Person)', 'I have a North Face 3 person tent available to borrow.', 'https://libraryofthings-images.s3.eu-west-2.amazonaws.com/things/5e856ac4f6514a70a783c01ae67f4497-3-person-tent-2048w.png', '4', '1', '1', 'lend');
INSERT INTO `mvp_db`.`items` (`title`, `description`, `image`, `category_id`, `is_available`, `user_id`, `type`) VALUES ('Sewing Machine\n', 'I have a John Lewis JL 110 sewing machine available to borrow, with needle sizes 10, 12, 14 and 16.', 'https://libraryofthings-images.s3.eu-west-2.amazonaws.com/things/598cec7182554d2697e5155236d6e9f5-sewing-machine-2048w.png', '7', '1', '3', 'lend');
INSERT INTO `mvp_db`.`items` (`title`, `description`, `image`, `category_id`, `is_available`, `user_id`, `type`) VALUES ('Carpet Cleaner\n', 'I have a Kärcher Puzzi 10/1 carpet cleaner available to borrow. You will need to buy cleaning tablets to use it.', 'https://libraryofthings-images.s3.eu-west-2.amazonaws.com/things/carpet-cleaner-hands-1080x720.jpg', '1', '0', '1', 'lend');

