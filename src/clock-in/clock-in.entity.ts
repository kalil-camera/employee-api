import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity('clock_ins')
export class ClockIn {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, employee => employee.clockIns)
  employee: Employee;

  @CreateDateColumn()
  clockInTime: Date;
}
