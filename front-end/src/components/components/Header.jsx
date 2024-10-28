// import React from 'react'

import { Logo, PlusIcon } from "../svg";
import Link from "next/link";
import { useRouter } from "next/router";

// export const Header = () => {
//   return (
//     <header className="bg-white p-4 border-b">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <span className="text-blue-600 font-bold text-xl">Geld</span>
//           <nav className="space-x-4">
//             <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg">
//               Dashboard
//             </button>
//             <button className="px-4 py-2">Records</button>
//           </nav>
//         </div>
//         <div className="flex items-center space-x-4">
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
//             + Record
//           </button>
//           <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//         </div>
//       </div>
//     </header>
//   );
// };

export const Header = ({ dashboard, records }) => {
  return (
    <div className="w-full flex justify-between items-center px-[120px]">
      <div className="flex">
        <div className=" flex gap-6">
          <div>
            <Logo />
          </div>
          <Link
            href="/dashboard"
            className={`text-[#0F172A] text-base font-roboto py-2 cursor-pointer ${
              dashboard ? "font-semibold" : "font-normal"
            }`}
          >
            Dashboard
          </Link>

          <Link
            href="/records"
            className={`text-[#0F172A] text-base font-roboto py-2 cursor-pointer ${
              records ? "font-semibold" : "font-normal"
            }`}
          >
            Records
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="btn btn-info text-white bg-blue-500">
          <PlusIcon />
          Record
        </div>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};
