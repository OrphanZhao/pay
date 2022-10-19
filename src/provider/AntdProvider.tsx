import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { FC } from 'react';

interface IProps {}

const AntdProvider: FC<IProps> = ({ children }) => {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
};

export default AntdProvider;
