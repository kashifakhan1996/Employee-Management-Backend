import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { databaseConfig } from './config/database.config';
import { graphqlConfig } from './config/graphql.config';

@Module({
  imports: [
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRoot(databaseConfig),
    EmployeeModule,
  ],
})
export class AppModule {}


