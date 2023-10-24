import { Props as NavItemProps } from './NavItem/NavItem';
import { NavMenu } from './NavMenu/NavMenu';

export type Props = {
  image: string;
  menu: Array<NavItemProps>;
};

export function Footer({ image, menu }: Props) {
  return (
    <div>
      <img src={image} alt="logo" />
      <NavMenu items={menu} />
    </div>
  );
}
