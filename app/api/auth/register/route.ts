

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\api\auth\register\route.ts
// import clientPromise from "@/lib/mongodb";
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const formData = await req.formData();

//     const name = formData.get("name");
//     const email = formData.get("email");
//     const password = formData.get("password");
//     const phone = formData.get("phone");

//     const client = await clientPromise;
//     const db = client.db("lavel2-codevata");

//     const existingUser = await db.collection("users").findOne({ email });

//     if (existingUser) {
//       return NextResponse.json(
//         { message: "User already exists" },
//         { status: 400 }
//       );
//     }

//     const hashedPassword = await bcrypt.hash(password as string, 10);

//     const newUser = {
//       name,
//       email,
//       phone,
//       password: hashedPassword,
//       provider: "credentials",
//       createdAt: new Date(),
//     };

//     const result = await db.collection("users").insertOne(newUser);

//     return NextResponse.json({
//       message: "User registered successfully",
//       user: newUser,
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Registration failed" },
//       { status: 500 }
//     );
//   }
// }

import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const phone = formData.get("phone");
    const photo = formData.get("photo") as File;

    let photoUrl = "";

    // Upload image to ImgBB
    if (photo) {
      const bytes = await photo.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const base64Image = buffer.toString("base64");

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API}`,
        {
          method: "POST",
          body: new URLSearchParams({
            image: base64Image,
          }),
        }
      );

      const imgbbData = await imgbbRes.json();

      photoUrl = imgbbData.data.url;
    }

    const client = await clientPromise;
    const db = client.db("lavel2-codevata");

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password as string, 10);

    const newUser = {
      name,
      email,
      phone,
      password: hashedPassword,
      photo: photoUrl,
      provider: "credentials",
      createdAt: new Date(),
    };

    await db.collection("users").insertOne(newUser);

    return NextResponse.json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 }
    );
  }
}