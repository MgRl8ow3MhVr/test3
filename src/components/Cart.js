
const Cart =(props)=>{
    return (
        <div className='cart'>
            <div className='image_container'>
                <img className='image' src={props.image}/>
            </div>
            <div className='cartName'>{props.nom}</div>
            <div className='cartPrice'>{props.prix}</div>
            
            {/* VERSION EN PASSAGE DIRECT DU STATE et son setSTATE */}
            <button
                onClick={()=>{
                    props.setBasketV(props.basketV+1)
                }}
            >+ buy</button>

            {/* VERSION EN PASSAGE D'UNE FONCTION DEFINIE DANS APP */}
            {/* <button
                onClick={()=>{
                    props.addInBasket()
                }
                   }
            >+ buy</button> */}
        </div>
    )

    
}
export default Cart