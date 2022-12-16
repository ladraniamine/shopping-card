
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy, delletAllCards } from '../redux/cardSlice'

const ProductsComponent = () => {
    const {shoppingcard} = useSelector(state => state.card)

    const dispatch = useDispatch()
    const displayCards = shoppingcard.length != 0 ? shoppingcard.map(card =>(
        <div className='col-12 row mx-0 px-0 py-2 align-items-center text-center'  key={card.id}>
            <div className='col-3'>
                <div className='product-image' style={{"width":"50px", "height":"50px","backgroundColor":"red","borderRadius":"50%","overflow":"hidden"}}>
                    <img className='img-fluid h-100' src={card.nameOfProduct == "google play cards"?require("../images/google-play.jpg"):require("../images/amazin-card.jpg")} />
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
        </div>
    )):<div className='text-center'>there is no card</div>

        const totaleprice = useCallback(()=>{
            let totalePrice =0 
   
        if(shoppingcard.length == 0){
            totalePrice = 0
        }else{
            //take the price * qnt 
           const returnpriceALHPA = shoppingcard.map( card => card.price * card.qnt)
           
           const returnprice = returnpriceALHPA.reduce((acc , curr)=>{
                return acc + curr
           }) 
          totalePrice =  returnprice
        }
        return totalePrice
        },[shoppingcard])

        const hanldebuy = ()=>{
            dispatch(buy({totalePrice: totaleprice()}))
        }
    
  return (
    <div className=' w-100 h-100 row mx-0' style={{"alignContent":"space-between"}}>
        <div className='row w-100  mx-0 px-0 '>
                {displayCards}
        </div>

        <div className='row mx-0 w-100 align-items-center mt-4'>
            <div className='col-8 '>
                       <div className='my-buttons'>
                            <button className='btn btn-danger' style={{"fontSize":"10px" ,"marginRight":"4px"}}
                                onClick={()=>{dispatch(delletAllCards())}}
                            >dellet all</button>
                            <button className='btn btn-success' style={{"fontSize":"10px"}}
                            onClick={hanldebuy}
                            >
                                
                            buy</button>
                       </div>
            </div>
            <div className='col-4 '>
                <div className='total-price px-2 text-danger' style={{"fontSize":"25px","fontWeight":"bold"}}>
                    {totaleprice()}$
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsComponent