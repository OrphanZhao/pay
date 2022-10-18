import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '../schema.graphql',
  documents: './src/**/*.graphql',
  generates: {
    'src/generated/graphql.ts': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
};
export default config;
