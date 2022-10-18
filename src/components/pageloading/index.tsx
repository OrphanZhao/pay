import { FC } from 'react';
import { Spin } from 'antd';

interface IProps {}

const PageLoading: FC<IProps> = ({ children }) => {
  return <Spin spinning>{children}</Spin>;
};

export default PageLoading;
