import { FC } from 'react';

interface IProps {}

const BasicLayout: FC<IProps> = ({ children }) => {
  return <>basic-{children}</>;
};

export default BasicLayout;
