-- DropForeignKey
ALTER TABLE `data_list` DROP FOREIGN KEY `data_list_infoId_fkey`;

-- DropForeignKey
ALTER TABLE `data_list` DROP FOREIGN KEY `data_list_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `data_list` DROP FOREIGN KEY `data_list_userId_fkey`;

-- AddForeignKey
ALTER TABLE `data_list` ADD CONSTRAINT `data_list_infoId_fkey` FOREIGN KEY (`infoId`) REFERENCES `info`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data_list` ADD CONSTRAINT `data_list_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data_list` ADD CONSTRAINT `data_list_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
