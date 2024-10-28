// import { Header } from "../components/Header";

import { Header } from "../components/Header";

// export const DashboardPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="max-w-7xl mx-auto p-6 space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <StatsCard type="cash" amount={10000.0} title="Cash" isBlue />
//           <StatsCard
//             type="income"
//             amount={1200000}
//             percentage={32}
//             title="Your Income"
//           />
//           <StatsCard
//             type="expense"
//             amount={-1200000}
//             percentage={32}
//             title="Total Expenses"
//           />
//         </div>
//         <Charts />
//         <RecentRecords />
//       </main>
//     </div>
//   );
// };

export const DashboardPage = () => {
  return (
    <div className="w-full">
      <Header dashboard={true} records={false} />
    </div>
  );
};
