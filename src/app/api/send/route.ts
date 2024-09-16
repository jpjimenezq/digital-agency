import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";
// import books from "@/app/lib/books";

export async function POST(request: Request) {
  try {
    //Se desabilita por el momento bookId
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Nombre y correo electrónico son requeridos" },
        { status: 400 }
      );
    }

    // if (!bookId || !books[bookId]) {
    //   return NextResponse.json(
    //     { message: "ID del libro no válido" },
    //     { status: 400 }
    //   );
    // }

    const [rows]: any = await pool.query(
      "SELECT * FROM subscribers WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      return NextResponse.json(
        { message: "Este correo ya está registrado." },
        { status: 409 }
      );
    }

    // const downloadLink = books[bookId];

    const apiUrl = `https://email-sending-cd.replit.app/mi_funcion?email_receiver=${email}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error al enviar el email. Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Respuesta de la API:", responseData);

    // Guardar datos en la base de datos
    const [result]: any = await pool.query(
      "INSERT INTO subscribers (name, email) VALUES (?, ?)",
      [name, email]
    );

    if (result.affectedRows > 0) {
      console.log("Datos guardados en la base de datos");
    } else {
      console.error("No se pudieron guardar los datos en la base de datos");
      return NextResponse.json(
        { message: "Error al guardar los datos en la base de datos" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email enviado y datos guardados", data: responseData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return NextResponse.json(
      { message: "Error al enviar el email" },
      { status: 500 }
    );
  }
}

