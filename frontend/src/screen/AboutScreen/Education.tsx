const Education = () => {
  return (
    <section className="max-w-6xl  flex items-center flex-col gap-10 sm:gap-20 m-auto mb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main text-center">
        Education
      </h2>
      <div className="flex max-sm:flex-col w-full gap-4">
        <div className="flex-1 flex flex-col gap-7 border-2 justify-between bg-[rgba(255,255,255,0.005)] rounded-lg dark:border-[rgba(248,248,248,0.02)] p-5">
          <h3 className="text-main font-bold sm:text-lg leading-none">
            BCA – Bachelor of Computer Applications
          </h3>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex">
              <p className="bg-main-ligt px-3 py-1 sm:text-sm text-xs rounded-full text-main font-medium ">
                2023 – Present
              </p>
            </div>
            <p className="max-sm:text-sm text-second font-medium dark:text-zinc-400">
              Atal Bihari Vajpayee Vishwavidyalaya (Bilaspur), 2nd Year
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-7 border-2 justify-between bg-[rgba(255,255,255,0.005)]   rounded-lg dark:border-[rgba(248,248,248,0.02)] p-5">
          <h3 className="text-main font-bold sm:text-lg leading-none">
            12th (Commerce Stream)
          </h3>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex">
              <p className="bg-main-ligt px-3 py-1 sm:text-sm text-xs rounded-full text-main font-medium ">
                Completed in 2023
              </p>
            </div>
            <p className="max-sm:text-sm text-second font-medium dark:text-zinc-400">
              Dayanand Public School, Korba,Chhattisgarh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
