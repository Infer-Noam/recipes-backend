import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  BaseEntity
} from "typeorm";

@Entity()
export class AuditEntity extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @CreateDateColumn()
  create_date: Date;

  @DeleteDateColumn()
  delete_date: Date;
}
