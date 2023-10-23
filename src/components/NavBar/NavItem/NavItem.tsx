import { SubNavItem, Props as SubNavItemProps } from '../SubNavItem/SubNavItem';

export type Props = {
  id: number;
  title: string;
  url: string;
  items: Array<SubNavItemProps>;
};

export function NavItem({ title, url, items = [] }: Props) {
  // Render the main item link
  const mainItem = <a href={url}>{title}</a>;

  // Map through sub-items if they exist
  const subItems = items.map((item) => (
    <li key={item.id}>
      <p></p>
      <SubNavItem {...item} />
    </li>
  ));

  // Return the structure
  return (
    <li>
      {' '}
      {/* This should probably be a <li> to match structure in NavMenu */}
      {mainItem}
      {subItems.length > 0 && <ul>{subItems}</ul>} {/* Conditionally render sublist if it exists */}
    </li>
  );
}

/* export function NavItem({ title, url, items = [] }: Props) {
  const listItems = items.map((item) => (
    <>
      <a href={url}> {title} </a>
      <li key={item.id}>
        <SubNavItem {...item} />
      </li>
    </>
  ));
  return <ul> {listItems} </ul>;
}*/
