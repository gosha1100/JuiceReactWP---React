import { Logo } from './Logo/Logo';
import { Props as NavItemProps } from './NavItem/NavItem';
import { NavMenu } from './NavMenu/NavMenu';

export type Props = {
  menu: Array<NavItemProps>;
};

export function Footer({ menu }: Props) {
  return (
    <div className="flex container mx-auto justify-between items-center py-5">
      <Logo image={'/wp-content/themes/reactJuice/assets/react.svg'} />
      <NavMenu items={menu} />
    </div>
  );
}
