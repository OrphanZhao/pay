import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: './src/**/*.graphql',
  generates: {
    // TODO 单个文件 `yml` 正常
    'src/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
};
export default config;
