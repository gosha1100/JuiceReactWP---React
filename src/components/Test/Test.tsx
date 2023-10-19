type Props = {
  title: string;
};

export function Test({ title }: Props) {
  return (
    <div>
      <h1 className="text-amber-200 bg-slate-50">{title}</h1>
    </div>
  );
}
