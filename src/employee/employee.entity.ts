import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ClockIn } from '../clock-in/clock-in.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => ClockIn, clockIn => clockIn.employee)
  clockIns: ClockIn[];
}
