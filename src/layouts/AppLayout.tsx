import AntdProvider from '@/provider/AntdProvider';
import UrqlProvider from '@/provider/UrqlProvider';
import { FC } from 'react';

interface IProps {}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <AntdProvider>
      <UrqlProvider>app-{children}</UrqlProvider>
    </AntdProvider>
  );
};

export default AppLayout;
