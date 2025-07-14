import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
  OneToMany,
  Unique,
} from "typeorm";
import { AuditEntity } from "./util/Audit.entity";
import { Chef } from "./chef.entity";
import { RecipeIngredient } from "./recipe-ingredient.entity";

@Entity()
@Unique("UQ_chef_recipe", ["chefUuid", "name"]) // Ensures chef cannot 2 identical recipes
export class Recipe extends AuditEntity {
  // Kept for the unique constraint
  @Column({ type: "uuid" })
  chefUuid: string;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column({ type: "text", array: true })
  steps: string[];

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
