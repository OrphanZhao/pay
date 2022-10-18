import { FC } from 'react';

interface IProps {}

const LoginLayout: FC<IProps> = ({ children }) => {
  return <>login-{children}</>;
};

export default LoginLayout;
