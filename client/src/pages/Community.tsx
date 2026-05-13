import React, { useEffect, useState } from "react";
import type { Project } from "../types";
import {
  Loader2Icon,
  PlusIcon,
  TrashIcon,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyProjects } from "../assets/assets";
// import Footer from '../components/Footer';

const Community = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const deleteProject = async (projectId: string) => {};

  const fetchProjects = async () => {
    setProjects(dummyProjects);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-4 md:px-12 lg:px-20 xl:px-28 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png"
          alt="background"
          className="h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl" />
      </div>

      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <Loader2Icon className="size-8 animate-spin text-indigo-300" />
        </div>
      ) : projects.length > 0 ? (
        <div className="py-16">
          {/* Header */}
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-pink-400" />
                AI Generated Projects
              </div>

              <h1 className="mt-5 text-4xl font-semibold md:text-5xl">
                Your{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  creative workspace
                </span>
              </h1>

              <p className="mt-4 text-gray-400">
                Manage, preview, and continue building your AI-generated
                websites.
              </p>
            </div>

            <button
              onClick={() => navigate("/")}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              <PlusIcon size={18} />
              Create New
            </button>
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:bg-white/[0.07]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Delete */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-4 top-4 z-20"
                >
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="scale-0 rounded-xl border border-white/10 bg-white/10 p-2 text-red-400 backdrop-blur-xl transition-all duration-300 group-hover:scale-100 hover:bg-red-500/20"
                  >
                    <TrashIcon className="size-4" />
                  </button>
                </div>

                {/* Preview */}
                <div className="relative h-52 overflow-hidden border-b border-white/10 bg-black/40">
                  {project.current_code && (
                    <iframe
                      srcDoc={project.current_code}
                      className="absolute left-0 top-0 h-[850px] w-[1400px] origin-top-left"
                      sandbox="allow-scripts allow-same-origin"
                      style={{ transform: "scale(0.26)" }}
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="line-clamp-2 text-xl font-semibold">
                      {project.name}
                    </h2>

                    <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                      Website
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                    {project.initial_prompt}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/10" />

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-gray-500">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>

                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="flex gap-3"
                    >
                      <button
                        onClick={() => navigate(`/preview/${project.id}`)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                      >
                        Preview
                      </button>

                      <button
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
                      >
                        Open
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-screen flex-col items-center justify-center text-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
            <h2 className="text-2xl font-semibold">No Projects Found</h2>

            <p className="mt-3 text-gray-400">
              Start generating your first AI website.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-6 rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-600 px-6 py-3 font-medium text-white transition hover:scale-105"
            >
              Create Project
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Community;