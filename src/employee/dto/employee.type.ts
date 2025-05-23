import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeType {
  @Field(type => Int)
  id: number;

  @Field() name: string;
  @Field() title: string;
  @Field() department: string;
  @Field() location: string;
  @Field() email: string;
  @Field() phone: string;
  @Field() status: string;
  @Field() dateHired: string;
  @Field() manager: string;
  @Field() notes: string;
}
