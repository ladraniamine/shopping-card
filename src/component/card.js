import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocard } from '../redux/dataSlice';

const Card = () => {


  const {data} = useSelector(state=> state.data);
  const username = useSelector(state=> state.login[2]);
 
  
  const dispatch = useDispatch();

  let isUsername ;
  
  if(username[0] !== undefined ){
    isUsername = true
  } else{
    isUsername = false
  }
    


  return (
    
  <>
      {data?data.map((item)=>{
        return(<div className='col-sm-6 col-md-4 col-lg-3' key={item.id} >
        <div className="card my-3 mx-auto" style={{"maxWidth":"18rem"}}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.nameOfProduct} <span>{item.price}$</span></h5>
            <button   className={isUsername?"btn btn-primary":"btn btn-primary "} onClick={()=>{dispatch(addtocard({id:item.id}))}} >add to card</button>
          </div>
        </div>
    </div>)
        
      }): <div>there is no data here</div>
      }
  </>    
    

  )
}

export default Card