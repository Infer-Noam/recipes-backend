import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @CreateDateColumn()
  create_date: Date;

  @DeleteDateColumn()
  delete_date: Date;
}
