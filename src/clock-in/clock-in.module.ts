import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClockInsService } from './clock-ins.service';
import { ClockInsController } from './clock-ins.controller';
import { ClockIn } from './clock-in.entity';
import { Employee } from '../employee/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClockIn, Employee])],
  providers: [ClockInsService],
  controllers: [ClockInsController],
})
export class ClockInModule {}
