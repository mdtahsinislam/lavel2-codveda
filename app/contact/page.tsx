

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\contact\page.tsx
// // const Contact=()=>{
// //     return (
// //         // <div>Contact</div>
// //          <div className="max-w-4xl mx-auto p-10">

// //       <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

// //       <form className="space-y-4">

// //         <input
// //           type="text"
// //           placeholder="Your Name"
// //           className="w-full border p-3 rounded"
// //         />

// //         <input
// //           type="email"
// //           placeholder="Your Email"
// //           className="w-full border p-3 rounded"
// //         />

// //         <textarea
// //           placeholder="Message"
// //           className="w-full border p-3 rounded"
// //         ></textarea>

// //         <button className="bg-blue-600 text-white px-6 py-2 rounded">
// //           Send Message
// //         </button>

// //       </form>

// //     </div>
// //     )
// // }
// // export default Contact 


// // app/contact/page.tsx

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\contact\page.tsx
// // "use client";

// // import { useState } from "react";
// // import { Send, Mail, User, MessageSquare } from "lucide-react";

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });
// //   const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
// //   const [errorMsg, setErrorMsg] = useState("");

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setStatus("sending");
// //     setErrorMsg("");

// //     // Simple client-side validation
// //     if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
// //       setErrorMsg("Please fill in all fields");
// //       setStatus("error");
// //       return;
// //     }

// //     if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       setErrorMsg("Please enter a valid email");
// //       setStatus("error");
// //       return;
// //     }

// //     // Simulate API call (replace with real backend later)
// //     await new Promise((resolve) => setTimeout(resolve, 1200));

// //     // For demo: random success/error
// //     if (Math.random() > 0.2) {
// //       setStatus("success");
// //       setFormData({ name: "", email: "", message: "" });
// //     } else {
// //       setStatus("error");
// //       setErrorMsg("Something went wrong. Try again later.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
// //       {/* Background glow blobs */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
// //         <div className="absolute bottom-[-15%] left-[-15%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
// //       </div>

// //       <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
// //         {/* Header */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-xl">
// //             <Mail className="w-6 h-6 text-purple-400" />
// //             <span className="text-base font-medium text-purple-300">Get in Touch</span>
// //           </div>

// //           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
// //             Contact Us
// //           </h1>

// //           <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
// //             Have questions or ideas? We'd love to hear from you.
// //           </p>
// //         </div>

// //         {/* Form Card - Glassmorphism */}
// //         <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/10 transform transition-all duration-500 hover:shadow-purple-500/20">
// //           <form onSubmit={handleSubmit} className="space-y-8">
// //             {/* Name */}
// //             <div className="relative group">
// //               <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Your Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
// //                 required
// //               />
// //             </div>

// //             {/* Email */}
// //             <div className="relative group">
// //               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Your Email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
// //                 required
// //               />
// //             </div>

// //             {/* Message */}
// //             <div className="relative group">
// //               <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
// //               <textarea
// //                 name="message"
// //                 placeholder="Your Message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 rows={6}
// //                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm resize-none"
// //                 required
// //               />
// //             </div>

// //             {/* Status Messages */}
// //             {status === "error" && errorMsg && (
// //               <p className="text-red-400 bg-red-900/30 border border-red-500/30 p-4 rounded-xl text-center">
// //                 {errorMsg}
// //               </p>
// //             )}

// //             {status === "success" && (
// //               <p className="text-green-400 bg-green-900/30 border border-green-500/30 p-4 rounded-xl text-center font-medium">
// //                 Message sent successfully! We'll get back to you soon.
// //               </p>
// //             )}

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               disabled={status === "sending"}
// //               className={`
// //                 w-full py-4 px-8 rounded-xl font-semibold text-lg flex items-center justify-center gap-3
// //                 transition-all duration-300 shadow-xl
// //                 ${
// //                   status === "sending"
// //                     ? "bg-purple-800/50 cursor-not-allowed"
// //                     : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/40 active:scale-[0.98]"
// //                 }
// //                 border border-purple-500/30
// //               `}
// //             >
// //               {status === "sending" ? (
// //                 "Sending..."
// //               ) : (
// //                 <>
// //                   Send Message
// //                   <Send className="w-5 h-5" />
// //                 </>
// //               )}
// //             </button>
// //           </form>
// //         </div>

// //         {/* Extra touch */}
// //         <p className="text-center mt-12 text-slate-400 text-sm">
// //           Or reach us directly at hello@yourdomain.com
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }




// // C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\contact\page.tsx
// "use client";

// import { useState } from "react";
// import { Send, Mail, User, MessageSquare } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("sending");
//     setErrorMsg("");

//     // Client-side validation
//     if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
//       setErrorMsg("Please fill in all fields");
//       setStatus("error");
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       setErrorMsg("Please enter a valid email");
//       setStatus("error");
//       return;
//     }

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStatus("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("error");
//         setErrorMsg(data.error || "Something went wrong");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setErrorMsg("Failed to send message");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
//       <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-xl">
//             <Mail className="w-6 h-6 text-purple-400" />
//             <span className="text-base font-medium text-purple-300">Get in Touch</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
//             Contact Us
//           </h1>
//           <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
//             Have questions or ideas? We'd love to hear from you.
//           </p>
//         </div>

//         {/* Form */}
//         <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/10 transform transition-all duration-500 hover:shadow-purple-500/20">
//           <form onSubmit={handleSubmit} className="space-y-8">
//             {/* Name */}
//             <div className="relative group">
//               <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="relative group">
//               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div className="relative group">
//               <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={6}
//                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm resize-none"
//                 required
//               />
//             </div>

//             {/* Status */}
//             {status === "error" && errorMsg && (
//               <p className="text-red-400 bg-red-900/30 border border-red-500/30 p-4 rounded-xl text-center">{errorMsg}</p>
//             )}
//             {status === "success" && (
//               <p className="text-green-400 bg-green-900/30 border border-green-500/30 p-4 rounded-xl text-center font-medium">
//                 Message sent successfully! We'll get back to you soon.
//               </p>
//             )}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={status === "sending"}
//               className={`
//                 w-full py-4 px-8 rounded-xl font-semibold text-lg flex items-center justify-center gap-3
//                 transition-all duration-300 shadow-xl
//                 ${status === "sending" ? "bg-purple-800/50 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/40 active:scale-[0.98]"}
//                 border border-purple-500/30
//               `}
//             >
//               {status === "sending" ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
//             </button>
//           </form>
//         </div>

//         <p className="text-center mt-12 text-slate-400 text-sm">
//           Or reach us directly at hello@yourdomain.com
//         </p>
//       </div>
//     </div>
//   );
// }







// C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\contact\page.tsx
"use client";

import { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in all fields");
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Please enter a valid email");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Failed to send message");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-xl">
            <Mail className="w-6 h-6 text-purple-400" />
            <span className="text-base font-medium text-purple-300">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            Have questions or ideas? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/10 transform transition-all duration-500 hover:shadow-purple-500/20">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                required
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                required
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm resize-none"
                required
              />
            </div>

            {/* Status */}
            {status === "error" && errorMsg && (
              <p className="text-red-400 bg-red-900/30 border border-red-500/30 p-4 rounded-xl text-center">{errorMsg}</p>
            )}
            {status === "success" && (
              <p className="text-green-400 bg-green-900/30 border border-green-500/30 p-4 rounded-xl text-center font-medium">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`
                w-full py-4 px-8 rounded-xl font-semibold text-lg flex items-center justify-center gap-3
                transition-all duration-300 shadow-xl
                ${status === "sending" ? "bg-purple-800/50 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/40 active:scale-[0.98]"}
                border border-purple-500/30
              `}
            >
              {status === "sending" ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
            </button>
          </form>
        </div>

        <p className="text-center mt-12 text-slate-400 text-sm">
          Or reach us directly at hello@yourdomain.com
        </p>
      </div>
    </div>
  );
}