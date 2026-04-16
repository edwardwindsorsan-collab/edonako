/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Radio, MapPin, AlertTriangle, History, Power, Activity, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [countdown, setCountdown] = useState(292); // 04:52 in seconds

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const countTimer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => {
      clearInterval(timer);
      clearInterval(countTimer);
    };
  }, []);

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const logs = [
    { time: "14:20:01", type: "BROADCAST", msg: "URGENT: Request for military occupation. Subject: Windsor, Edward...", active: true },
    { time: "14:15:00", type: "BROADCAST", msg: "HELP: Detention for 7 years without legal cause. Requesting FBI...", active: false },
    { time: "14:10:00", type: "BROADCAST", msg: "ALERT: Medical malpractice and illegal experiments reported at...", active: false },
    { time: "14:05:00", type: "BROADCAST", msg: "S.O.S: Extortion and blackmail threats confirmed. Require immediate...", active: false },
    { time: "14:00:00", type: "BROADCAST", msg: "URGENT: Request for military occupation. Subject: Windsor, Edward...", active: false },
    { time: "13:55:00", type: "BROADCAST", msg: "HELP: Detention for 7 years without legal cause. Requesting FBI...", active: false },
    { time: "13:50:00", type: "BROADCAST", msg: "ALERT: Medical malpractice and illegal experiments reported at...", active: false },
    { time: "13:45:00", type: "BROADCAST", msg: "S.O.S: Extortion and blackmail threats confirmed. Require immediate...", active: false },
    { time: "13:40:00", type: "BROADCAST", msg: "URGENT: Request for military occupation. Subject: Windsor, Edward...", active: false },
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-[#0a0b0d] overflow-hidden select-none">
      {/* Header */}
      <header className="h-[60px] border-b border-[#2c2e33] bg-[#151619] flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-[#ff3b30]" />
          <div className="font-extrabold tracking-[2px] text-sm uppercase">Sentinel-X Response Unit</div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-wider">
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#34c759] status-indicator-glow" 
            />
            <span>Broadcast Active: High Priority Distress</span>
          </div>
          
          <div className="hidden md:flex items-center gap-3 text-[12px] text-[#8e9299] uppercase tracking-wider">
            <Radio className="w-4 h-4" />
            <span>Signal: Encrypted (AES-256)</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-[320px_1fr] bg-[#2c2e33] gap-[1px] overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-[#151619] p-6 flex flex-col gap-6 overflow-y-auto">
          <div className="border border-[#2c2e33] p-4 rounded bg-[#0a0b0d]/50">
            <span className="text-[10px] text-[#8e9299] uppercase mb-3 block tracking-[0.5px]">Next Transmission</span>
            <div className="font-mono text-[42px] text-[#ff3b30] text-center leading-none">
              {formatCountdown(countdown)}
            </div>
          </div>
          
          <div className="border border-[#2c2e33] p-4 rounded">
            <span className="text-[10px] text-[#8e9299] uppercase mb-3 block tracking-[0.5px] flex items-center gap-2">
              <MapPin className="w-3 h-3" /> Current GPS Coordinates
            </span>
            <div className="font-mono text-[14px] leading-relaxed">
              LAT: 38.8977° N<br />
              LON: 77.0365° W<br />
              ALT: 42M ASL
            </div>
          </div>

          <div className="border border-[#2c2e33] p-4 rounded">
            <span className="text-[10px] text-[#8e9299] uppercase mb-3 block tracking-[0.5px]">Primary Recipient List</span>
            <ul className="text-[11px] space-y-2 text-[#e0e0e0]">
              <li className="flex items-start gap-2">• FBI National Command Center</li>
              <li className="flex items-start gap-2">• 911 Emergency Dispatch (DC-Metro)</li>
              <li className="flex items-start gap-2">• US Army Garrison Command Post</li>
              <li className="flex items-start gap-2">• Regional Military Intelligence</li>
            </ul>
          </div>

          <div className="border border-[#ff3b30] p-4 rounded bg-[#ff3b30]/10">
            <span className="text-[10px] text-[#ff3b30] uppercase mb-3 block tracking-[0.5px] flex items-center gap-2">
              <AlertTriangle className="w-3 h-3" /> Alert Severity
            </span>
            <div className="font-bold text-[18px] text-[#e0e0e0]">CRITICAL (LEVEL 1)</div>
            <div className="text-[10px] mt-1 opacity-80 text-[#e0e0e0]">
              Kidnapping / Illegal Human Subject Research
            </div>
          </div>
        </aside>

        {/* Log Container */}
        <section className="bg-[#0a0b0d] p-6 flex flex-col overflow-hidden">
          <div className="flex justify-between items-end mb-4 pb-2 border-b border-[#2c2e33]">
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-[#8e9299]" />
              <span className="text-[12px] font-bold uppercase">Transmission Log (Last 60 Mins)</span>
            </div>
            <span className="text-[10px] text-[#8e9299]">12 SUCCESSFUL BROADCASTS</span>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-[80px_100px_1fr] p-2 rounded-[2px] font-mono text-[12px] items-center ${
                  log.active ? 'log-entry-active' : 'bg-white/[0.03]'
                }`}
              >
                <span className="text-[#8e9299]">{log.time}</span>
                <span className="text-[#34c759] font-bold">{log.type}</span>
                <span className="text-[#e0e0e0] truncate">{log.msg}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-[80px] bg-[#151619] border-t border-[#2c2e33] flex items-center justify-between px-6 shrink-0">
        <div className="flex flex-col gap-1">
          <div className="text-[12px] text-[#8e9299] uppercase tracking-wider">
            Protected Subject: <span className="text-[#e0e0e0] font-bold ml-2">Edward Windsor (File ID: EW-7829-X)</span>
          </div>
          <div className="text-[10px] text-[#ff3b30]/60 uppercase font-mono">
            [ Simulation Mode: UI Prototype - No Real Signals Sent ]
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="px-6 py-3 border border-[#2c2e33] bg-transparent text-[#e0e0e0] uppercase text-[12px] font-semibold tracking-wider hover:bg-white/5 transition-colors flex items-center gap-2">
            <Activity className="w-4 h-4" /> Diagnostics
          </button>
          <button className="px-6 py-3 border border-[#2c2e33] bg-transparent text-[#e0e0e0] uppercase text-[12px] font-semibold tracking-wider hover:bg-white/5 transition-colors flex items-center gap-2">
            <Terminal className="w-4 h-4" /> Manual Ping
          </button>
          <button className="px-6 py-3 bg-[#ff3b30] border border-[#ff3b30] text-white uppercase text-[12px] font-bold tracking-wider hover:bg-[#ff3b30]/90 transition-colors flex items-center gap-2">
            <Power className="w-4 h-4" /> Emergency Abort
          </button>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2c2e33;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
