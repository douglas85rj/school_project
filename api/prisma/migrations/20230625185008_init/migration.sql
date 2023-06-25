/*
  Warnings:

  - The primary key for the `alunos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cursos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `inscricao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `refresh_tokens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `descricao` to the `cursos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "inscricao" DROP CONSTRAINT "inscricao_alunoId_fkey";

-- DropForeignKey
ALTER TABLE "inscricao" DROP CONSTRAINT "inscricao_cursoId_fkey";

-- DropForeignKey
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_alunoId_fkey";

-- AlterTable
ALTER TABLE "alunos" DROP CONSTRAINT "alunos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "alunos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "alunos_id_seq";

-- AlterTable
ALTER TABLE "cursos" DROP CONSTRAINT "cursos_pkey",
ADD COLUMN     "descricao" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "cursos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cursos_id_seq";

-- AlterTable
ALTER TABLE "inscricao" DROP CONSTRAINT "inscricao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "alunoId" SET DATA TYPE TEXT,
ALTER COLUMN "cursoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "inscricao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "inscricao_id_seq";

-- AlterTable
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "alunoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "refresh_tokens_id_seq";

-- AddForeignKey
ALTER TABLE "inscricao" ADD CONSTRAINT "inscricao_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricao" ADD CONSTRAINT "inscricao_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
