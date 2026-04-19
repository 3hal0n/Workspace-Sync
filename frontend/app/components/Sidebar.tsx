import React from 'react'
import Image from 'next/image'
import { House, Folder, Calendar, CheckSquare, Users, MessageSquare, Settings } from 'lucide-react';

function Sidebar() {
  return (
    <div className='flex flex-col gap-4 p-4 bg-[#F9FAF5] w-1/4 h-screen text-shadow-gray-800'>
        <div className='flex p-4'><Image src="/logo.png" alt="Logo" width={43} height={43} />
        <div className='ml-2 text-5xl text-[#1D4FBC]'>Workspace</div>
        </div>
                  <div className='ml-4 text-black'>
                        <button className='flex items-center gap-2 hover:text-[#1D4FBC]'>
                                    <House className='w-5 h-5' />
                                    <span>Overview</span>
                        </button>
                  </div>

                  <div className='ml-4 text-black'>
                        <button className='flex items-center gap-2 hover:text-[#1D4FBC]'>
                                    <Folder className='w-5 h-5' />
                                    <span>Projects</span>
                        </button>
                  </div>

                  <div className='ml-4 text-black'>
                        <button className='flex items-center gap-2 hover:text-[#1D4FBC]'>
                                    <Calendar className='w-5 h-5' />
                                    <span>Calendar</span>
                        </button>
                  </div>

                  <div className='ml-4 text-black'>
                        <button className='flex items-center gap-2 hover:text-[#1D4FBC]'>
                                    <CheckSquare className='w-5 h-5' />
                                    <span>Tasks</span>
                        </button>
                  </div>

                  <div className='ml-4 text-black'>
                        <button className='flex items-center gap-2 hover:text-[#1D4FBC]'>
                                    <Users className='w-5 h-5' />
                                    <span>Resources</span>
                        </button>
                  </div>

                  <div className='ml-4 text-black'>
                        <button className='flex items-center gap-2 hover:text-[#1D4FBC]'>
                                    <MessageSquare className='w-5 h-5' />
                                    <span>Message</span>
                        </button>
                  </div>

                  <div className='ml-4 text-black'>
                        <button className='flex items-center gap-2 hover:text-[#1D4FBC]'>
                                    <Settings className='w-5 h-5' />
                                    <span>Settings</span>
                        </button>
                  </div>
      </div>
  
  )
}

export default Sidebar
