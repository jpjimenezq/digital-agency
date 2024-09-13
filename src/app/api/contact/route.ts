import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, affair, message } = await request.json();

        if (!name || !email || !affair || !message) {
            return NextResponse.json({ message: "Todos los campos son requeridos" }, { status: 400 });
        }

        const apiUrl = `https://email-sending-cd.replit.app/mi_funcion?email_receiver=${email}`;

    }catch (error) {
        console.error("Error al enviar el correo electrónico", error);
        return NextResponse.json({ message: "Error al enviar el correo electrónico" }, { status: 500 });
    }
}
