export type Props = {
  image: string;
};

export function Logo({ image }: Props) {
  return (
    <div className="logo">
      <img src={image} alt="logo" />
    </div>
  );
}
