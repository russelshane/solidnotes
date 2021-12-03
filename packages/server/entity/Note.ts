import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'notes' })
export class Note extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  text: string;
}
