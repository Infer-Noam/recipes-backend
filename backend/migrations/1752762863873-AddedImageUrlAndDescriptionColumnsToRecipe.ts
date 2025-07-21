import { MigrationInterface, QueryRunner } from "typeorm";

const dbSchema = process.env.DB_SCHEMA;

export class AddedImageUrlAndDescriptionColumnsToRecipe1752762863873
  implements MigrationInterface
{
  name = "AddedImageUrlAndDescriptionColumnsToRecipe1752762863873";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${dbSchema}."recipe" ADD "description" text NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE ${dbSchema}."recipe" ADD "image_url" text NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${dbSchema}."recipe" DROP COLUMN "image_url"`
    );
    await queryRunner.query(
      `ALTER TABLE ${dbSchema}."recipe" DROP COLUMN "description"`
    );
  }
}
