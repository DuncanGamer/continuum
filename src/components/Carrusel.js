import "tw-elements";
import Market1 from "./Market1";
import Market2 from "./Market2";

function Carrusel() {



  return (
    <>
      <div  id="header" className="pt-16 bg-black sm:pt-36">
        <div className=" container m-auto">
          <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark "
            data-bs-ride="carousel"
          >
            <div className=" z-1 carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <img
                  src="https://images.unsplash.com/photo-1587052579105-c957b0497535?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd1aXRhciUyMHBsYXllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  className="block w-full"
                  alt="Motorbike Smoke"
                />
                <div className=" z-0 absolute top-60 left-60">
                <Market1
                  Titulo1="Simplier."
                  Titulo2="Happier."
                  Titulo3=" Better concerts."
                  Paragraph=" "
                />
              </div>
              <div> 
               
              </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carrusel;
