import { Spin } from 'antd';
import { FC } from 'react';

interface IProps {}

const PageLoading: FC<IProps> = ({ children }) => {
  return <Spin spinning>{children}</Spin>;
};

export default PageLoading;
