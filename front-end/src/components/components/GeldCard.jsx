import { BgGeldCard, WaveLogo, WhiteGeld, WhitePlus } from "../svg";

export const GeldCard = () => {
  return (
    <div className="bg-blue-500 rounded-3xl card w-96 p-8 bg-[url('/Noise.png')]">
      <div className="flex flex-col gap-12">
        <div className="flex gap-2 items-center">
          <WhitePlus />
          <WhiteGeld />
        </div>
        <div className="flex flex-col justify-start">
          <div className="cash">Cash</div>
          <div className="flex justify-between items-center">
            <p className="money">10,000,00</p>
            <WaveLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
