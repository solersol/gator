const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col justify-center items-center min-h-screen  pt-0 p-32 bg-cover bg-center">
      <h1 className="flex justify-center font-anton text-[70px] mb-0 text-white">$GATOR</h1>
      <h2 className="flex justify-center font-anton text-[22px] mb-10 mt-0 text-white">INVESTI-GATOR RUG DETECTIVE</h2>
      <h1 className="flex justify-center font-anton text-[35px] mb-0 text-center px-4 break-words text-white">CA: INCOMING </h1>
      <a href="https://pump.fun/"><button className="mt-6 bg-blue-500 text-white rounded-full px-10 py-4 hover:bg-blue-700 font-anton text-[24px]">
        BUY $GATOR
      </button></a>
    </section>
  );
};

export default Hero;
