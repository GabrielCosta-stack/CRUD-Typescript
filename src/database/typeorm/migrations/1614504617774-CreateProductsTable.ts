import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductsTable1614504617774 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal',
                    precision: 10,
                    scale: 2
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }
}
