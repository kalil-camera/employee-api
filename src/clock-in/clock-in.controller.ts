import { Controller, Get, Post, Param } from '@nestjs/common';
import { ClockInService } from './clock-in.service';
import { ClockIn } from './clock-in.entity';

@Controller('clock-ins')
export class ClockInController {
  constructor(private readonly clockInsService: ClockInService) {}

  @Get()
  findAll(): Promise<ClockIn[]> {
    return this.clockInsService.findAll();
  }

  @Get('employee/:employeeId')
  findByEmployee(@Param('employeeId') employeeId: number): Promise<ClockIn[]> {
    return this.clockInsService.findByEmployee(employeeId);
  }

  @Post(':employeeId')
  clockIn(@Param('employeeId') employeeId: number): Promise<ClockIn> {
    return this.clockInsService.clockIn(employeeId);
  }
}
