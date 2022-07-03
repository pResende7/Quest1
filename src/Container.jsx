import "./Container.css";

function Container({title, subtitle}){
	
	return( 
        <button className="base">
		<div>
		<h4 className='titulo'>{title}</h4> 
		<p className='descricao'>{subtitle}</p>
		 </div>
         </button>
	);
}

export default Container;
