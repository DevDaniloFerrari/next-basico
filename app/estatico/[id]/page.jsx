export default function estatico(params) {
  console.log(params);
  return (
    <div>
      <span>Aleatório: {params.numero}</span>
    </div>
  );
}

export function generateStaticParams() {
  return [
    {
      numero: 123,
    },
  ];
}
