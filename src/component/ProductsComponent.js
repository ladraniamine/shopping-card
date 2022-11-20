
import React from 'react'

import {  useSelector } from 'react-redux'

const ProductsComponent = () => {
    const {newshoppingcard} = useSelector(state=> state.data)
    
    let total = 0
    for (let index = 0; index < newshoppingcard.length; index++) {
        window["totalPriceCard"+index] = newshoppingcard[index].price * newshoppingcard[index].qnt
        total += window["totalPriceCard"+index]
    }
    
  return (
    <div className=' w-100 h-100 row mx-0' style={{"alignContent":"space-between"}}>
        <div className='row w-100  mx-0 px-0 '>
       {newshoppingcard.length == 0?<div className='col-12 text-center m-0 p-0 align-items-center'>there is no card</div>:newshoppingcard.map((card)=>{
            return <div className='col-12 row mx-0 px-0 py-2 align-items-center text-center' key={card.id}>
                 <div className='col-3'>
                     <div className='product-image' style={{"width":"50px", "height":"50px","backgroundColor":"red","borderRadius":"50%","overflow":"hidden"}}>
                         <img className='img-fluid h-100' src={card.image} />
                     </div>
                 </div>
                 <div className='col-4'>
                     <div className='name-of-product'>
                         {card.nameOfProduct}
                     </div>
                 </div>
                 <div className='col-3'>
                     <div className='price'>
                         {card.price}$
                     </div>
                 </div>
                 <div className='col-2'>
                     <div className='quantite'>
                             {card.qnt}
                     </div>
                 </div>
                 <hr className='mt-2 m-auto' style={{"width":"50%"}}/>
             </div>})}
           
        </div>

        <div className='row mx-0 w-100 align-items-center mt-4'>
            <div className='col-8 '>
                       <div className='my-buttons'>
                            <button className='btn btn-warning' style={{"fontSize":"10px" ,"marginRight":"4px"}}>view all</button>
                            <button className='btn btn-success' style={{"fontSize":"10px"}}>buy</button>
                       </div>
            </div>
            <div className='col-4 '>
                <div className='total-price px-2 text-danger' style={{"fontSize":"25px","fontWeight":"bold"}}>
                    {total}$
                </div>
            </div>
        </div>
    </div>
    // add comment
  )
}

export default ProductsComponent