import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { EmployeeType } from './dto/employee.type';
import { EmployeeFilterInput } from './dto/employee-filter.input';

@Resolver(() => EmployeeType)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [EmployeeType])
  async employees(
    @Args('filters', { nullable: true }) filters: EmployeeFilterInput,
    @Args('page', { type: () => Int, nullable: true }) page = 1,
    @Args('limit', { type: () => Int, nullable: true }) limit = 10,
  ): Promise<EmployeeType[]> {
    return this.employeeService.findAll(filters || {}, page, limit);
  }

  @Query(() => EmployeeType)
  async employee(@Args('id', { type: () => Int }) id: number): Promise<EmployeeType> {
    return this.employeeService.findOneById(id);
  }
}
