export const Pricing = () => (
  <section className="py-24 px-6">
    <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-[2rem] p-10 text-center shadow-xl shadow-slate-100">
      <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase">Best Value</span>
      <h3 className="text-3xl font-bold mt-4 mb-2">CashFlow Pro</h3>
      <div className="text-5xl font-black my-6">$9.99<span className="text-lg font-normal text-slate-400">/mo</span></div>
      <ul className="text-slate-600 space-y-3 mb-8">
        <li>✓ Unlimited Bank Connections</li>
        <li>✓ AI Budgeting Assistant</li>
        <li>✓ Export to Excel/PDF</li>
      </ul>
      <button className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition-all">
        Get Started Now
      </button>
    </div>
  </section>
);