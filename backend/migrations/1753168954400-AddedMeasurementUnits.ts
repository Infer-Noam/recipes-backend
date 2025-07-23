import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedMeasurementUnits1753168954400 implements MigrationInterface {
    name = 'AddedMeasurementUnits1753168954400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."recipe_ingredient_measurement_unit_enum" RENAME TO "recipe_ingredient_measurement_unit_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."recipe_ingredient_measurement_unit_enum" AS ENUM('kg', 'mg', 'g', 'lb', 'oz', 'l', 'ml', 'cup', 'piece', 'unit')`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ALTER COLUMN "measurement_unit" TYPE "public"."recipe_ingredient_measurement_unit_enum" USING "measurement_unit"::"text"::"public"."recipe_ingredient_measurement_unit_enum"`);
        await queryRunner.query(`DROP TYPE "public"."recipe_ingredient_measurement_unit_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."recipe_ingredient_measurement_unit_enum_old" AS ENUM('Kg', 'Mg')`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ALTER COLUMN "measurement_unit" TYPE "public"."recipe_ingredient_measurement_unit_enum_old" USING "measurement_unit"::"text"::"public"."recipe_ingredient_measurement_unit_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."recipe_ingredient_measurement_unit_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."recipe_ingredient_measurement_unit_enum_old" RENAME TO "recipe_ingredient_measurement_unit_enum"`);
    }

}
