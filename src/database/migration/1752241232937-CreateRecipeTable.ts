import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

// Update this
const table = new Table({
  name: "recipe",
  columns: [
    {
      name: "uuid",
      type: "uuid",
      isPrimary: true,
      generationStrategy: "uuid",
      default: "uuid_generate_v4()",
    },
    {
      name: "create_date",
      type: "date",
      default: "CURRENT_DATE",
    },
    {
      name: "delete_date",
      type: "date",
      isNullable: true,
    },
    {
      name: "name",
      type: "varchar",
      length: "20",
    },
    {
      name: "steps",
      type: "text",
      isArray: true,
    },
    {
      name: "chef_uuid",
      type: "uuid",
    },
  ],
  foreignKeys: [
    new TableForeignKey({
      columnNames: ["chef_uuid"],
      referencedTableName: "chef",
      referencedColumnNames: ["uuid"],
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }),
  ],
});
export class CreateRecipeTable1752241232937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table);
  }
}
