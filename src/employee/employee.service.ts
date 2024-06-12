import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
      @InjectRepository(Employee)
      private employeeRepository: Repository<Employee>,
    ) {}
  
    findAll(): Promise<Employee[]> {
      return this.employeeRepository.find();
    }
  
    findOne(id: number): Promise<Employee> {
      return this.employeeRepository.findOne(id);
    }
  
    create(employee: Employee): Promise<Employee> {
      return this.employeeRepository.save(employee);
    }
  
    async update(id: number, employee: Employee): Promise<Employee> {
      await this.employeeRepository.update(id, employee);
      return this.findOne(id);
    }
  
    async remove(id: number): Promise<void> {
      await this.employeeRepository.delete(id);
    }
  }
  