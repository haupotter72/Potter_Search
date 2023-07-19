import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="h-[100vh]  flex flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-3 flex flex-col items-center mt-32">
          <img className="   md:w-[30%] mb-8" src={Logo} alt="Logo" />
          <SearchInput />
       
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 font-semibold bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
             THOPOTTER IS A HANDSOME BOIZZ
            </button>
            <button className="h-9 px-4 font-semibold bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
             I AM A DARK LORD THOPOTTER
            </button>
          </div>
          <blockquote class="text-2xl pt-3 font-semibold italic text-center text-slate-900">
  <p4 className="pr-4">IF YOU LOVE  </p4>
  <span class="  before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block">
    <span class="relative text-white">THO POTTER</span>
  </span>
           <p4 className="pl-2">  SO MUCH, THEN LOVE ME NOW ! DONT'T WAIT FOR ANYTHING !</p4>
</blockquote>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
