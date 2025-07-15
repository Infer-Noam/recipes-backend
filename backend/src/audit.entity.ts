import {
  Entity,
  CreateDateColumn,
  DeleteDateColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
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
