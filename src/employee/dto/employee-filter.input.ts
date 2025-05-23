import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EmployeeFilterInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  department?: string;

  @Field({ nullable: true })
  status?: string;
}