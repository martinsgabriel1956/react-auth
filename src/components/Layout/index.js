import { MainNavigation } from './MainNavigation';

export function Layout({children}) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};