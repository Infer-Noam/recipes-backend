import { Entity, OneToMany, Column } from "typeorm";
import { BaseEntity } from "./util/BaseEntity";
import { Recipe } from "./Recipe";

// Add relations !!!
@Entity("chef")
export class Chef extends BaseEntity {
  @Column({ type: "varchar", length: 20 })
  first_name: string;

  @Column({ type: "varchar", length: 20 })
  last_name: string;

  @Column({ type: "char", length: 10 })
  phone: string;

  @Column({ type: "text" })
  email: string;

  @OneToMany(() => Recipe, (Recipe) => Recipe.chef)
  recipes: Recipe[];
}
