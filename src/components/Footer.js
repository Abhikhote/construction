import React from 'react'
import '../component-css/footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
  // const [authenticated, setAuthenticated] = useState(false);
  // const [isAdmin, setisAdmin] = useState(false);
  // const [isUser, setisUser] = useState(false);

  // useEffect(() => {

  //   const auth = Cookies.get('authenticated') === 'true';
  //   const user = Cookies.get('isUser') === 'true';
  //   const admin = Cookies.get('isAdmin') === 'true';
  //   setAuthenticated(auth);
  //   setisAdmin(admin);
  //   setisUser(user);
  //   console.log(user);
  //   console.log(admin);

  // },{});
  return (
    <>
    
    <div className="footer-container">
              <div className="row" >
                <div className="col-xl-4" id='footer-xl-41'>
                  <div className="card-header">
                    <h4>QUICK LINKS</h4>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li><Link to="/" className='text-white'> HOME</Link></li>
                      <li><Link to="/about" className='text-white'> About Us</Link></li>
                      <li><Link to="/career" className='text-white'>Career</Link></li>
                      <li><Link to="/project" className='text-white'>Project</Link></li>
                      <li><Link to="/contact" className='text-white'>Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4" id='footer-xl-4' >
                  <div className="card-header">
                    <h4>SERVICE</h4>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li><Link to="/commercial" className='text-white'>Commercial</Link></li>
                      <li><Link to="/residential" className='text-white'>Residential</Link></li>
                      <li><Link to="/industrial" className='text-white'>Industrial</Link></li>
                      <li><Link to="/government" className='text-white'>Goverment</Link></li>
                      <li><Link to="/infrastructure" className='text-white'>Infrastructure</Link></li>
                    </ul>
                  </div>
                  <div className="card-header">
                    <h4>PROJECT</h4>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>Ongoing Project</li>
                      <li>Completed Project</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4" id='footer-xl-4'>
                  <div className="row">
                    <div className="col-xl-4" >
                      <img
                        src={require('../images/vc-logo-1.png')}
                        width="250px"
                        height="80px"
                        alt='svd'
                      />
                    </div>
                    
                    <div className="col-xl-8">

                    </div>
                  </div>
                  <br/>
                  <div className='row' id='footer-3-1'>
                  <p>
                      Udyog Bhavan - Umberkhed Rd,
                            Pimpalgaon Baswant, Nashik, 422209
                      </p>
                  </div>
                  <div className="row" id='footer-3-1'>
                    <h5>For more details contact :</h5>
                    <h6>Phone: +91-9876543310</h6>
                    <h6>Email-Id: connect@vedanand.co.in</h6>
                  </div>
                </div>
              </div>
            </div>
          </>
    
    // <>
    //   {authenticated && isUser ? (
    //     <>
    //       <div className="footer-container">
    //         <div className="row" >
    //           <div className="col-xl-4" id='footer-xl-41'>
    //             <div className="card-header">
    //               <h4>QUICK LINKS</h4>
    //             </div>
    //             <div className="card-body">
    //               <ul>
    //                 <li><Link class="dropdown-item" to="/progress-ad">Progress</Link></li>
    //                 <li><Link class="dropdown-item" to="/design-ad">Design</Link></li>
    //                 <li><Link class="dropdown-item" to="/accounts-ad">Accounts</Link></li>
    //                 <li><Link class="dropdown-item" to="/document-ad">Documents</Link></li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="col-xl-4" id='footer-xl-4' >
    //             <div className="card-header">
    //               <h4>SOCIAL</h4>
    //             </div>
    //             <div className="card-body">
    //               <ul>
    //                 <li><Link to="/commercial" className='text-white'>fACEBOOK</Link></li>
    //                 <li><Link to="/residential" className='text-white'>INSTAGRAM</Link></li>
    //                 <li><Link to="/industrial" className='text-white'>LINEDIN</Link></li>
    //                 <li><Link to="/government" className='text-white'>OTHER WEBSITE</Link></li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="col-xl-4" id='footer-xl-4'>
    //             <div className="row">
    //               <div className="col-xl-4" >
    //                 <img
    //                     src={require('../images/vc-logo-1.png')}
    //                     width="250px"
    //                     height="80px"
    //                     alt='xyz'
    //                   />
    //               </div>

    //               <div className="col-xl-8" >
    //               </div>
    //             </div>
    //             <br/>
    //               <div className='row' id='footer-3-1'>
    //               <p>
    //                   Udyog Bhavan - Umberkhed Rd,
    //                         Pimpalgaon Baswant, Nashik, 422209
    //                   </p>
    //               </div>
    //             <div className="row" id='footer-3-1'>
    //               <h5>For more details contact :</h5>
    //               <h6>Phone: +91-9876543310</h6>
    //               <h6>Email-Id: connect@vedanand.co.in</h6>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : (
    //     authenticated && isAdmin ? (
    //       <>
    //         <div className="footer-container">
    //           <div className="row" >
    //             <div className="col-xl-4" id='footer-xl-41'>
    //               <div className="card-header">
    //                 <h4>QUICK LINKS</h4>
    //               </div>
    //               <div className="card-body">
    //                 <ul>
    //                   <li><Link class="dropdown-item" to="/first">Projects</Link></li>

    //                 </ul>
    //               </div>
    //             </div>
    //             <div className="col-xl-4" id='footer-xl-4' >
    //               <div className="card-header">
    //                 <h4>SOCIAL</h4>
    //               </div>
    //               <div className="card-body">
    //                 <ul>
    //                   <li><Link to="/commercial" className='text-white'>fACEBOOK</Link></li>
    //                   <li><Link to="/residential" className='text-white'>INSTAGRAM</Link></li>
    //                   <li><Link to="/industrial" className='text-white'>LINEDIN</Link></li>
    //                   <li><Link to="/government" className='text-white'>OTHER WEBSITE</Link></li>
    //                 </ul>
    //               </div>
    //             </div>
    //             <div className="col-xl-4" id='footer-xl-4'>
    //               <div className="row">
    //                 <div className="col-xl-4" >
    //                 <img
    //                     src={require('../images/vc-logo-1.png')}
    //                     width="250px"
    //                     height="80px"
    //                     alt='sd'
    //                   />
    //                 </div>
    //                 <div className="col-xl-8" >
    //                 </div>
    //               </div>
    //               <br/>
    //               <div className='row' id='footer-3-1'>
    //               <p>
    //                   Udyog Bhavan - Umberkhed Rd,
    //                         Pimpalgaon Baswant, Nashik, 422209
    //                   </p>
    //               </div>
    //               <div className="row" id='footer-3-1'>
    //                 <h5>For more details contact :</h5>
    //                 <h6>Phone: +91-9876543310</h6>
    //                 <h6>Email-Id: connect@vedanand.co.in</h6>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </>
    //     ) : (
    //       <>

    //         <div className="footer-container">
    //           <div className="row" >
    //             <div className="col-xl-4" id='footer-xl-41'>
    //               <div className="card-header">
    //                 <h4>QUICK LINKS</h4>
    //               </div>
    //               <div className="card-body">
    //                 <ul>
    //                   <li><Link to="/" className='text-white'> HOME</Link></li>
    //                   <li><Link to="/about" className='text-white'> About Us</Link></li>
    //                   <li><Link to="/career" className='text-white'>Career</Link></li>
    //                   <li><Link to="/project" className='text-white'>Project</Link></li>
    //                   <li><Link to="/contact" className='text-white'>Contact Us</Link></li>
    //                 </ul>
    //               </div>
    //             </div>
    //             <div className="col-xl-4" id='footer-xl-4' >
    //               <div className="card-header">
    //                 <h4>SERVICE</h4>
    //               </div>
    //               <div className="card-body">
    //                 <ul>
    //                   <li><Link to="/commercial" className='text-white'>Commercial</Link></li>
    //                   <li><Link to="/residential" className='text-white'>Residential</Link></li>
    //                   <li><Link to="/industrial" className='text-white'>Industrial</Link></li>
    //                   <li><Link to="/government" className='text-white'>Goverment</Link></li>
    //                   <li><Link to="/infrastructure" className='text-white'>Infrastructure</Link></li>
    //                 </ul>
    //               </div>
    //               <div className="card-header">
    //                 <h4>PROJECT</h4>
    //               </div>
    //               <div className="card-body">
    //                 <ul>
    //                   <li>Ongoing Project</li>
    //                   <li>Completed Project</li>
    //                 </ul>
    //               </div>
    //             </div>
    //             <div className="col-xl-4" id='footer-xl-4'>
    //               <div className="row">
    //                 <div className="col-xl-4" >
    //                   <img
    //                     src={require('../images/vc-logo-1.png')}
    //                     width="250px"
    //                     height="80px"
    //                     alt='svd'
    //                   />
    //                 </div>
                    
    //                 <div className="col-xl-8">

    //                 </div>
    //               </div>
    //               <br/>
    //               <div className='row' id='footer-3-1'>
    //               <p>
    //                   Udyog Bhavan - Umberkhed Rd,
    //                         Pimpalgaon Baswant, Nashik, 422209
    //                   </p>
    //               </div>
    //               <div className="row" id='footer-3-1'>
    //                 <h5>For more details contact :</h5>
    //                 <h6>Phone: +91-9876543310</h6>
    //                 <h6>Email-Id: connect@vedanand.co.in</h6>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </>)
    //   )
    //   }
    // </>

    
  )
}
