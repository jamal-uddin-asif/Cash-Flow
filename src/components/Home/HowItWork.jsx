export const Steps = () => (
  <section className="py-24 bg-white text-center px-6">
    <h2 className="text-3xl font-bold mb-16">Simple 3-Step Process</h2>
    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
      {[
        { step: "01", title: "Create Account", desc: "Sign up and set your financial goals." },
        { step: "02", title: "Link Bank", desc: "Securely connect your daily accounts." },
        { step: "03", title: "Save Money", desc: "Let AI optimize your monthly spending." },
      ].map((s, i) => (
        <div key={i} className="relative">
          <span className="text-7xl font-black text-slate-50 absolute -top-10 left-1/2 -translate-x-1/2 -z-10">{s.step}</span>
          <h4 className="text-xl font-bold mb-2">{s.title}</h4>
          <p className="text-slate-500">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);