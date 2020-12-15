import Cart from './Cart.js'

// myBags est un objet qui simule ce que le Back-End pourrait envoyer à notre front-end
const myBags=[
    {name:'sac1',price:21,img:'https://checkmybags.netlify.app/static/media/bandouliere-poignee-metal-et-bi-matiere.8bdd8c3c.jpg'},
    {name:'sac2',price:16,img:'https://checkmybags.netlify.app/static/media/sac-cabas-detail-tresse.8647209d.jpg'},
    {name:'sac3',price:19,img:'https://checkmybags.netlify.app/static/media/shopper-bi-matiere-details-clous.dc3e1894.jpg'},
]

// ici, nous implémentons un filtre via la methode filter
const myFilteredBag=myBags.filter((element)=>{return element.price>18})
console.log('myFilteredBag',myFilteredBag)

const Collection =(props)=>{
    return (
        <div className='cartContainer'>
            {myBags.map((bag)=>{
            // {myFilteredBag.map((bag)=>{
                // VERSION EN PASSAGE DIRECT DU STATE et son setSTATE
                return (<Cart prix={bag.price} nom={bag.name} image={bag.img} basketV={props.basketV} setBasketV={props.setBasketV} />)
                // VERSION EN PASSAGE D'UNE FONCTION DEFINIE DANS APP
                // return (<Cart prix={bag.price} nom={bag.name} image={bag.img} addInBasket={props.addInBasket}/>)
            })
            }

        </div>
    )    
}
export default Collection