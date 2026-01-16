import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineGlobe } from "react-icons/hi";

export const Features = () => {
  const features = [
    { title: "Fast Sync", desc: "Sync your bank accounts in seconds.", icon: <HiOutlineLightningBolt className="text-2xl" /> },
    { title: "Bank Security", desc: "AES-256 encryption for your safety.", icon: <HiOutlineShieldCheck className="text-2xl" /> },
    { title: "Insights", desc: "Deep analytics of your spending habits.", icon: <HiOutlineChartBar className="text-2xl" /> },
    { title: "Global Access", desc: "Support for 100+ currencies worldwide.", icon: <HiOutlineGlobe className="text-2xl" /> },
  ];

  return (
    <section id="feature" className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, i) => (
        <div key={i} className="group p-8 border border-slate-100 rounded-3xl bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all text-emerald-500">
            {f.icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{f.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </section>
  );
};