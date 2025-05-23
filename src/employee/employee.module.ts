import { Module } from "@nestjs/common";
import { EmployeeResolver } from "./employee.resolver";
import { EmployeeService } from "./employee.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from './entities/employee.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    providers: [EmployeeResolver, EmployeeService],
    exports: [EmployeeService],   
  })
  export class EmployeeModule {}