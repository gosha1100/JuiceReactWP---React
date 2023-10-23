export type Props = {
  headline: string;
};

export function Juice({ headline }: Props) {
  return <div className="juice">Juice Works! {headline} </div>;
}
