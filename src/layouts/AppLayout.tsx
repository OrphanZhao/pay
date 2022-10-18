import { FC } from 'react';
import AntdProvider from '@/provider/AntdProvider';
import UrqlProvider from '@/provider/UrqlProvider';

interface IProps {}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <AntdProvider>
      <UrqlProvider>app-{children}</UrqlProvider>
    </AntdProvider>
  );
};

export default AppLayout;
