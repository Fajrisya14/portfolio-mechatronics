import React from 'react';
import { Settings, Cpu, Share2, ExternalLink, Computer, Monitor, Activity } from 'lucide-react';

// Data Project Dummy - Anda bisa edit bagian ini untuk menambah/mengurangi proyek
const projects = [
  {
    id: 1,
    title: "Remote I/O Industrial Fieldbus",
    description: "Sistem komunikasi berbasis ESP32 untuk ModbusTCP dan OPC-UA untuk mengurangi hardwiring pada Modular Production System.",
    tag: "Industrial IoT",
    status: "Active",
    tech: ["ESP32", "ModbusTCP", "Next.js"]
  },
  {
    id: 2,
    title: "Self-Balancing Robot",
    description: "Robot roda dua yang menyeimbangkan diri menggunakan kontrol PID, sensor IMU GY-86, dan stepper motor TMC2208.",
    tag: "Robotics",
    status: "Completed",
    tech: ["PID Control", "C++", "GY-86"]
  },
  {
    id: 3,
    title: "Digital Attendance System",
    description: "Sistem absensi terintegrasi RFID dan Fingerprint yang terhubung ke dashboard monitoring secara real-time.",
    tag: "Automation",
    status: "Archive",
    tech: ["RFID", "Node-Red", "SQL"]
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar / Navigation Mockup */}
      <nav className="border-b bg-white px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Cpu size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">MECH-PORTFOLIO</span>
        </div>
        <div className="flex gap-4">
        
        <a 
          href="https://github.com/Fajrisya14" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-blue-600 transition-colors">
          <Computer size={20} />
        </a>
        
          <button className="text-slate-500 hover:text-blue-600 transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-3xl font-extrabold mb-2">Project Dashboard</h1>
          <p className="text-slate-500">Overview dari sistem kontrol, robotika, dan otomasi industri yang telah dikembangkan.</p>
        </header>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total Projects</p>
            <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-sm font-medium text-slate-500">System Status</p>
            <p className="text-3xl font-bold text-emerald-500">Online</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-sm font-medium text-slate-500">Fieldbus Protocols</p>
            <p className="text-3xl font-bold text-slate-800">4 Active</p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <div className="flex gap-2">
                    <Share2 size={16} className="text-slate-400 cursor-pointer hover:text-blue-500" />
                    <ExternalLink size={16} className="text-slate-400 cursor-pointer hover:text-blue-500" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${project.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                    <span className="text-xs font-medium text-slate-500">{project.status}</span>
                  </div>
                  <button className="text-sm font-semibold text-blue-600 hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}