export type Props = {
  id: number;
  title: string;
  url: string;
};

export function SubNavItem({ title, url }: Props) {
  return <a href={url}>{title}</a>;
}
