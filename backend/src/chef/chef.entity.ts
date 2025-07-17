import { Entity, OneToMany, Column } from "typeorm";
import { Recipe } from "./../recipe/recipe.entity";
import { AuditEntity } from "../audit.entity";

@Entity()
export class Chef extends AuditEntity {
  @Column({ type: "varchar", length: 20 })
  firstName: string;

  @Column({ type: "varchar", length: 20 })
  lastName: string;

  @Column({ type: "char", length: 10, unique: true })
  phone: string;

  @Column({ type: "text", unique: true })
  email: string;

  @OneToMany(() => Recipe, (Recipe) => Recipe.chef, {
    cascade: true,
  })
  recipes: Recipe[];
}
