import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  const id = params.id
  return NextResponse.json({
    id,
    enunciado: 'Qual é a sua cor preferida?',
    repostas: [
      'Branca', 'Vermelha', 'Amarela', 'Verde'
    ]
  });
}
