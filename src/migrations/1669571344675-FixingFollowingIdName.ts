import { MigrationInterface, QueryRunner } from "typeorm";

export class FixingFollowingIdName1669571344675 implements MigrationInterface {
    name = 'FixingFollowingIdName1669571344675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follows" RENAME COLUMN "follwingId" TO "followingId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follows" RENAME COLUMN "followingId" TO "follwingId"`);
    }

}
