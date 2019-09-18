import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateCreate1568780705092 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" RENAME COLUMN "completed_ad" TO "completed_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" ALTER COLUMN "completed_at" DROP NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" ALTER COLUMN "completed_at" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "to_do" RENAME COLUMN "completed_at" TO "completed_ad"`, undefined);
    }

}
