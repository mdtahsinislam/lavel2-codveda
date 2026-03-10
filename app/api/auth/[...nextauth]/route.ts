

// // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\api\auth\[...nextauth]\route.ts
// // // // import NextAuth from "next-auth";
// // // // import GoogleProvider from "next-auth/providers/google";
// // // // import CredentialsProvider from "next-auth/providers/credentials";
// // // // import clientPromise from "@/lib/mongodb";
// // // // import bcrypt from "bcryptjs";

// // // // const handler = NextAuth({
// // // //   providers: [

// // // //     // GOOGLE LOGIN
// // // //     GoogleProvider({
// // // //       clientId: process.env.GOOGLE_CLIENT_ID!,
// // // //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// // // //     }),

// // // //     // EMAIL PASSWORD LOGIN
// // // //     CredentialsProvider({
// // // //       name: "Credentials",
// // // //       credentials: {
// // // //         email: {},
// // // //         password: {},
// // // //       },

// // // //       async authorize(credentials) {
// // // //         const client = await clientPromise;
// // // //         const db = client.db("lavel2-codevata");

// // // //         const user = await db.collection("users").findOne({
// // // //           email: credentials?.email,
// // // //         });

// // // //         if (!user) throw new Error("User not found");

// // // //         const isValid = await bcrypt.compare(
// // // //           credentials!.password,
// // // //           user.password
// // // //         );

// // // //         if (!isValid) throw new Error("Invalid password");

// // // //         return {
// // // //           id: user._id.toString(),
// // // //           name: user.name,
// // // //           email: user.email,
// // // //         };
// // // //       },
// // // //     }),
// // // //   ],

// // // //   callbacks: {
// // // //     async signIn({ user, account }) {

// // // //       // GOOGLE USER SAVE TO MONGODB
// // // //       if (account?.provider === "google") {

// // // //         const client = await clientPromise;
// // // //         const db = client.db("lavel2-codevata");

// // // //         const existingUser = await db.collection("users").findOne({
// // // //           email: user.email,
// // // //         });

// // // //         if (!existingUser) {
// // // //           await db.collection("users").insertOne({
// // // //             name: user.name,
// // // //             email: user.email,
// // // //             photo: user.image,
// // // //             provider: "google",
// // // //             createdAt: new Date(),
// // // //           });
// // // //         }
// // // //       }

// // // //       return true;
// // // //     },
// // // //   },

// // // //   session: {
// // // //     strategy: "jwt",
// // // //   },

// // // //   secret: process.env.NEXTAUTH_SECRET,
// // // // });

// // // // export { handler as GET, handler as POST };






// // // // app/api/auth/[...nextauth]/route.ts

// // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\api\auth\[...nextauth]\route.ts

// // // import NextAuth from "next-auth";
// // // import GoogleProvider from "next-auth/providers/google";
// // // import CredentialsProvider from "next-auth/providers/credentials";
// // // import clientPromise from "@/lib/mongodb";
// // // import bcrypt from "bcryptjs";

// // // const handler = NextAuth({
// // //   providers: [

// // //     // GOOGLE LOGIN
// // //     GoogleProvider({
// // //       clientId: process.env.GOOGLE_CLIENT_ID!,
// // //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// // //     }),

// // //     // EMAIL PASSWORD LOGIN
// // //     CredentialsProvider({
// // //       name: "Credentials",
// // //       credentials: {
// // //         email: {},
// // //         password: {},
// // //       },

// // //       async authorize(credentials) {

// // //         const client = await clientPromise;
// // //         const db = client.db("lavel2-codevata");

// // //         const user = await db.collection("users").findOne({
// // //           email: credentials?.email,
// // //         });

// // //         if (!user) throw new Error("User not found");

// // //         const isValid = await bcrypt.compare(
// // //           credentials!.password,
// // //           user.password
// // //         );

// // //         if (!isValid) throw new Error("Invalid password");

// // //         // RETURN USER DATA
// // //         return {
// // //           id: user._id.toString(),
// // //           name: user.name,
// // //           email: user.email,
// // //           image: user.photo,   // ← IMPORTANT
// // //         };
// // //       },
// // //     }),
// // //   ],

// // //   callbacks: {

// // //     // SAVE GOOGLE USER TO MONGODB
// // //     async signIn({ user, account }) {

// // //       if (account?.provider === "google") {

// // //         const client = await clientPromise;
// // //         const db = client.db("lavel2-codevata");

// // //         const existingUser = await db.collection("users").findOne({
// // //           email: user.email,
// // //         });

// // //         if (!existingUser) {

// // //           await db.collection("users").insertOne({
// // //             name: user.name,
// // //             email: user.email,
// // //             photo: user.image,
// // //             provider: "google",
// // //             createdAt: new Date(),
// // //           });

// // //         }

// // //       }

// // //       return true;
// // //     },

// // //     // ADD DATA TO JWT TOKEN
// // //     async jwt({ token, user }) {

// // //       if (user) {
// // //         token.id = user.id;
// // //         token.name = user.name;
// // //         token.email = user.email;
// // //         token.image = user.image;
// // //       }

// // //       return token;
// // //     },

// // //     // SEND DATA TO SESSION
// // //     async session({ session, token }) {

// // //       if (session.user) {
// // //         session.user.id = token.id as string;
// // //         session.user.name = token.name;
// // //         session.user.email = token.email;
// // //         session.user.image = token.image as string;
// // //       }

// // //       return session;
// // //     },

// // //   },

// // //   session: {
// // //     strategy: "jwt",
// // //   },

// // //   secret: process.env.NEXTAUTH_SECRET,
// // // });

// // // export { handler as GET, handler as POST };




// // // app/api/auth/[...nextauth]/route.ts
// // import NextAuth from "next-auth";
// // import GoogleProvider from "next-auth/providers/google";
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import clientPromise from "@/lib/mongodb";
// // import bcrypt from "bcryptjs";

// // const handler = NextAuth({
// //   providers: [

// //     // GOOGLE LOGIN
// //     GoogleProvider({
// //       clientId: process.env.GOOGLE_CLIENT_ID!,
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// //     }),

// //     // EMAIL PASSWORD LOGIN
// //     CredentialsProvider({
// //       name: "Credentials",
// //       credentials: {
// //         email: {},
// //         password: {},
// //       },
// //       async authorize(credentials) {
// //         const client = await clientPromise;
// //         const db = client.db("lavel2-codevata");

// //         const user = await db.collection("users").findOne({
// //           email: credentials?.email,
// //         });

// //         if (!user) throw new Error("User not found");

// //         const isValid = await bcrypt.compare(credentials!.password, user.password);
// //         if (!isValid) throw new Error("Invalid password");

// //         return {
// //           id: user._id.toString(),  // ← important
// //           name: user.name,
// //           email: user.email,
// //           image: user.photo,
// //         };
// //       },
// //     }),
// //   ],

// //   callbacks: {

// //     async signIn({ user, account }) {
// //       if (account?.provider === "google") {
// //         const client = await clientPromise;
// //         const db = client.db("lavel2-codevata");

// //         const existingUser = await db.collection("users").findOne({ email: user.email });
// //         if (!existingUser) {
// //           await db.collection("users").insertOne({
// //             name: user.name,
// //             email: user.email,
// //             photo: user.image,
// //             provider: "google",
// //             createdAt: new Date(),
// //           });
// //         }
// //       }
// //       return true;
// //     },

// //     async jwt({ token, user }) {
// //       if (user) {
// //         token.id = user.id;
// //         token.name = user.name;
// //         token.email = user.email;
// //         token.image = user.image;
// //       }
// //       return token;
// //     },

// //     async session({ session, token }) {
// //       if (session.user) {
// //         session.user.id = token.id as string;  // ← TypeScript now knows about id
// //         session.user.name = token.name;
// //         session.user.email = token.email;
// //         session.user.image = token.image;
// //       }
// //       return session;
// //     },
// //   },

// //   session: {
// //     strategy: "jwt",
// //   },

// //   secret: process.env.NEXTAUTH_SECRET,
// // });

// // export { handler as GET, handler as POST };


// // app/api/auth/[...nextauth]/route.ts

// // app/api/auth/[...nextauth]/route.ts


// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\api\auth\[...nextauth]\route.ts
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import clientPromise from "@/lib/mongodb";
// import bcrypt from "bcryptjs";

// const handler = NextAuth({
//   providers: [
//     // GOOGLE LOGIN
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),

//     // EMAIL PASSWORD LOGIN
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         const client = await clientPromise;
//         const db = client.db("lavel2-codevata");

//         const user = await db.collection("users").findOne({
//           email: credentials?.email,
//         });

//         if (!user) throw new Error("User not found");

//         const isValid = await bcrypt.compare(credentials!.password, user.password);
//         if (!isValid) throw new Error("Invalid password");

//         // RETURN USER
//         return {
//           id: user._id.toString(),
//           name: user.name,
//           email: user.email,
//           image: user.photo,
//         };
//       },
//     }),
//   ],

//   callbacks: {
//     async signIn({ user, account }) {
//       if (account?.provider === "google") {
//         const client = await clientPromise;
//         const db = client.db("lavel2-codevata");

//         const existingUser = await db.collection("users").findOne({ email: user.email });
//         if (!existingUser) {
//           await db.collection("users").insertOne({
//             name: user.name,
//             email: user.email,
//             photo: user.image,
//             provider: "google",
//             createdAt: new Date(),
//           });
//         }
//       }
//       return true;
//     },

//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//         token.image = user.image;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (session.user) {
//         // CAST token.id as string to fix TypeScript unknown error
//         session.user.id = token.id as string;
//         session.user.name = token.name ?? null;
//         session.user.email = token.email ?? null;
//         session.user.image = token.image ?? null;
//       }
//       return session;
//     },
//   },

//   session: {
//     strategy: "jwt",
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };



// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    // GOOGLE LOGIN
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // EMAIL PASSWORD LOGIN
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("lavel2-codevata");

        const user = await db.collection("users").findOne({
          email: credentials?.email,
        });

        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(credentials!.password, user.password);
        if (!isValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.photo,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const client = await clientPromise;
        const db = client.db("lavel2-codevata");

        const existingUser = await db.collection("users").findOne({ email: user.email });
        if (!existingUser) {
          await db.collection("users").insertOne({
            name: user.name,
            email: user.email,
            photo: user.image as string,
            provider: "google",
            createdAt: new Date(),
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        // CAST token values as string to satisfy TypeScript
        session.user.id = token.id as string;
        session.user.name = (token.name as string) ?? null;
        session.user.email = (token.email as string) ?? null;
        session.user.image = (token.image as string) ?? null;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };