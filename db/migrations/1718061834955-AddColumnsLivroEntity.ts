import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnsLivroEntity1718061834955 implements MigrationInterface {
    name = 'AddColumnsLivroEntity1718061834955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "titulo" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "subtitulo" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "ano" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "isbn" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "logo_url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "num_paginas" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "preco" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "editora" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "editora"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "num_paginas"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "logo_url"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "isbn"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "ano"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "subtitulo"`);
        await queryRunner.query(`ALTER TABLE "livros" DROP COLUMN "titulo"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD "nome" character varying(100) NOT NULL`);
    }

}
