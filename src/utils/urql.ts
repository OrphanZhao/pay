import { Client } from '@urql/core/dist/types';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { cacheExchange, createClient, dedupExchange, errorExchange } from 'urql';

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
