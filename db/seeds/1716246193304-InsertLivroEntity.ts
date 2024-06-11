import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertAutorEntity1716246193304 implements MigrationInterface {
    name = 'InsertAutorEntity1716246193304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO livros 
            (id, titulo, subtitulo, ano, editora, isbn, logo_url, num_paginas, preco) 
            VALUES 
            (
                '8d25cb16-be51-40eb-a2c2-90b93df0302c',
                'JavaScript',
                'The Good Parts',
                '2008',
                'OReilly',
                '0596517742',
                'https://m.media-amazon.com/images/I/7185IMvz88L._SL1500_.jpg',
                170,
                100
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM autores WHERE id = '8d25cb16-be51-40eb-a2c2-90b93df0302c'
        `);
    }

}
