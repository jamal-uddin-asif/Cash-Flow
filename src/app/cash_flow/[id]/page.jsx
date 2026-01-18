import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaDollarSign, FaRegCalendarAlt, FaRegClock, FaTags, FaQuoteLeft } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineDownload, HiOutlinePencilAlt } from "react-icons/hi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

import info from '../../../../public/cash-flow.json'

const  detailsPage= async({params}) => {
    const {id} = await params

    //  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cash-flow.json`)
    // const info = await res.json()
    
    const data = info.find(f=> f._id == id)
    const isIncome = data.type === 'income';
    console.log(data)
    return (
        <div>
        <div className="min-h-screen bg-[#f8fafc] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link href={'/cash_flow'} className="group flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-all mb-8 font-semibold">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Cash Flow
        </Link>

        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          
          {/* Header Section: Amount & Status */}
          <div className={`relative p-10 text-center ${isIncome ? 'bg-emerald-50' : 'bg-rose-50'}`}>
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl mb-4 shadow-lg ${isIncome ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
              <FaDollarSign className="text-2xl" />
            </div>
            
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-2">
              {data.category} Transaction
            </p>
            
            <h1 className={`text-6xl font-black mb-4 ${isIncome ? 'text-emerald-600' : 'text-rose-600'}`}>
              {isIncome ? '+' : '-'}${data.amount.toLocaleString()}
            </h1>

            <div className="flex items-center justify-center gap-2 text-slate-600 bg-white/60 backdrop-blur-sm w-fit mx-auto px-5 py-2 rounded-full border border-white shadow-sm">
              <IoCheckmarkCircleSharp className={isIncome ? 'text-emerald-500' : 'text-rose-500'} />
              <span className="text-xs font-bold uppercase tracking-tighter">Verified & Processed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-slate-50">
            
            {/* Details List (Left Side) */}
            <div className="lg:col-span-7 p-8 md:p-12 border-r border-slate-50">
              <h3 className="flex items-center gap-2 text-slate-800 font-bold mb-6 text-lg">
                <HiOutlineDocumentText className="text-indigo-500 text-2xl" />
                Transaction Summary
              </h3>

              <div className="space-y-6">
                {/* Note Section */}
                <div className="relative p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <FaQuoteLeft className="absolute top-4 left-4 text-slate-200 text-xl" />
                  <p className="text-slate-600 leading-relaxed italic whitespace-pre-line pl-6">
                    {data.note}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase mb-1">
                      <FaRegCalendarAlt /> Date
                    </div>
                    <p className="text-slate-800 font-bold">{new Date(data.date).toDateString()}</p>
                  </div>
                  
                  <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase mb-1">
                      <FaRegClock /> Time
                    </div>
                    <p className="text-slate-800 font-bold">{new Date(data.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-2xl">
                   <FaTags className="text-indigo-400" />
                   <span className="text-sm font-semibold text-indigo-700">Category: {data.category}</span>
                </div>
              </div>
            </div>

            {/* Receipt Image (Right Side) */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-slate-50/30">
              <h3 className="text-slate-800 font-bold mb-6 text-lg">Proof of Transaction</h3>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <img 
                  src={data.image} 
                  alt="Receipt close up" 
                  className="relative w-full h-[350px] object-cover rounded-[2.5rem] shadow-sm border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Action Footer */}
       

        </div>
      </div>
    </div>
        </div>
    );
};

export default detailsPage;