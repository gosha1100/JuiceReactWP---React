import { NavItem, Props as NavItemProps } from '../NavItem/NavItem';

export type Props = {
  items: Array<NavItemProps>;
};

export function NavMenu({ items }: Props) {
  const listItems = items.map((item) => (
    <li key={item.id}>
      <NavItem {...item} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
