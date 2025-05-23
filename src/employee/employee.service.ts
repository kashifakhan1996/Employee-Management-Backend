import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { EmployeeFilterInput } from './dto/employee-filter.input';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly repo: Repository<Employee>,
  ) {}

  async findAll(
    filters: EmployeeFilterInput,
    page: number,
    limit: number
  ): Promise<Employee[]> {
    const query = this.repo.createQueryBuilder('employee');

    if (filters.name)
      query.andWhere('employee.name ILIKE :name', { name: `%${filters.name}%` });

    if (filters.department)
      query.andWhere('employee.department = :department', {
        department: filters.department,
      });

    if (filters.status)
      query.andWhere('employee.status = :status', { status: filters.status });

    return await query.skip((page - 1) * limit).take(limit).getMany();
  }

  async findOneById(id: number): Promise<Employee> {
    return this.repo.findOneBy({ id });
  }
}


