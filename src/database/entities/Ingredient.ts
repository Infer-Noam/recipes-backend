import { Entity, OneToMany, JoinColumn, Column } from "typeorm";
import { AuditEntity } from "./util/AuditEntity";
import { RecipeIngredient } from "./RecipeIngredient";

@Entity("ingredient")
export class Ingredient extends AuditEntity {
  @Column({ type: "varchar", length: 20 })
  name: string;

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.ingredient
  )
  recipes_ingredients: RecipeIngredient[];
}
