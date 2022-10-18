import { Provider } from 'urql';
import { client } from '@/utils';

const UrqlProvider = (props: any) => {
  return <Provider value={client}>{props.children}</Provider>;
};

export { UrqlProvider as default };
