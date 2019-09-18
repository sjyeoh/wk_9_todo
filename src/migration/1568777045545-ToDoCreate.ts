import {MigrationInterface, QueryRunner} from "typeorm";

export class ToDoCreate1568777045545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "to_do" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "completed" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "completed_ad" TIMESTAMP NOT NULL, "notes" character varying, "category" character varying NOT NULL, CONSTRAINT "PK_19d14b861427e18d619639c8f2b" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "to_do"`, undefined);
    }

}
