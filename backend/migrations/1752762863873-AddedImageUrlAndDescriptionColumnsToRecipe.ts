import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedImageUrlAndDescriptionColumnsToRecipe1752762863873
  implements MigrationInterface
{
  name = "AddedImageUrlAndDescriptionColumnsToRecipe1752762863873";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."recipe" ADD "description" text NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."recipe" ADD "image_url" text NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."recipe" DROP COLUMN "image_url"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."recipe" DROP COLUMN "description"`
    );
  }
}
