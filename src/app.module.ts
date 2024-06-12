import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { ClockInModule } from './clock-in/clock-in.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'seu_banco_de_dados',
      autoLoadEntities: true,
      synchronize: true,
    }),    
    EmployeeModule,
    ClockInModule,
  ],
})
export class AppModule {}
