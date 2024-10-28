import { Header } from "../components/Header";

export const RecordsPage = () => {
  return (
    <div className="w-full h-screen">
      <Header dashboard={false} records={true} />
    </div>
  );
};
