import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

export const graphqlConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  playground: true,
};
