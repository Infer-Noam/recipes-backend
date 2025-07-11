import { Entity, ManyToOne, JoinColumn, Column } from "typeorm";
import { BaseEntity } from "./util/BaseEntity";
import { Chef } from "./Chef";

// Add relations !!!
@Entity("ingredient")
export class Ingredient extends BaseEntity {
  @Column({ type: "varchar", length: 20 })
  name: string;

  @ManyToOne(() => Chef, (Chef) => Chef.recipes, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "chef_uuid",
  })
  chef: Chef;
}
