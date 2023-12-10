import logo from './logo.svg';
import { useState } from 'react';
import devices1 from './devices1.jpg'
import './index.css';
import './Mobile.css';
import iconclose from'./icon-close.svg';
import burgericon from './icon-hamburger.svg';


function App() {
 


  const [open1,setOpen1] = useState(false);

  const handleChange= ()=>{
    setOpen1(!open1);
  }

 
  const containerStyle = {
    backgroundColor:'white',
    width:'340px',
    position:'absolute',
    left:'50px',
    top:'120px',
    boxShadow:'0px 2px 10px -5px',
    padding:'30px 20px',
    zIndex:'1',
    display:'none'
   }


   const menuStyle ={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'1.1rem',
    fontWeight:'600',
    cursor:'pointer'
   }
 
  return (
    <div className="App">

<div className='container-mobile'>

<div className='nav-bar-mobile'>

<img className="logo-mobile" src={logo} alt="Website logo"/>
<img className="burger-icon" 
src={burgericon} 
alt="icon burger"
value={open1}
onClick={handleChange}
style={{display: open1 ? 'none' : 'block'}}/>
<img 
className="icon-close" 
src={iconclose} alt="icon close"
style={{display: open1?'block': 'none'}} 
onClick={handleChange}/>

</div>

<div className='container-menu'  style={{ ...containerStyle, display: open1 ? 'block' : 'none' }}>
   <div style={menuStyle} > <p>Product</p>
    <p>Features</p>
    <p>Pricing</p>
    <span style={{border:'0.2px solid gray', width:'350px'}}></span>
    <p>Login</p></div>
   </div>



<div className='image-mobile'>
  <img className='image-right-mobile' src={devices1} alt='This is devices illustration'/>
  <div className="rectangle"></div>
 </div>



 <div className='left-mobile'>

  <div className='for-heading-mobile'>
   <p className='new-mobile'>New</p>
   <p className='monograph-mobile'>Monograph Dashboard</p>
  </div>

<div className='middle'>
<h1 style={{fontSize:'2.5rem',marginTop:'1px',textAlign:'left', width:'320px'}} >Powerful insights<br/>into your team</h1>
  <p style={{textTransform:'none', fontSize:'1.2rem', marginBottom:'80px',fontFamily:'sans-serif', color:'gray',textAlign:'left'}}>Project planning and time tracking<br/> for agile teams</p>
</div>

  <div className='button-txt-mobile'>
  <button className='btn-mobile'>Schedule a demo</button>
  <p style={{letterSpacing:'0.2rem',position:'relative', left:'20px', color:'gray',fontSize:'0.8rem'}}>to see a preview</p>
  </div>
 </div>










</div>




    </div>
  );
}

export default App;
