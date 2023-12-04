const MainHeadline = () => {
   return (
      <section className="z-50 flex flex-col items-center gap-5 absolute inset-0 mx-auto top-[40%]">
         <img src="/assets/images/header-title-mobile.png" alt="" className="w-64" />
         <img src="/assets/images/names.png" alt="" className="w-72"/>
         <hr className="w-44 border-1 border-[#C49F5F] " />
         <h3 class="text-center text-white text-[22px] mt-2 drop-shadow-lg
            lg:text-4xl lg:mt-10">
            9 de marzo 2024
         </h3>
      </section>
   )
}

export default MainHeadline