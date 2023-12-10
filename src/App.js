import logo from './logo.svg';
import devices1 from './devices1.jpg'
import './index.css';
import Mobile from './Mobile.js';

function App() {


const isMobile= window.innerWidth <= 420;




  return (
    <div className="App">

{isMobile?(
 <Mobile/>
):(
  <div className='container'>

<div className='nav-bar'>

<img className="logo" src={logo} alt="Website logo"/>
 <div className='menus'>
   <p className='product'>Product</p>
   <p className='features'>Features</p>
   <p className='pricing'>Pricing</p>
   <p className='login'>Login</p>
 </div>

</div>

<div className='middle-containers'>
 <div className='left'>

  <div className='for-heading'>
   <p className='new'>New</p>
   <p className='monograph'>Monograph Dashboard</p>
  </div>

  <h1 style={{fontSize:'4rem',marginTop:'1px'}} >Powerful insights<br/>into your team</h1>
  <p style={{textTransform:'none', fontSize:'1.2rem', marginBottom:'80px',fontFamily:'sans-serif', color:'gray'}}>Project planning and time tracking<br/> for agile teams</p>

  <div className='button-txt'>
  <button className='btn'>Schedule a demo</button>
  <p style={{letterSpacing:'0.3rem',position:'relative', left:'20px', color:'gray'}}>to see a live preview</p>
  </div>
 </div>

 <div className='right'>
  <img className='image-right' src={devices1} alt='This is devices illustration'/>
  <div className="rectangle"></div>
 </div>



</div>





</div>

)}



    </div>
  );
}

export default App;
