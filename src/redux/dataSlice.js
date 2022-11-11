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
                    stock:100
                },
                {
                    id:2,
                    nameOfProduct: "google play cards",
                    price:15,
                    image:require('../images/google-play.jpg'),
                    stock:100
                },
                {
                    id:3,
                    nameOfProduct: "google play cards",
                    price:20,
                    image:require('../images/google-play.jpg'),
                    stock:100
                },
                {
                    id:4,
                    nameOfProduct: "google play cards",
                    price:50,
                    image:require('../images/google-play.jpg'),
                    stock:100
                },
        
        
                {
                    id:5,
                    nameOfProduct: "amazon cards",
                    price:10,
                    image:require('../images/amazin-card.jpg'),
                    stock:100
                },
                {
                    id:6,
                    nameOfProduct: "amazon cards",
                    price:15,
                    image:require('../images/amazin-card.jpg'),
                    stock:100
                },
                {
                    id:7,
                    nameOfProduct: "amazon cards",
                    price:20,
                    image:require('../images/amazin-card.jpg'),
                    stock:100
                },
                {
                    id:8,
                    nameOfProduct: "amazon cards",
                    price:50,
                    image:require('../images/amazin-card.jpg'),
                    stock:100
                },
        

        ],
        shoppingcard:[],
        idcard:[],
        newshoppingcard:[]
    },

    reducers:{
        addtocard:(state,action)=>{
            //filter the card that i clicked
        let mycard = state.data.filter(card => card.id === action.payload.id) 
            //add the qtn to this card filtred and give it a value = 1
        mycard[0].qnt = 1 ; 
            //id of the card i clicked maybe i will need it later maybe
        state.idcard[0] = action.payload.id
            //push this card to shopping card collection
       state.shoppingcard.push(mycard[0])
            //take the addition of dublicate element and add it in qtn
       for (let i = 0; i < state.shoppingcard.length; i++) {  
            window['arr'+i] = state.shoppingcard.filter( item => item.id == i ) 
            window['num'+i] = window['arr'+i].length
            state.shoppingcard.map((e)=>{
                if(e.id == i){
                    e.qnt = window['num'+i]
                }
            })
        }
            // remove the duplicate element
        let newarray = state.shoppingcard.reduce((unique, o)=>{
                if(!unique.some(obj=>obj.id === o.id)){
                    unique.push(o)
                }
                return unique;
        },[])
            //the clean shopping card and it ready to use it
        state.newshoppingcard = newarray

    }
}




})

export const {addtocard} = dataSlice.actions
export default dataSlice.reducer