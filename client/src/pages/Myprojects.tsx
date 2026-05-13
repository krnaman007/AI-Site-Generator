import React, { useEffect, useState } from "react";
import type { Project } from "../types";
import { Loader2Icon, PlusIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyProjects } from "../assets/assets";

const MyProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    setProjects(dummyProjects);
    setTimeout(() => setLoading(false), 1000);
  };

  const deleteProject = async (projectId: string) => {
    // Placeholder for delete logic
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main className="relative overflow-hidden bg-gray-50 text-gray-900 font-poppins min-h-screen pt-24 md:pt-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png"
          alt="background"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl" />
      </div>

      <section className="relative px-4 md:px-16 lg:px-24 xl:px-32 pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-left text-gray-900">
            My Projects
          </h1>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-300/50 hover:scale-105 transition-transform duration-300"
          >
            <PlusIcon size={20} /> Create New
          </button>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex items-center justify-center h-[60vh]">
            <Loader2Icon className="h-12 w-12 animate-spin text-indigo-500" />
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-indigo-300/30 transition-all duration-300 cursor-pointer"
              >
                {/* Preview */}
                <div className="relative w-full h-48 border-b border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
                  {project.current_code && (
                    <div className="relative w-[500px] h-[200px] origin-top-left scale-[0.33]">
                      <iframe
                        srcDoc={project.current_code}
                        className="absolute top-0 left-0 w-[1500px] h-[800px]"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 line-clamp-2">
                        {project.name}
                      </h2>
                      <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-indigo-50 text-indigo-700 font-medium">
                        Website
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm md:text-base line-clamp-2">
                      {project.initial_prompt}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <span className="text-xs md:text-sm text-gray-400">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>

                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate(`/preview/${project.id}`)}
                        className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition"
                      >
                        Preview
                      </button>

                      <button
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition"
                      >
                        Open
                      </button>
                    </div>
                  </div>
                </div>

                {/* Delete Button */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <TrashIcon
                    className="h-6 w-6 text-red-500 bg-white rounded-full p-1 shadow hover:scale-110 transition-transform cursor-pointer"
                    onClick={() => deleteProject(project.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[60vh] text-gray-500 text-lg">
            No Projects Found
          </div>
        )}
      </section>
    </main>
  );
};

export default MyProjects;