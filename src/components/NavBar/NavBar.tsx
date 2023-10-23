import { NavMenu, Props as NavMenuProps } from './NavMenu/NavMenu';

export type Props = {
  image: string;
  menu: NavMenuProps;
};

export function NavBar({ image, menu }: Props) {
  return (
    <div>
      <img src={image} alt="logo" />
      <p>hello bitte funktionier</p>
      <NavMenu items={menu.items} />
    </div>
  );
}
