import { Logo } from './Logo/Logo';
import { Props as NavItemProps } from './NavItem/NavItem';
import { NavMenu } from './NavMenu/NavMenu';

export type Props = {
  menu: Array<NavItemProps>;
};

export function NavBar({ menu }: Props) {
  return (
    <div className="container mx-auto flex justify-between items-center py-5">
      <Logo image={'/wp-content/themes/reactJuice/assets/react.svg'} />
      <NavMenu items={menu} />
    </div>
  );
}
