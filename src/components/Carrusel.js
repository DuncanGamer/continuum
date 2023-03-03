import "tw-elements";
import Market1 from "./Market1";
import Market2 from "./Market2";

function Carrusel(props) {



  return (
    <>
      <div  id="header" className="pt-16 bg-black sm:pt-20">
        <div className=" container m-auto">
          <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark "
            data-bs-ride="carousel"
          >
            <div className=" z-1 carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <img
                  src={props.imageURL}
                  className="block w-full"
                  alt="Motorbike Smoke"
                />
                <div className=" z-0 absolute top-44 left-36">
                <Market1
                  Titulo1={props.Titulo1}
                  Titulo2={props.Titulo2}
                  Titulo3={props.Titulo3}
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
