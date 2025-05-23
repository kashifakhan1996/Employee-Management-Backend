import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  department: string;

  @Column()
  location: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  status: string;

  @Column()
  dateHired: string;

  @Column()
  manager: string;

  @Column()
  notes: string;
}
