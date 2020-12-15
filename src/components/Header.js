import monImage from '../assets/sun.svg'
const Header = (props) => {
  
    return(
        <header>
        <div className='leftNav'>
          <h1>TRENDY BAGS</h1>
          <img src={monImage} />
        </div>
        <div className='rightNav'>
          <span>Collection</span>
          <span>Product</span>
          <span>Philosophy</span>
        </div>
    <div className='basket'>{props.basketV}</div>
      </header>
    )
}
export default Header