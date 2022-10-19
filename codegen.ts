import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://dev-eagle.guanyun.cn/graphql',
  documents: './src/service/graphql/*.graphql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
};
export default config;
