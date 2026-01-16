import { FaQuoteLeft } from "react-icons/fa";

export const Testimonial = () => (
  <section className="py-24 bg-slate-50 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <FaQuoteLeft className="text-4xl text-emerald-200 mx-auto mb-8" />
      <p className="text-2xl font-medium text-slate-800 mb-8 italic leading-relaxed">
        "CashFlow helped me track where every dollar was going. I discovered I was spending $200 on unused subscriptions!"
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="w-14 h-14 bg-emerald-500 rounded-full border-4 border-white shadow-lg" />
        <div className="text-left">
          <h5 className="font-bold">Sarah Jenkins</h5>
          <p className="text-sm text-slate-500">Freelance Designer</p>
        </div>
      </div>
    </div>
  </section>
);