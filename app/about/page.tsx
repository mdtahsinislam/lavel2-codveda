


// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\about\page.tsx 
// const About=()=>{
//     return(
//         // <div>About</div>
//          <div className="max-w-5xl mx-auto p-10">

//       <h1 className="text-3xl font-bold mb-6">About This Project</h1>

//       <p className="mb-4">
//         This project is a Single Page Application built with Next.js.
//         It demonstrates SPA navigation, REST API integration and responsive UI.
//       </p>

//       <h2 className="text-xl font-semibold mt-6">Technologies Used</h2>

//       <ul className="list-disc ml-6 mt-3">
//         <li>Next.js</li>
//         <li>Tailwind CSS</li>
//         <li>Axios / Fetch API</li>
//         <li>OpenWeather API</li>
//       </ul>

//     </div>
//     )
// }
// export default  About


// app/about/page.tsx
import { ArrowRight, Code2, Database, Layout, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-xl">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Next.js Showcase Project</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent drop-shadow-xl">
            About This Project
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A clean, modern Single Page Application demonstrating Next.js App Router,
            beautiful UI design, real-time weather data, and smooth navigation.
          </p>
        </div>

        {/* Main Content Card - Glassmorphism */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/10 mb-16 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-purple-500/20">
          <div className="space-y-10">
            {/* Mission / Intro */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent inline-block">
                What is this project?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                This is a full-featured demonstration of modern web development practices using Next.js 14+. 
                It combines server-side rendering, client-side interactivity, external API integration, 
                responsive design, and elegant UI/UX — all packaged in a clean, maintainable structure.
              </p>
            </div>

            {/* Technologies - Card Grid */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Core Technologies
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Layout, name: "Next.js App Router", color: "from-blue-500 to-cyan-500", desc: "Server & Client Components" },
                  { icon: Code2, name: "Tailwind CSS", color: "from-teal-500 to-emerald-500", desc: "Utility-first styling" },
                  { icon: Database, name: "OpenWeather API", color: "from-orange-500 to-amber-500", desc: "Real-time weather data" },
                  { icon: Sparkles, name: "Modern UI/UX", color: "from-purple-500 to-pink-500", desc: "Glassmorphism & animations" },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                    <tech.icon className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors" />
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-slate-400">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-indigo-300">Key Features Demonstrated</h3>
              <ul className="space-y-4 text-lg text-slate-300">
                {[
                  "App Router with dynamic routes & layouts",
                  "Client & Server component patterns",
                  "Real-time weather fetching & display",
                  "Glassmorphism + gradient design system",
                  "Responsive layout for all devices",
                  "Smooth animations & transitions",
                  "Error handling & loading states",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-slate-400 text-sm">
          Built with ♡ in Chattogram • {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}