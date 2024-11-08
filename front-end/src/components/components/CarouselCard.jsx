// export const StatsCard = ({ type, amount, percentage, title, isBlue }) => {
//   const formatAmount = (value) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "decimal",
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(Math.abs(value));
//   };

import { ExpenseCard } from "./ExpenseCard";
import { GeldCard } from "./GeldCard";
import { IncomeCard } from "./IncomeCard";

//   return (
//     <Card className={isBlue ? "bg-blue-600 text-white" : ""}>
//       <CardContent className="p-6">
//         <div className="space-y-2">
//           <div className={`text-sm ${isBlue ? "opacity-80" : "text-gray-500"}`}>
//             {title}
//           </div>
//           <div
//             className={`text-2xl font-bold ${
//               type === "expense" ? "text-red-500" : ""
//             }`}
//           >
//             {type === "expense" ? "-" : ""}
//             {formatAmount(amount)}₮
//           </div>
//           {percentage && (
//             <div
//               className={`text-sm ${
//                 type === "income" ? "text-green-500" : "text-blue-500"
//               }`}
//             >
//               {percentage}% from last month
//             </div>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

export const CarouselCard = () => {
  return (
    <div className="w-full flex gap-6 px-[120px] justify-between">
      <GeldCard />
      <IncomeCard />
      <ExpenseCard />
    </div>
  );
};
