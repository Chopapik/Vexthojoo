CREATE TABLE blockedUsernames (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usernames VARCHAR(255) NOT NULL
);

CREATE TABLE chatresponses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    response TEXT NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    avatarPath VARCHAR(255),
    whenRegist DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    whenLastLogged DATETIME
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(512),
    imagePath VARCHAR(255),
    whenUpload DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    whatDevice VARCHAR(55),
    user_id INT NOT NULL,
    isEdited TINYINT(1) DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
