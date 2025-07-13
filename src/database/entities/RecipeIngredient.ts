import { Entity, Column, ManyToOne, JoinColumn, Unique } from "typeorm";
import { AuditEntity } from "./util/AuditEntity";
import { Recipe } from "./Recipe";
import { Ingredient } from "./Ingredient";
import { MeasurementUnits } from "../../common/enums/measurement-units.enum";

@Entity()
@Unique("UQ_recipe_ingredient", ["recipeUuid", "ingredientUuid"])
export class RecipeIngredient extends AuditEntity {
  // Kept for the unique constraint
  @Column({ type: "uuid" })
  recipeUuid: string;

  // Kept for the unique constraint
  @Column({ type: "uuid" })
  ingredientUuid: string;

  @Column({ type: "integer" })
  amount: number;

  @Column({ type: "enum", enum: MeasurementUnits })
  measurementUnit: MeasurementUnits;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  @JoinColumn({ name: "recipe_uuid" })
  recipe: Recipe;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipesIngredients)
  @JoinColumn({ name: "ingredient_uuid" })
  ingredient: Ingredient;
}
