/*
  Warnings:

  - You are about to drop the column `info_Id` on the `task` table. All the data in the column will be lost.
  - Added the required column `task_id` to the `info` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `task_info_Id_fkey`;

-- AlterTable
ALTER TABLE `info` ADD COLUMN `task_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `task` DROP COLUMN `info_Id`;

-- AddForeignKey
ALTER TABLE `info` ADD CONSTRAINT `info_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
