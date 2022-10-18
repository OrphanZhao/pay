import {
  createClient,
  dedupExchange,
  cacheExchange,
  errorExchange,
} from 'urql';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';

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
