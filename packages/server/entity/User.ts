import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryColumn()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  avatar: string;
}
