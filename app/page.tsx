export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          StudyCopilot AI
        </h1>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        
        <div className="bg-gray-900 text-sm px-4 py-2 rounded-full border border-gray-700 mb-8">
          AI-Powered Learning Platform
        </div>

        <h1 className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight">
          Your Personal AI Study Copilot for Engineering
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mt-8">
          Upload notes, ask doubts, generate summaries, quizzes, and master your syllabus with AI.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
            Start Learning
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-900 transition">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-24">
        
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Chat with PDFs
          </h2>

          <p className="text-gray-400">
            Upload engineering notes and ask questions instantly using AI.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            AI Quiz Generator
          </h2>

          <p className="text-gray-400">
            Generate MCQs, viva questions, and revision tests automatically.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Smart Summaries
          </h2>

          <p className="text-gray-400">
            Convert lengthy units into short, exam-focused summaries.
          </p>
        </div>

      </section>

    </main>
  );
}