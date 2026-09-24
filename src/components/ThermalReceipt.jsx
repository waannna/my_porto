import { Printer } from 'lucide-react';

export default function ThermalReceipt() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-sm mx-auto my-3 sm:my-4 font-mono text-[10px] sm:text-[11px] text-black">
      {/* Receipt Paper Container with Serrated Edge */}
      <div className="bg-white border-2 border-black p-3.5 sm:p-5 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Receipt Header */}
        <div className="text-center pb-2.5 sm:pb-3 border-b-2 border-dashed border-black">
          <p className="text-[9px] sm:text-[10px] tracking-widest text-zinc-600 font-bold uppercase">*** OFFICIAL RECEIPT ***</p>
          <h4 className="text-sm sm:text-base font-black tracking-tight uppercase mt-0.5">
            PATUNGANYUK POS
          </h4>
          <p className="text-[9px] sm:text-[10px] text-zinc-700">DIGITAL SETTLEMENT SLIP</p>
          <p className="text-[8px] sm:text-[9px] text-zinc-500 mt-0.5 sm:mt-1">REF: PY-2026-0916 — TERM 01</p>
        </div>

        {/* Transaction Metadata */}
        <div className="py-2.5 border-b border-dashed border-zinc-400 space-y-1 text-[10px]">
          <div className="flex justify-between">
            <span className="text-zinc-500">GROUP:</span>
            <span className="font-bold">LIBURAN YOGYA (5 MBRS)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">TIMESTAMP:</span>
            <span>16/09/2026 14:32 WIB</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">OPERATOR:</span>
            <span>ADE DERMAWAN (CREATOR)</span>
          </div>
        </div>

        {/* Expenses Table */}
        <div className="py-2.5 border-b-2 border-dashed border-black space-y-1.5">
          <div className="flex justify-between font-bold text-[10px] border-b border-black pb-1">
            <span>EXPENSE ITEM</span>
            <span>AMOUNT (IDR)</span>
          </div>

          <div className="space-y-1 text-[10px]">
            <div className="flex justify-between">
              <span>1x VILLA HOMESTAY [ADE]</span>
              <span>1.250.000</span>
            </div>
            <div className="flex justify-between">
              <span>1x RENTAL MOBIL [BUDI]</span>
              <span>600.000</span>
            </div>
            <div className="flex justify-between">
              <span>1x KULINER MALAM [CITRA]</span>
              <span>450.000</span>
            </div>
          </div>

          <div className="pt-2 border-t border-dashed border-zinc-400 space-y-0.5 text-[11px]">
            <div className="flex justify-between font-bold">
              <span>TOTAL EXPENSE:</span>
              <span>Rp 2.300.000</span>
            </div>
            <div className="flex justify-between text-zinc-700 text-[10px]">
              <span>SPLIT PER CAPITA:</span>
              <span>Rp 460.000 / pax</span>
            </div>
          </div>
        </div>

        {/* Who Owes Whom Algorithm Breakdown */}
        <div className="py-3 border-b-2 border-dashed border-black">
          <div className="bg-[#f0ece1] border border-black p-1.5 text-center mb-2 font-bold text-[10px] uppercase tracking-wider">
            WHO OWES WHOM — ALGORITHM OUTPUT
          </div>

          <div className="space-y-1 text-[10px]">
            <div className="flex justify-between">
              <span>• DANI → ADE</span>
              <span className="font-bold">Rp 350.000</span>
            </div>
            <div className="flex justify-between">
              <span>• EKO  → ADE</span>
              <span className="font-bold">Rp 440.000</span>
            </div>
            <div className="flex justify-between">
              <span>• DANI → BUDI</span>
              <span className="font-bold">Rp 110.000</span>
            </div>
            <div className="flex justify-between">
              <span>• CITRA → BUDI</span>
              <span className="font-bold">Rp 10.000</span>
            </div>
          </div>

          <div className="mt-2 text-[9px] text-zinc-600 italic border-t border-dashed border-zinc-300 pt-1">
            * 4 simplified settlements minimize 10 redundant transfers.
          </div>
        </div>

        {/* Barcode & Footer */}
        <div className="pt-3 text-center space-y-2">
          {/* Simulated Authentic Barcode */}
          <div className="flex justify-center items-center gap-[2px] h-6 px-4">
            {[4, 2, 6, 1, 3, 5, 2, 8, 3, 1, 4, 7, 2, 5, 1, 3, 6, 2, 4, 8, 3, 2, 5, 1, 4, 6].map((w, i) => (
              <div
                key={i}
                className="bg-black h-full"
                style={{ width: `${w % 3 + 1}px` }}
              />
            ))}
          </div>
          <p className="text-[9px] text-zinc-500 tracking-widest uppercase">
            PY-8921-9842-8812
          </p>
          <p className="text-[9px] font-bold uppercase tracking-wider">
            THANK YOU FOR SPLITTING FAIRLY!
          </p>
        </div>

        {/* Print / Action Button */}
        <div className="mt-4 pt-2 border-t border-black text-center print:hidden">
          <button
            onClick={handlePrint}
            className="w-full bg-black text-white py-1.5 font-bold uppercase text-[10px] flex items-center justify-center gap-1.5 hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer"
          >
            <Printer className="w-3 h-3" /> PRINT THERMAL SLIP
          </button>
        </div>
      </div>
    </div>
  );
}
