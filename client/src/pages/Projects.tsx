import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import type { Project } from "../types";
import {
  ArrowBigDownDashIcon,
  EyeIcon,
  EyeOffIcon,
  FullscreenIcon,
  LaptopIcon,
  Loader2Icon,
  MessageSquareIcon,
  SaveIcon,
  SmartphoneIcon,
  TabletIcon,
  XIcon,
} from "lucide-react";
import { dummyConversations, dummyProjects, dummyVersion } from "../assets/assets";
import Sidebar from "../components/Sidebar";
import ProjectPreview, { type ProjectPreviewRef } from "../components/ProjectPreview";

const Projects = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(true);
  const [device, setDevice] = useState<"phone" | "tablet" | "desktop">("desktop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const previewRef = useRef<ProjectPreviewRef>(null);

  const fetchProject = async () => {
    const project = dummyProjects.find((project) => project.id === projectId);

    setTimeout(() => {
      if (project) {
        setProject({ ...project, conversation: dummyConversations, versions: dummyVersion });
        setLoading(false);
        setIsGenerating(project.current_code ? false : true);
      }
    }, 2000);
  };

  const saveProject = async () => {};
  const downloadCode = () => {
    const code = previewRef.current?.getCode() || project?.current_code;
    if (!code) {
      if (isGenerating) return;
      return;
    }
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element);
    element.click();
  };
  const togglePublish = async () => {};

  useEffect(() => {
    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <Loader2Icon className="h-12 w-12 animate-spin text-indigo-500" />
      </div>
    );
  }

  return project ? (
    <div className="flex flex-col h-screen w-full bg-gray-50 text-gray-900 font-poppins">
      {/* Builder Navbar */}
      <div className="flex max-sm:flex-col sm:items-center gap-4 px-4 py-3 shadow-md bg-white/50 backdrop-blur-md rounded-b-xl">
        {/* Left */}
        <div className="flex items-center gap-3 sm:min-w-90 text-nowrap">
          <img
            src="/favicon.svg"
            alt="logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="max-w-64 sm:max-w-xs">
            <p className="text-sm font-medium capitalize truncate">{project.name}</p>
            <p className="text-xs text-gray-500 -mt-0.5">Previewing last saved version</p>
          </div>

          <div className="sm:hidden flex-1 flex justify-end">
            {isMenuOpen ? (
              <MessageSquareIcon
                onClick={() => setIsMenuOpen(false)}
                className="size-6 cursor-pointer"
              />
            ) : (
              <XIcon
                onClick={() => setIsMenuOpen(true)}
                className="size-6 cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Middle device switch */}
        <div className="hidden sm:flex gap-2 bg-gray-100 p-1.5 rounded-md">
          <SmartphoneIcon
            onClick={() => setDevice("phone")}
            className={`size-6 rounded cursor-pointer ${
              device === "phone" ? "bg-indigo-100 text-indigo-700" : "text-gray-600"
            }`}
          />
          <TabletIcon
            onClick={() => setDevice("tablet")}
            className={`size-6 rounded cursor-pointer ${
              device === "tablet" ? "bg-indigo-100 text-indigo-700" : "text-gray-600"
            }`}
          />
          <LaptopIcon
            onClick={() => setDevice("desktop")}
            className={`size-6 rounded cursor-pointer ${
              device === "desktop" ? "bg-indigo-100 text-indigo-700" : "text-gray-600"
            }`}
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center justify-end gap-3 flex-1 text-xs sm:text-sm">
          <button
            onClick={saveProject}
            disabled={isSaving}
            className="max-sm:hidden bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3.5 py-1.5 flex items-center gap-1 rounded-lg font-medium border border-indigo-200"
          >
            {isSaving ? <Loader2Icon className="animate-spin" size={16} /> : <SaveIcon size={16} />}
            Save
          </button>

          <Link
            target="_blank"
            to={`/preview/${projectId}`}
            className="items-center gap-2 px-3.5 py-1.5 rounded-lg border border-gray-300 hover:border-indigo-300 transition-colors flex"
          >
            <FullscreenIcon size={16} /> Preview
          </Link>

          <button
            onClick={downloadCode}
            className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 text-white px-3.5 py-1.5 flex items-center gap-2 rounded-lg transition-all"
          >
            <ArrowBigDownDashIcon size={16} /> Download
          </button>

          <button
            onClick={togglePublish}
            className="bg-gradient-to-r from-indigo-500 to-indigo-400 hover:from-indigo-400 hover:to-indigo-300 text-white px-3.5 py-1.5 flex items-center gap-2 rounded-lg transition-all"
          >
            {project.isPublished ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            {project.isPublished ? "Unpublish" : "Publish"}
          </button>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex overflow-auto">
        <Sidebar
          isMenuOpen={isMenuOpen}
          project={project}
          setProject={(p) => setProject(p)}
          isGenerating={isGenerating}
          setIsGenerating={setIsGenerating}
        />
        <div className="flex-1 p-3 sm:p-4">
          <ProjectPreview
            ref={previewRef}
            project={project}
            isGenerating={isGenerating}
            device={device}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <p className="text-2xl font-medium text-gray-400">Unable to load project!</p>
    </div>
  );
};

export default Projects;