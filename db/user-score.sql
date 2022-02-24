DROP DATABASE IF EXISTS highscore_db;
CREATE database highscore_db;

USE highscore_db;

CREATE TABLE user_score (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(45) NULL,
  score INT NULL,
  PRIMARY KEY (id)
);

-- test 
INSERT INTO user_score (user, score)
VALUES ("Diamond", 90);