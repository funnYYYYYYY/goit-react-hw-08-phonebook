// import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      {user && <p>Welcome,{user.name}</p>}
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
