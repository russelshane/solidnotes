import { Entity, PrimaryColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity({ name: 'notes' })
export class Note extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  @ManyToOne(() => User, (user) => user.notes)
  author_id: string;
}
