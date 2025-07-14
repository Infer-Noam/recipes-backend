import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class AuditEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @CreateDateColumn()
  createDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;
}
