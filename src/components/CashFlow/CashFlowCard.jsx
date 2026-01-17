import Link from 'next/link';
import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown, FaRegCalendarDays } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

const CashFlowCard = ({ data }) => {
  const isIncome = data.type === 'income';
  console.log(data)

  return (
    <div className=" bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 group">
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <img 
          src={data.image} 
          alt={data.category} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Type Badge */}
        <div className={`absolute top-4 right-4 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg ${
          isIncome ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'
        }`}>
          {data.type}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2 text-gray-400">
            <FaRegCalendarDays className="text-xs" />
            <span className="text-[11px] font-semibold uppercase tracking-tighter">
              {new Date(data.date).toLocaleDateString()}
            </span>
          </div>
          <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
            {data.category}
          </span>
        </div>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl font-black text-gray-900">
            ${data.amount.toLocaleString()}
          </span>
          {isIncome ? (
            <FaArrowTrendUp className="text-green-500 text-xl" />
          ) : (
            <FaArrowTrendDown className="text-red-500 text-xl" />
          )}
        </div>

        {/* Note Section (Tailored for 4 lines) */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
          <p className="text-sm text-gray-600 italic leading-relaxed whitespace-pre-line pl-4">
            {data.note}
          </p>
        </div>

        {/* Details Button */}
        <Link href={`/cash_flow/${data._id}`} className="w-full flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-green-500 text-white py-4 rounded-2xl font-bold text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-gray-200">
          <IoInformationCircleOutline className="text-xl" />
          Details
        </Link>
      </div>
    </div>
  );
};

export default CashFlowCard;