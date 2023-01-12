import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Contacts } from 'components/Contacts/Contacts';

import css from './AppBar.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Contacts />
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
