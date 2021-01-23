import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import bigLogo from './bigLogo.png';
import homepage from './homepage.png';
const Body= ()=>{
  return(
    <div id="body">
      <Header/>
      <Home/>
      <Card 
                className='about'
                title='About the Company' 
                description="This is a new startup by two students from the University of Michigan. 
                 We are planning on getting a prototype going soon and have a launch date of Jan 1, 2022. 
                This service will be available to anyone. We will have dynamic pricing for single users and businesses. "
            />

            <Card 
                className='about-dark'
                title='Our Values'
                description='At Flipd we believe that the user comes first. We will try our best to make sure that all of our users are satisfied
                and that they get the support they need with their investing careers.'
            />

            <Card 
                className='about'
                title='Our Mission' 
                description='Our mission is to allow real estate investors to save time and make smarter decisions by using our product.'
            />
            <a name='contact'></a><ContactContainer/>
    </div>
  )
}

const Header = () =>{
  return(
    <div className='header'>
      <img src={bigLogo} alt=''/>
    <a href='#contact'><div className='button'>Contact Us</div></a>
    </div>
  )
}

const Home = () =>{
  return(
    <div className='section'>
      <div><img src={homepage} alt=''/></div>
      <div className='big-div'>
        AI Real Estate Alerts for Investors.
      </div>
      <div className='small-div'>Flipd is a powerful AI tool that searches for below market housing in the United States.</div>
      <div class="mouse_scroll">

		<div class="mouse">
			<div class="wheel"></div>
		</div>
		<div>
			<span class="m_scroll_arrows unu"></span>
			<span class="m_scroll_arrows doi"></span>
			<span class="m_scroll_arrows trei"></span>
		</div>
</div>
    </div>
    
  )
}

const Card = (props) =>{
  return(
    <div className={props.className} >
        <div className="text-div">
            <span className='div-title'>
                {props.title}
            </span>
            <br/><br/>
            <span>
                {props.description}
            </span>
        </div>
    </div>
)
}

const ContactContainer = () => {
  return(
      <div className='contact-container'>
          <span className="div-title">Contact us</span>
          <div className='contact-form'>
              <div id='sect1'>
                  <span>
                      Contact
                  </span>

                  <input type="text" placeholder="Email Address" className="input-field"/>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Comments"></textarea>
                  <button className="contact-btn">Send</button>
              </div>
          </div>
      </div>
  );

}


ReactDOM.render(<Body/>, document.getElementById('root'));