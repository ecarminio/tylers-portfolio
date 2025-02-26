// app/page.tsx
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Main />

      {/* Add ChatBot component */}
      <div className="p-6">
        <ChatBot />
      </div>

      <Footer />
    </div>
  );
}
