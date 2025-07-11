import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
} from "typeorm";
import { BaseEntity } from "./util/BaseEntity";

@Entity("recipe_ingredient")
export class RecipeIngredient extends BaseEntity {
  @Column({ type: "uuid" })
  recipe_uuid: string;

  @Column({ type: "uuid" })
  ingredient_uuid: string;

  @PrimaryColumn({ type: "text", unique: true })
  uuid: string;

  // Add many to one 
  // For ingredient and entity
  // Also give the recipe ingereients prop to recipe
  // While not using the other prop 
  @BeforeInsert()
  generateCompositeUUID() {
    this.uuid = `${this.recipe_uuid}:${this.ingredient_uuid}`;
  }
}
