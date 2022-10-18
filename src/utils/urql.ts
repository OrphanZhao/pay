import {
  createClient,
  dedupExchange,
  cacheExchange,
  errorExchange,
} from 'urql';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { Client, PromisifiedSource } from '@urql/core/dist/types';

export const client = createClient({
  url: '/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange,
    errorExchange({ onError: () => {} }),
    multipartFetchExchange,
  ],
  fetchOptions: () => {
    const token = '';
    return { headers: { authorization: token || '' } };
  },
  requestPolicy: 'network-only',
  suspense: false,
});

export const query: Client['query'] = (doc, variables, context) =>
  client.query(doc, variables, context);

export const mutation: Client['mutation'] = (doc, variables, context) =>
  client.mutation(doc, variables, context);
