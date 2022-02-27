/*
  Warnings:

  - You are about to drop the `getdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `getdata` DROP FOREIGN KEY `GetData_infoId_fkey`;

-- DropForeignKey
ALTER TABLE `getdata` DROP FOREIGN KEY `GetData_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `getdata` DROP FOREIGN KEY `GetData_userId_fkey`;

-- DropTable
DROP TABLE `getdata`;

-- CreateTable
CREATE TABLE `data_list` (
    `id` VARCHAR(191) NOT NULL,
    `infoId` VARCHAR(191) NULL,
    `taskId` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data_list` ADD CONSTRAINT `data_list_infoId_fkey` FOREIGN KEY (`infoId`) REFERENCES `info`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data_list` ADD CONSTRAINT `data_list_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data_list` ADD CONSTRAINT `data_list_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
