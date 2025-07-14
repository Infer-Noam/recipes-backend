import { Entity, OneToMany, Column } from "typeorm";
import { AuditEntity } from "./util/Audit.entity";
import { RecipeIngredient } from "./recipe-ingredient.entity";

@Entity()
export class Ingredient extends AuditEntity {
  @Column({ type: "varchar", length: 20, unique: true })
  name: string;

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.ingredient
  )
  recipesIngredients: RecipeIngredient[];
}
