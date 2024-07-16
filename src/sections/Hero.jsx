const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col justify-center items-center min-h-screen  pb-56 bg-cover bg-center">
      <h1 className="flex justify-center font-anton text-[70px] mb-0 text-[#dfe2ff]">$GATOR</h1>
      <h2 className="flex justify-center font-anton text-[22px] mb-10 mt-0 text-[#dfe2ff]">INVESTI-GATOR RUG DETECTIVE</h2>
      <h1 className="flex justify-center font-anton text-[35px] mb-0 text-center px-4 break-words text-[#dfe2ff]">CA: 5bDLAe8rQ3nKakn8KNiubntVeXEqhLSqVNZxVAiEpump </h1>
      <a href="https://pump.fun/5bDLAe8rQ3nKakn8KNiubntVeXEqhLSqVNZxVAiEpump"><button className="mt-6 bg-[#5e5e78] text-[#dfe2ff] rounded-full px-10 py-4 hover:bg-[#5db226] font-anton text-[24px]">
        BUY $GATOR
      </button></a>
    </section>
  );
};

export default Hero;
