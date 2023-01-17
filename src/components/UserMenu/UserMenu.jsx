import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Wrapper, UserName, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();

  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      {user && <UserName>Welcome,{user.name}</UserName>}
      <Button type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </Wrapper>
  );
};
