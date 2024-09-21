import Image from "next/image"
import hug from "../../public/images/hug.png"
import GreenButton from "./GreenButton";
const CardAd = () => {
    return (
      <div className="mt-14 hidden justify-center lg:flex md:flex">
        <div className="">
          <Image src={hug} alt={"ppl"} height={520} width={600} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-gray-400 font-medium">SUMMER 2024</h2>
          <div className="font-bold text-black text-4xl m-4">
            <h1 className="">Part of the Neural </h1>
            <h1>Universe</h1>
          </div>
          <div className="font-light text-gray-600">
            <h3>
              We know how large objects will act, but things on a small scale.
            </h3>
            <h3>but things on a small scale</h3>
          </div>
          <div className="flex gap-3">
          <GreenButton className="text-white">
            BUY NOW
          </GreenButton>
          <GreenButton className="text-green-600 bg-white border-green-600 border-2">
            READ MORE
          </GreenButton>
          </div>
        </div>
      </div>
    );
}
export default CardAd