import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertLivroAutorRelation1716246193305 implements MigrationInterface {
    name = 'InsertLivroAutorRelation1716246193305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO livros_autores
            (livro_id, autor_id) 
            VALUES 
            (
                '8d25cb16-be51-40eb-a2c2-90b93df0302c',
                '5751520f-04b6-4777-a70f-6835f6744808'
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM livros_autores WHERE livro_id = '8d25cb16-be51-40eb-a2c2-90b93df0302c'
        `);
    }

}
