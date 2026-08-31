import React, { useState } from 'react';
import {
  Milk,
  Mail,
  Lock,
  User,
  Briefcase
} from "lucide-react";

const BG_VIDEO = '/Grok-Video-7F6A1000-EF08-4491-A4E4-8EFC91E61178.MOV';

export default function App() {
  const [formType, setFormType] = useState<'login' | 'signup'>('login');
  const [isExpert, setIsExpert] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />
      {/* Milky gradient overlay for dairy theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-white/5 to-amber-950/20 mix-blend-overlay pointer-events-none" />

      {/* Login Card Overlay (Centered) */}
      {formType === 'login' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-sm px-4 sm:px-0">
          <div className="liquid-glass bg-white/[0.06] rounded-3xl p-8 border border-white/20 shadow-2xl relative">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                <Milk className="w-7 h-7 text-white fill-white/10" strokeWidth={1.5} />
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Welcome to <span className="underline decoration-white/20">Dairy Hub</span>
              </h1>
              <p className="text-white/50 mt-1.5 text-xs">Sign in to continue</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Email Address</label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 outline-none transition-all text-xs"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Password</label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 outline-none transition-all text-xs"
                    required
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-black font-semibold py-2.5 rounded-full hover:bg-white/90 transition-all flex items-center justify-center text-xs mt-6 shadow-lg shadow-black/10"
              >
                Sign In
              </button>
            </form>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10"></span>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-transparent px-2 text-white/40 font-medium">Or continue with</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <button className="w-full liquid-glass text-white border border-white/10 font-semibold py-2.5 rounded-full hover:bg-white/5 transition-all flex items-center justify-center text-xs">
                Sign in with Google
              </button>
              <button className="w-full liquid-glass text-white border border-white/10 font-semibold py-2.5 rounded-full hover:bg-white/5 transition-all flex items-center justify-center text-xs">
                Continue as Guest
              </button>
            </div>
            
            <div className="text-center mt-5">
              <p className="text-xs text-white/60">
                Don't have an account?
                <button 
                  onClick={() => setFormType('signup')}
                  className="text-white hover:underline font-semibold ml-1"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Signup Card Overlay (Centered) */}
      {formType === 'signup' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-md px-4 sm:px-0">
          <div className="liquid-glass bg-white/[0.06] rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-inner">
                <Milk className="w-6 h-6 text-white fill-white/10" strokeWidth={1.5} />
              </div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                Join <span className="underline decoration-white/20">Dairy Hub</span>
              </h1>
              <p className="text-white/50 mt-1 text-[11px]">Create your account to access our digital dairy guide</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 max-h-[55vh] overflow-y-auto pr-1">
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Full Name</label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 outline-none transition-all text-xs"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Email Address</label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 outline-none transition-all text-xs"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Password</label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 outline-none transition-all text-xs"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">Gender</label>
                  <select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all text-xs appearance-none cursor-pointer">
                    <option value="male" className="bg-zinc-900 text-white">Male</option>
                    <option value="female" className="bg-zinc-900 text-white">Female</option>
                    <option value="other" className="bg-zinc-900 text-white">Other</option>
                  </select>
                </div>
              </div>

              {/* Expert Registration Toggle */}
              <div className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-white/10 p-3 bg-white/5">
                <input
                  type="checkbox"
                  id="expert-toggle"
                  checked={isExpert}
                  onChange={(e) => setIsExpert(e.target.checked)}
                  className="mt-1 border-white/30 text-white bg-transparent rounded cursor-pointer"
                />
                <div className="space-y-0.5 leading-none">
                  <label htmlFor="expert-toggle" className="text-xs font-bold text-white cursor-pointer">Sign up as an Expert</label>
                  <p className="text-[9px] text-white/60">
                    Offer paid consulting and help other users.
                  </p>
                </div>
              </div>

              {/* Conditional Expert Fields */}
              {isExpert && (
                <div className="space-y-3.5 border border-white/10 p-3 rounded-xl bg-white/5">
                  <h3 className="text-xs font-bold text-white flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-white/80" /> Expert Profile Setup
                  </h3>

                  <div className="grid grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[10px] font-semibold text-white/80 mb-1">Experience (Years)</label>
                      <input type="number" defaultValue="5" className="w-full px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all text-xs" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-white/80 mb-1">Fee (₹/hr)</label>
                      <input type="number" defaultValue="500" className="w-full px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all text-xs" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-white/80 mb-1">WhatsApp / Phone Number</label>
                    <input type="tel" placeholder="+91..." className="w-full px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all text-xs" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-white/80 mb-1">Specialization</label>
                    <select className="w-full px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all text-xs appearance-none cursor-pointer">
                      <option value="Dairy Technology" className="bg-zinc-900 text-white">Dairy Technology</option>
                      <option value="Food Safety & Quality" className="bg-zinc-900 text-white">Food Safety & Quality</option>
                      <option value="Food Processing" className="bg-zinc-900 text-white">Food Processing</option>
                      <option value="Milk Procurement" className="bg-zinc-900 text-white">Milk Procurement</option>
                    </select>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-white text-black font-semibold py-2.5 rounded-full hover:bg-white/90 transition-all flex items-center justify-center text-xs font-bold shadow-lg shadow-black/10"
              >
                Create Account
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="text-xs text-white/60">
                Already have an account?{' '}
                <button 
                  onClick={() => setFormType('login')}
                  className="text-white hover:underline font-semibold ml-1"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
