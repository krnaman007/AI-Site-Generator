import React, { useEffect, useState } from 'react'
import type { Project } from '../types';
import { Loader2Icon, PlusIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { dummyProjects } from '../assets/assets';
import Footer from '../components/Footer';

const Community = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<Project[]>([]);
    const navigate = useNavigate()

    const deleteProject = async (projectId:string) => {

  }

    const fetchProjects = async () => {
        setProjects(dummyProjects)
        // Simulate loading
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    useEffect(() => {
  fetchProjects()
}, [])
}

return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32'>
      {loading ? (
        <div className='flex items-center justify-center h-[80vh]'>
          <Loader2Icon className='size-7 animate-spin text-indigo-200' />
        </div>
      ) : projects.length > 0 ? (
        <div className='py-10 min-h-[80vh]'>
          <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" className="absolute inset-0 -z-10 size-full opacity" alt="" />
          
          {/* Header */}
          <div className='flex items-center justify-between mb-12'>
            <h1 className='text-2xl font-medium text-white'>My Projects</h1>
            <button
              onClick={() => navigate('/')}
              className='flex items-center gap-2 text-white px-3 sm:px-6 py-1 sm:py-2 rounded bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 active:scale-95 transition-all'
            >
              <PlusIcon size={18} /> Create New
            </button>
          </div>

          {/* Projects Grid */}
          <div className='flex flex-wrap gap-3.5'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='relative group w-72 max-sm:mx-auto cursor-pointer bg-gray-900/60 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-indigo-700/30 hover:border-indigo-800/80 transition-all duration-300'
              > 
                {/* Preview */}
                <div className='relative w-full h-40 bg-gray-900 overflow-hidden border-b border-gray-800'>
                  {project.current_code && (
                    <iframe
                      srcDoc={project.current_code}
                      className='absolute top-0 left-0 w-[1200px] h-[800px] origin-top-left'
                      sandbox='allow-scripts allow-same-origin'
                      style={{ transform: 'scale(0.25)' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className='p-4 text-white bg-linear-180 from-transparent group-hover:from-indigo-950 to-transparent transition-colors'>
                  <div className='flex items-start justify-between'>
                    <h2 className='text-lg font-medium line-clamp-2'>
                      {project.name}
                    </h2>
                    <button className='px-2.5 py-0.5 mt-1 ml-2 text-xs bg-gray-800 border border-gray-700 rounded-full'>
                      Website
                    </button>
                  </div>

                  <p className='text-gray-400 mt-1 text-sm line-clamp-2'>
                    {project.initial_prompt}
                  </p>

                  <div
                    onClick={(e) => e.stopPropagation()}
                    className='flex justify-between items-center mt-6'
                  >
                    <span className='text-xs text-gray-500'>
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>

                    <div className='flex gap-3 text-white text-sm'>
                      <button
                        onClick={() => navigate(`/preview/${project.id}`)}
                        className='px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-md transition-all'
                      >
                        Preview
                      </button>

                      <button
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className='px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-md transition-colors'
                      >
                        Open
                      </button>
                    </div>
                  </div>
                </div>

                {/* Delete Button */}
                <div onClick={(e) => e.stopPropagation()}>
                  <TrashIcon
                    className='absolute top-3 right-3 scale-0 group-hover:scale-100 bg-white p-1.5 size-7 rounded text-red-500 cursor-pointer transition-all'
                    onClick={() => deleteProject(project.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center h-[80vh] text-gray-500'>
          <p>No Projects Found</p>
        </div>
      )}
    </div>
    //<Footer />
  )
}

export default Community