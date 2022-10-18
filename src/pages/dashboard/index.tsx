import { FC } from 'react';
import { useHistory } from 'umi';

interface IProps {}

const Dashboard: FC<IProps> = ({}) => {
  const history = useHistory();

  return (
    <>
      dashboard
      <div>
        <span className=" text-blue-600" onClick={() => history.push('/login')}>
          login
        </span>
      </div>
    </>
  );
};

export default Dashboard;
