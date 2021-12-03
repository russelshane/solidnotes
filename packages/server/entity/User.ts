import {
  Entity,
  PrimaryColumn,
  Column,
  JoinColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Note } from './Note';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @JoinColumn()
  @OneToMany(() => Note, (note) => note.author_id, { nullable: true })
  notes: Note[];
}
