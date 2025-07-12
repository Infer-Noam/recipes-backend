import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { BaseEntity } from "typeorm";
import { Recipe } from "./Recipe";
import { Ingredient } from "./Ingredient";
import { MeasurementUnits } from "../../common/enums/measurement-units.enum";

@Entity("recipe_ingredient")
export class RecipeIngredient extends BaseEntity {
  @PrimaryColumn({ type: "text", unique: true })
  uuid: string;

  @Column({ type: "uuid" })
  recipe_uuid: string;

  @Column({ type: "uuid" })
  ingredient_uuid: string;

  @Column({ type: "integer" })
  amount: number;

  @Column({ type: "enum", enum: MeasurementUnits })
  measurement_unit: string;

  @CreateDateColumn()
  create_date: Date;

  @DeleteDateColumn()
  delete_date: Date;

  @BeforeInsert()
  generateCompositeUUID() {
    this.uuid = `${this.recipe_uuid}:${this.ingredient_uuid}`;
  }

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  @JoinColumn({ name: "recipe_uuid" })
  recipe: Recipe;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipes_ingredients)
  @JoinColumn({ name: "ingredient_uuid" })
  ingredient: Ingredient;
}
