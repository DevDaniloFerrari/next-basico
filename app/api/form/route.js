import { NextResponse } from "next/server";

const usuarios = []

export async function POST(req) {
  const usuario = await req.json()
  usuarios.push(usuario)
  return NextResponse.json({ response: "Usuário adicionado com sucesso!" });
}

export async function GET() {
    return NextResponse.json({ usuarios });
  }
  
