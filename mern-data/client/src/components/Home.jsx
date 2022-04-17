import React from 'react';
import Info from './Info';

function Home() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Home</h1>
              <h2>Bringing your everyday lawncare needs to you!</h2>
          <h3>About</h3>
            <p>
              The Lammscaping business is very new and is still in the production stage. It's original name was "The Lamm Bros" due to the fact that the two Lamm brothers 
              wanted to start their own business together. Each with a different set of goals and opinions combined their strengths and decided that they could together 
              provide a wide range of services to people. Between lawnscape, landscape, and homescape these two brothers knew they could create a business that offered 
              professional services to the people of the community. In terms of experience, both brothers have worked for a concrete company. One of them now works as a 
              maintenance man. The other has experience with a professional landscaping business titled <em>"Green Magic Landscape."</em> He know works as a caregiver 
              in Paul, Idaho. Despite their different working positions these brothers are still ambitious to get this business in working order and start doing what 
              they love to do for the community around them. We all hope that this website will help grow this business and allow people from all around to see what we 
              can do and what we are offering.
            </p>
          <h3>Services</h3>
            <p>
              The services provided by this business include but are not limited to: mowing, hedging, concrete work, building, and planting. As you can see, 
              these are just the most simple basic services that are provided. However, 
              there are plenty more to satisfy your needs. Please don't hesitate to call us and get a quote on what it would cost you to have the newest trends 
              and fashion of the outside of your house brought to you. For we know what it is like to have an old style lawn that does not look the way you want it to. 
              Act now and don't hold off on having the newest competition in town come and bring you better services than ever before.
            </p>
          <h3>Contact</h3>
          <p>
            Please add your information here so that we may be able to contact you and answer any and all questions you may have!
          </p>
            <Info />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;