CREATE TABLE `__EFMigrationsHistory` 
( 
    `MigrationId` nvarchar(150) NOT NULL, 
    `ProductVersion` nvarchar(32) NOT NULL, 
     PRIMARY KEY (`MigrationId`) 
);

  IF EXISTS(SELECT 1 FROM information_schema.tables  WHERE table_name = "__EFMigrationsHistory" AND table_schema = DATABASE() ) 
BEGIN
CREATE TABLE `__EFMigrationsHistory` (
    `MigrationId` varchar(150) NOT NULL,
    `ProductVersion` varchar(32) NOT NULL,
    PRIMARY KEY (`MigrationId`)
);

END;



CREATE TABLE `ApplicationUser` (
    `Id` varchar(767) NOT NULL,
    `UserName` text NULL,
    `NormalizedUserName` text NULL,
    `Email` text NULL,
    `NormalizedEmail` text NULL,
    `EmailConfirmed` bit NOT NULL,
    `PasswordHash` text NULL,
    `SecurityStamp` text NULL,
    `ConcurrencyStamp` text NULL,
    `PhoneNumber` text NULL,
    `PhoneNumberConfirmed` bit NOT NULL,
    `TwoFactorEnabled` bit NOT NULL,
    `LockoutEnd` timestamp NULL,
    `LockoutEnabled` bit NOT NULL,
    `AccessFailedCount` int NOT NULL,
    `Login` text NULL,
    PRIMARY KEY (`Id`)
);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20190811220323_InitialCreate', '2.2.2-servicing-10034');

