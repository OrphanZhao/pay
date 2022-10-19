import { client } from '@/utils';
import { Provider } from 'urql';

const UrqlProvider = (props: any) => {
  return <Provider value={client}>{props.children}</Provider>;
};

export { UrqlProvider as default };
