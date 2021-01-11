DROP DATABASE IF EXISTS peer_2_paws;
CREATE DATABASE peer_2_paws;
USE peer_2_paws;
DROP TABLE IF EXISTS PetType;
CREATE TABLE PetType (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  TypeName TEXT NOT NULL
);
USE peer_2_paws;
DROP TABLE IF EXISTS OwnerInfo;
CREATE TABLE OwnerInfo (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  OwnerName TEXT NOT NULL,
  OwnerEmail TEXT NOT NULL
);
USE peer_2_paws;
DROP TABLE IF EXISTS AnimalInfo;
CREATE TABLE AnimalInfo (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  AnimalName TEXT NOT NULL,
  OwnerID INT NOT NULL,
  TypeID INT NOT NULL,
  Age INT NOT NULL,
  About TEXT NOT NULL,
  CONSTRAINT fk_owner_id FOREIGN KEY (OwnerID) REFERENCES OwnerInfo(ID),
  CONSTRAINT fk_type_id FOREIGN KEY (TypeID) REFERENCES PetType(ID)
);