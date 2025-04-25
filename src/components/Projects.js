import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Project 1 */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg bg-opacity-75">
          <img src="https://via.placeholder.com/200" alt="Project 1" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-white">Project One</h3>
          <p className="text-gray-300 mb-4">This is a sample project built with React and Tailwind CSS.</p>
          <a href="https://github.com/your-username/project-1" className="text-blue-400 hover:underline">View on GitHub</a>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
};

export default Projects;
