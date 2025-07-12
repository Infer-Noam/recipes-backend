import { Entity, ManyToOne, JoinColumn, Column, OneToMany } from "typeorm";
import { AuditEntity } from "./util/AuditEntity";
import { Chef } from "./Chef";
import { RecipeIngredient } from "./RecipeIngredient";

@Entity("recipe")
export class Recipe extends AuditEntity {
  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column({ type: "text", array: true })
  steps: string[];

  @Column({ type: "uuid" })
  chef_uuid: string;

  @ManyToOne(() => Chef, (Chef) => Chef.recipes, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "chef_uuid",
  })
  chef: Chef;

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipe,
    { cascade: true }
  )
  ingredients: RecipeIngredient[];
}
