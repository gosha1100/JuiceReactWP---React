import { SubNavItem, Props as SubNavItemProps } from '../SubNavItem/SubNavItem';

export type Props = {
  id: number;
  title: string;
  url: string;
  items?: Array<SubNavItemProps>;
};

export function NavItem({ title, url, items = [] }: Props) {
  return (
    <li>
      <a href={url}>{title}</a>
      {items.length > 0 && (
        <ul className="flex flex-col gap-3 pt-4">
          {items.map((subItem) => (
            <SubNavItem key={subItem.id} {...subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}
