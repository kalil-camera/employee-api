import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClockIn } from './clock-in.entity';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class ClockInService {
  constructor(
    @InjectRepository(ClockIn)
    private clockInsRepository: Repository<ClockIn>,
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<ClockIn[]> {
    return this.clockInsRepository.find({ relations: ['employee'] });
  }

  findByEmployee(employeeId: number): Promise<ClockIn[]> {
    return this.clockInsRepository.find({ where: { employee: { id: employeeId } }, relations: ['employee'] });
  }

  async clockIn(employeeId: number): Promise<ClockIn> {
    const employee = await this.employeesRepository.findOne(employeeId);
    if (!employee) {
      throw new Error('Employee not found');
    }

    const clockIn = this.clockInsRepository.create({ employee });
    return this.clockInsRepository.save(clockIn);
  }
}
