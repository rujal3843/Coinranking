import { useNavigate } from "react-router-dom";
import { useGetCoinsQuery } from "../app/cryptoApi";

export const CryptoCars = () => {
  const { data, error, isLoading } = useGetCoinsQuery();
  const nav = useNavigate()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5 ">
 <h1 className='fixed inset-x-0 top-0 text-center text-[30px] font-bold bg-slate-600 mb-5 '>Coinranking Using RapidApi</h1>

      {data.data.coins.map((coin) => {
        return <div onClick={()=> nav(`/crypto/${coin.uuid}`)} key={coin.uuid} >

        <div key={coin.uuid} className="border border-solid  p-4 shadow-lg cursor-pointer">

          <div className="flex gap-2">
            <h1>{coin.rank}</h1>
            <p className="font-bold">{coin.name}</p>
            <h1 className="bg-green-200 inline-block text-[15px]">{coin.symbol}</h1>
          </div>

          <img className="h-[100px]" src={coin.iconUrl} alt="" />
          <p>Market cap:</p>
          <p>{coin.price}</p>

          <div className="flex gap-2">
            <p>Daily change:</p>
            <p className="bg-green-200 inline-block">{coin.change}</p>
          </div>

        </div>
        </div>
      })}
    </div>
  );
};
