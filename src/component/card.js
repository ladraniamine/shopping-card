import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataCards } from '../redux/dataSlice'
import { addtocard } from '../redux/cardSlice'

const Card = () => {
  
  const dispatch = useDispatch()

  //======= dispatch getDataCards() action when application is open =====
    useEffect(()=>{                                                    //
      dispatch(getDataCards())                                         //
    },[dispatch])                                                      //
  //=====================================================================

  //======================== get data from initialstate =================
    const {cards} = useSelector(state => state.data) 
    // console.log(cards)                  //
    const {isloading}= useSelector(state=>state.data)                  //
  //=====================================================================

  //=========================== return cards fulfields ==================
  const returndatacard =  cards?cards.map( card =>(
      <div className='col-sm-6 col-md-4 col-lg-3' key={card.id} >
        <div className="card my-3 mx-auto" style={{"maxWidth":"18rem"}}>
          <img src={card.nameOfProduct == "google play cards"?require("../images/google-play.jpg"):require("../images/amazin-card.jpg")} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.nameOfProduct} <span style={{"fontWeight":"bold" , "color":"#0033c5"}}>{card.price}$</span></h5>
            <div className='mb-2'>stock: <strong>{card.stock}</strong></div>
            <button className="btn btn-primary" onClick={()=>{dispatch(addtocard({id:card.id}))}}>add to card</button>
          </div>
        </div>
      </div>)
   ):<idv>there is no card</idv>
   //=====================================================================

   //========================= return cards pending ======================
   const duplicatPendingCards = [1,2,3,4,5,6,7,8]
   const returnCardPending = <div className='col-sm-6 col-md-4 col-lg-3'  >
        <div className="card my-3 mx-auto" style={{"maxWidth":"18rem"}}>
          <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_184dce5e938%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_184dce5e938%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title bg-light"> <span className='bg-light'></span></h5>
            <div></div>
            <button className="btn btn-primary w-50 h-20"></button>
          </div>
        </div>
                             </div>
  //=======================================================================
   return (  
      <>
        {isloading?duplicatPendingCards.map(card => returnCardPending):returndatacard}
      </>
  )
}

export default Card