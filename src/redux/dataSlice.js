import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({

    name:"data",
    initialState:{
        
        data:[

                {
                    id:1,
                    nameOfProduct: "google play cards",
                    price:10,
                    image:require('../images/google-play.jpg'),
                    stock:100,
                    qnt:1,
                },
                {
                    id:2,
                    nameOfProduct: "google play cards",
                    price:15,
                    image:require('../images/google-play.jpg'),
                    stock:100,
                    qnt:1,
                },
                {
                    id:3,
                    nameOfProduct: "google play cards",
                    price:20,
                    image:require('../images/google-play.jpg'),
                    stock:100,
                    qnt:1,
                },
                {
                    id:4,
                    nameOfProduct: "google play cards",
                    price:50,
                    image:require('../images/google-play.jpg'),
                    stock:100,
                    qnt:1,
                },
        
                {
                    id:5,
                    nameOfProduct: "amazon cards",
                    price:10,
                    image:require('../images/amazin-card.jpg'),
                    stock:100,
                    qnt:1,
                },
                {
                    id:6,
                    nameOfProduct: "amazon cards",
                    price:15,
                    image:require('../images/amazin-card.jpg'),
                    stock:100,
                    qnt:1,
                },
                {
                    id:7,
                    nameOfProduct: "amazon cards",
                    price:20,
                    image:require('../images/amazin-card.jpg'),
                    stock:100,
                    qnt:1,
                },
                {
                    id:8,
                    nameOfProduct: "amazon cards",
                    price:50,
                    image:require('../images/amazin-card.jpg'),
                    stock:100,
                    qnt:1,
                },
        
        ],
        shoppingcard:JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")).shoppingcard:[],
    },

    reducers:{
        addtocard:(state,action)=>{
                // filter the card that i clicked from the home page
                let mycard = state.data.filter(card => card.id === action.payload.id)
                //check if my shopping card array its empty or == []
                if(state.shoppingcard.length == 0 ){
                    //push that card to shopping card array
                    state.shoppingcard.push(mycard[0])
                    //=======add to the locale storage===========
                    let user = JSON.parse(localStorage.getItem("user"))
                    user.shoppingcard.push(mycard[0])
                    localStorage.setItem("user",JSON.stringify(user))
                    //===========================================
                }
                //in the case that i have card in my shopping card or != []
                else{
                  // this array return the card that i clicked if its exist in my shopping card
                  let existingCard = state.shoppingcard.filter( card => card.id === mycard[0].id)
                  //in the case that card its exist
                  if(existingCard.length != 0){
                        state.shoppingcard.map( card => {
                            if(card.id === mycard[0].id){
                                card.qnt += 1
                            }
                        })
                        //=======add to the locale storage===========
                        let user = JSON.parse(localStorage.getItem("user"))
                            user.shoppingcard.map( card => {
                                if(card.id === mycard[0].id){
                                    card.qnt += 1
                                }
                            })
                        localStorage.setItem("user",JSON.stringify(user))
                        //===========================================
                  }
                  //in the case that card its not existed
                  else{
                        state.shoppingcard.push(mycard[0])
                        //=======add to the locale storage===========
                        let user = JSON.parse(localStorage.getItem("user"))
                        user.shoppingcard.push(mycard[0])
                        localStorage.setItem("user",JSON.stringify(user))
                        //===========================================
                  }
                }
            }
     
    }
})

export const {addtocard} = dataSlice.actions
export default dataSlice.reducer