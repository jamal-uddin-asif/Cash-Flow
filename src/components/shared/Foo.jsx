import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => (
  <footer className="py-12 bg-emerald-950 border-t border-slate-100 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-black text-emerald-500 italic">
        CashFlow.
      </div>
      <div className="flex gap-8 text-sm font-medium text-slate-500">
        <a href="#" className="hover:text-emerald-500">
          Privacy
        </a>
        <a href="#" className="hover:text-emerald-500">
          Terms
        </a>
        <a href="#" className="hover:text-emerald-500">
          Security
        </a>
      </div>
      <div className="flex gap-4 text-xl text-slate-400">
        <FaTwitter className="hover:text-emerald-500 cursor-pointer" />
        <FaLinkedin className="hover:text-emerald-500 cursor-pointer" />
        <FaGithub className="hover:text-emerald-500 cursor-pointer" />
      </div>
    </div>
    <p className="text-center text-slate-300 text-xs mt-10">
      © 2024 CashFlow Inc. Built for financial freedom.
    </p>
  </footer>
);
