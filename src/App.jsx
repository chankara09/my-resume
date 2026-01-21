import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Laurize Jeante Wangkay</h1>
          <p className="text-gray-600 mt-1">Aspiring Software Developer | Student Athlete</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* Profile Section */}
        <section id="profile">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <p>
            A persevering and dedicated student software programmer with a passion for continuous learning.
            Adept at problem-solving, an idealist in innovation, and eager to apply programming skills to real-world challenges.
            As a student athlete, I bring determination, discipline, and flexibility with my time.
          </p>
          <div className="mt-4">
            <h3 className="font-semibold">Hobbies & Interests:</h3>
            <p>Coding challenges, basketball, music, and community volunteering.</p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Values & Ethics:</h3>
            <p>Integrity, perseverance, teamwork, and a commitment to continuous improvement.</p>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside">
            <li>Python</li>
            <li>JavaScript (React, Node.js)</li>
            <li>SQL & Databases</li>
            <li>Machine Learning</li>
            <li>Data Analysis & Visualization</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Professional Strengths */}
        <section id="strengths">
          <h2 className="text-2xl font-semibold mb-4">Professional Strengths</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Problem-solving and critical thinking</li>
            <li>Adaptable to dynamic environments</li>
            <li>Strong communication and teamwork skills</li>
            <li>Creative and innovative mindset</li>
            <li>Time management and multitasking</li>
          </ul>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-2xl font-semibold mb-4">Experience & Portfolio</h2>
          <p className="mb-2">Explore my projects and contributions:</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://www.figma.com/YOUR_FIGMA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Figma Design Portfolio
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-white shadow-inner py-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          © 2026 Laurize Jeante Wangkay. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
