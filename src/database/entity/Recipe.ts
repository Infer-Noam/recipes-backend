import { Entity, ManyToOne, JoinColumn, Column } from "typeorm";
import { BaseEntity } from "./util/BaseEntity";
import { Chef } from "./Chef";

// Add relations !!!
@Entity("recipe")
export class Recipe extends BaseEntity {
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
}
