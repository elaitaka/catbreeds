import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  breed: string;

  @Column()
  name: string;
}
