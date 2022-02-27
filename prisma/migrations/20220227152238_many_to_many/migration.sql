/*
  Warnings:

  - You are about to drop the column `task_id` on the `info` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `info` DROP FOREIGN KEY `info_task_id_fkey`;

-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `task_user_id_fkey`;

-- AlterTable
ALTER TABLE `info` DROP COLUMN `task_id`;

-- AlterTable
ALTER TABLE `task` DROP COLUMN `user_id`;

-- CreateTable
CREATE TABLE `GetData` (
    `id` VARCHAR(191) NOT NULL,
    `infoId` VARCHAR(191) NULL,
    `taskId` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GetData` ADD CONSTRAINT `GetData_infoId_fkey` FOREIGN KEY (`infoId`) REFERENCES `info`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GetData` ADD CONSTRAINT `GetData_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GetData` ADD CONSTRAINT `GetData_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
