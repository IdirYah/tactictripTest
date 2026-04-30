CREATE DATABASE IF NOT EXISTS tactictip;
USE tactictip;
CREATE TABLE IF NOT EXISTS rateLimit(
email VARCHAR(40),
jour Date,
nbTokens INT DEFAULT 0,
PRIMARY KEY(email,jour));
