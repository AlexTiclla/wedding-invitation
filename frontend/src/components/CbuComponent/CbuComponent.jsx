import { ModalContext } from "../../context/ModalContext"
import { useContext, useState } from "react"
import './CbuComponent.css'


const CbuComponent = () => {

   const { setModal } = useContext(ModalContext);
   const [ copied, setCopied ] = useState(false);

   const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 1000);
   }

   return (
      <div className="flex flex-col w-[320px] rounded-md overflow-y-scroll shadow-md h-full
         md:w-8/12 md:h-5/6 md:self-center">

         <header className="relative flex flex-col items-center justify-start gap-2  w-full rounded-t-md
            bg-[url('/assets/backgrounds/cbu-header-vertical.png')] bg-no-repeat bg-cover bg-bottom ">
            <div className="h-[18vh] lg:h-[30vh] flex flex-col justify-center gap-2">
               <h2 className="text-xl font-semibold text-center text-white z-50
                  lg:text-3xl">
                  ¿No sabés que <br></br> regalarnos?
               </h2>
               <h3 className="text-base font-medium text-center text-gray-dark z-50
                  lg:text-xl">
                  Nuestros datos bancarios:
               </h3>
            </div>
            <img 
               onClick={ () => setModal( false ) }
               src="./assets/images/btn-close.png" 
               alt=" Boton cerrar " 
               className="absolute top-4 right-4 h-10 cursor-pointer rounded-md z-50
                  transition-all delay-50 duration-150 hover:cursor-pointer hover:scale-90 hover:drop-shadow-md hover:rotate-90" 
            />
            <img src="./assets/images/cbu-header-pieces-02.png" alt="" className="h-28 absolute bottom-5 right-5 jumping-element lg:h-40 lg:bottom-16 lg:right-32" />
            <img src="./assets/images/cbu-header-pieces-01.png" alt="" className="h-28 absolute top-5 left-2 jumping-element-reverse lg:h-40 lg:top-16 lg:left-32" />
            {/* <img src="./assets/images/cbu-header-pieces-03.png" alt="" className="h-8 absolute bottom-2 right-25 jumping-element lg:h-10 lg:bottom-8" /> */}
         </header>

         <main className='flex flex-col items-center gap-8 grow bg-cream p-6 text-gray-dark text-sm'>

            {/* Patagonia Bank Section */}
            <article className="flex flex-col gap-2 w-full
            lg:w-[450px]">
               <section className="flex items-center gap-2">
                  <img src="./assets/images/green-arrows-icon.png" alt="" className='h-6'/>
                  <h2 className='font-semibold text-base'>BANCO PATAGONIA</h2>
               </section>
               <div className="flex flex-col gap-1.5">
                  <div className='flex-wrap'>
                     <span className='italic'>Titular de cuenta :</span>
                     <span className='font-semibold'> Federica Risso Patrón</span>
                  </div>
                  <div className='flex items-center gap-2 flex-wrap'>
                     <span className='italic'>Alias :</span>
                        <div className='flex items-center gap-2'>
                           <span className='font-semibold'> FEDE.Y.FEDE</span>
                        </div>
                        <button
                           className="group relative inline-flex " >
                           <img 
                              onClick={ () => copyToClipboard('FEDE.Y.FEDE') } 
                              src="./assets/images/copy-icon.png" 
                              alt=" Boton copiar " 
                              title='Copiar' 
                              className='h-6 cursor-pointer
                              transition origin-bottom-left duration-300 ease-in-out hover:scale-110 hover:rotate-3' />
                           <div className="hidden group-hover:block">
                              <div
                                 className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-cream before:-top-2">
                                 <div className={`rounded-md py-1 px-2 ${ copied ? 'bg-mustard' : 'bg-green' }`}>
                                    <p className="whitespace-nowrap">{ copied ? 'Copiado!' : 'Copiar' }</p>
                                 </div>
                              </div>
                           </div>
                        </button>
                  </div>
                  <div className='flex-wrap'>
                     <span className='italic'>CUIL/CUIT :</span>
                     <span className='font-semibold'> 27351838855</span>
                  </div>
                  <div className='flex items-center gap-2 flex-wrap'>
                     <span className='italic'>CBU :</span>
                     <div className='flex items-center gap-2'>
                        <span className='font-semibold'> 0340060908600037774006</span>
                        <button
                           className="group relative inline-flex " >
                           <img 
                              onClick={ () => copyToClipboard('0340060908600037774006') } 
                              src="./assets/images/copy-icon.png" 
                              alt=" Boton copiar " 
                              title='Copiar' 
                              className='h-6 cursor-pointer
                              transition origin-bottom-left duration-300 ease-in-out hover:scale-110 hover:rotate-3' />
                           <div className="hidden group-hover:block">
                              <div
                                 className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-[#EAE8E4] before:-top-2">
                                 <div className={`rounded-md py-1 px-2 ${ copied ? 'bg-mustard' : 'bg-green' }`}>
                                    <p className="whitespace-nowrap">{ copied ? 'Copiado!' : 'Copiar' }</p>
                                 </div>
                              </div>
                           </div>
                        </button>
                     </div>
                  </div>
               </div>
            </article>

            {/* Dolars Section */}
            <article className="flex flex-col gap-2 w-full
               lg:w-[450px]">
               <section className="flex items-center gap-2">
                  <img src="./assets/images/green-arrows-icon.png" alt="" className='h-6'/>
                  <h2 className='font-semibold text-base'>DINERO EN MONEDA EXTRANJERA</h2>
               </section>
               <p >
                  <span className='italic text-sm leading-6'>
                     No tenemos cuentas para recibir dinero extranjero, por lo tanto 👉🏼 sobre en mano.<br></br>
                     <span className='font-semibold not-italic'> Requisito único : </span>
                     No dólar cara chica o estropeado (después nadie nos los recibe 😥)
                  </span>
               </p>
            </article>

            {/* Western Union Section */}
            <article className="flex flex-col gap-2 w-full
               lg:w-[450px]">
               <section className="flex items-center gap-2">
                  <img src="./assets/images/green-arrows-icon.png" alt="" className='h-6'/>
                  <h2 className='font-semibold text-base'>WESTERN UNION</h2>
               </section>
               <p >
                  <span className='italic text-sm leading-6'>
                     Si estas afuera y de alguna manera querés hacernos llegar tu cariño 👉🏼 Western Union.
                     Y no olvides mandarnos el comprobante. 😏
                  </span>
               </p>
               <div className='flex items-center gap-2 flex-wrap'>
                  <span className='italic'>Nombre :</span>
                  <div className='flex items-center gap-2'>
                     <span className='font-semibold'> Federica Risso Patrón</span>
                     <button
                        className="group relative inline-flex " >
                        <img 
                           onClick={ () => copyToClipboard('Federica Risso Patrón') } 
                           src="./assets/images/copy-icon.png" 
                           alt=" Boton copiar " 
                           title='Copiar' 
                           className='h-6 cursor-pointer
                           transition origin-bottom-left duration-300 ease-in-out hover:scale-110 hover:rotate-3' />
                        <div className="hidden group-hover:block">
                           <div
                              className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-[#EAE8E4] before:-top-2">
                              <div className={`rounded-md py-1 px-2 ${ copied ? 'bg-mustard' : 'bg-green' }`}>
                                 <p className="whitespace-nowrap">{ copied ? 'Copiado!' : 'Copiar' }</p>
                              </div>
                           </div>
                        </div>
                     </button>
                  </div>
               </div>
               <div className='flex items-center gap-2 flex-wrap'>
                  <span className='italic'>DNI :</span>
                  <div className='flex items-center gap-2'>
                     <span className='font-semibold'> 35183885</span>
                     <button
                        className="group relative inline-flex " >
                        <img 
                           onClick={ () => copyToClipboard('35183885') } 
                           src="./assets/images/copy-icon.png" 
                           alt=" Boton copiar " 
                           title='Copiar' 
                           className='h-6 cursor-pointer
                           transition origin-bottom-left duration-300 ease-in-out hover:scale-110 hover:rotate-3' />
                        <div className="hidden group-hover:block">
                           <div
                              className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-[#EAE8E4] before:-top-2">
                              <div className={`rounded-md py-1 px-2 ${ copied ? 'bg-mustard' : 'bg-green' }`}>
                                 <p className="whitespace-nowrap">{ copied ? 'Copiado!' : 'Copiar' }</p>
                              </div>
                           </div>
                        </div>
                     </button>
                  </div>
               </div>
               <article className='flex flex-col gap-3 items-center'>
                  <hr className='w-48 border border-[#5D7551]' />
                  <h2 className='text-lg font-medium'>¡Desde ya mil gracias!</h2>
               </article>
            </article>

         </main>

         <footer className='h-[8vh] bg-green flex items-center justify-center rounded-b-md'>
            <img src="./assets/images/cbu-footer.png" alt="" className=" h-3/6" />
         </footer>

      </div>
   )
}

export default CbuComponent