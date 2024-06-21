/*
  Warnings:

  - You are about to drop the column `nome` on the `alunos` table. All the data in the column will be lost.
  - Added the required column `email` to the `alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` DROP COLUMN `nome`,
    ADD COLUMN `email` VARCHAR(100) NOT NULL;
