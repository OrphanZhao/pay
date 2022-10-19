import { Space } from 'antd';
import { FC } from 'react';
import { Link, useModel } from 'umi';

interface IProps {}

const Login: FC<IProps> = ({}) => {
  const state = useModel('login');
  console.log(state);

  return (
    <>
      <div>
        <Space>
          {String(state.isLogin)}
          <span onClick={() => state.signIn(true)}>click</span>
        </Space>
      </div>
      login
      <div>
        <Link to="/">dashboard</Link>
      </div>
    </>
  );
};

export default Login;
