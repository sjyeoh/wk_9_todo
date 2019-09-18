import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateDateFormat1568821754779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" DROP COLUMN "created_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" ADD "created_at" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" DROP COLUMN "completed_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" ADD "completed_at" character varying`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" DROP COLUMN "completed_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" ADD "completed_at" TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" DROP COLUMN "created_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" ADD "created_at" TIMESTAMP NOT NULL`, undefined);
    }

}
