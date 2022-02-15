import React from 'react'
import BannerImage  from '../assets/background.png';
import "../styles/Landingpage.css";


const Landingpage = () => {
  return (

    
    <div className="headerContainer">
    <div className="home" style={{ backgroundImage: `url(${BannerImage })` }}>
  
      <h1 style={{ fontWeight: "bold" }}> Hunger Panda</h1>
      <p>One Solution for all your Hunger</p>





      <div class="input-box">
          <input type="text" id="input" placeholder="abcd@email.com" name="email"/>
          
      </div>
      
    </div>
    







 
<div class="row proj">
  <div class="col-lg-3 col-md-12 col-sm-12">
    <div class="card" style="width: 18rem;">
      <img src="dal.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Vegiterian</h5>
        
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-12 col-sm-12">
    <div class="card" style="width: 18rem;">
      <img src="butterchiken.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Non Vegiterian</h5>
       
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-12 col-sm-12">
    <div class="card" style="width: 18rem;">
      <img src="pasta.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Contenantial</h5>
        
      </div>
    </div>
  </div>

  

</div>













  </div>

 



);
}

export default Landingpage