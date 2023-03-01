

//   <h1 className=" text-4xl lg:text-7xl font-bold tracking-tight">
//   { props.Titulo1}<br/>
//   {props.Titulo2} <br/>
//   {props.Titulo3} </h1>
// <p className=" mt-2 lg:mt-5 text-sm lg:text-lg font-medium text-gray-500"> {props.Paragraph} </p>

import "../styles/Market1.css"

function Market1 (props){
    return(
        <>
       
       <div className=" ">
              
        <div className="text-box ">
        <h1 className="  heading-primary text-4xl lg:text-7xl font-bold tracking-tight">
          <span class="heading-primary-main">{ props.Titulo1}</span>
          <span class="heading-primary-sub">{props.Titulo2}</span>
          <span class="heading-primary-main">{props.Titulo3}</span>
        </h1>
       
      </div>
        </div>
        
        </>
    )
}
export default Market1