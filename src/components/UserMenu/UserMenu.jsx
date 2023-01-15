import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());
  // console.log(user.name);
  return (
    <div>
      {/* <p>Welcome,{user.name}</p> */}
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
