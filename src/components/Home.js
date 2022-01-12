import React from "react";



export default function Home() {
    return(
        
     <div className="page-content">
    <div className="wizard-heading">Mass Booking</div>
    <div className="wizard-v6-content">
      <div className="wizard-form">
        <form className="form-register" id="form-register" action="#" method="post">
          <div id="form-total" role="application" class="clearfix">
            <div class="steps clearfix">
            <ul role="tablist">
            <li role="tab" aria-disabled="false" class="first current" aria-selected="true">
              <a id="form-total-t-0" href="#form-total-t-0" aria-controls="form-total-p-0">
                <span class="current-info audioble"></span>
               <div  class="title">
              <p className="step-icon"><span>1</span></p>
              <span className="step-text">Personal Info</span>
            </div>
             </a>
            </li>
            </ul>
            </div>
            <section>
                {/* <div class="form-row form-row--dual-columns">
                    <div class="form-column">
                        <label class="form-label" for="first-name">first_name</label>
                        <input type="first-name" class="form-control" id="first-name" type="text" required="required"/>
                    </div>
                </div> */}
              <div className="inner">
                <div className="form-row">
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Your Name</label>
                      <input type="text" className="form-control" id="first_name" name="first_name" required="required"/>
                  </div>
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Name of the person for whom this mass is offered</label>
                      <input type="text" className="form-control" id="last_name" name="last_name" required />            
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Select mass Intention</label>
                      <input type="text" className="form-control" id="phone" name="phone" required />
                  </div>
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Mass Time</label>
                      <input type="text" name="your_email_1" id="your_email_1" className="form-control" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Date</label>
                      <input type="date" className="form-control" id="phone" name="phone" required />
                  </div>
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Repeat the mass for number of days</label>
                      <input type="text" name="your_email_1" id="your_email_1" className="form-control" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Mobile Number</label>
                      <input type="text" className="form-control" maxLength="12" id="phone" name="phone" required />
                  </div>
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Email</label>
                      <input type="email" name="your_email_1" id="your_email_1" className="form-control" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Place</label>
                      <input type="text" className="form-control"  name="phone" required />
                  </div>
                  <div className="form-holder">
                  <label class="form-label" for="first-name">Parish or BCC</label>
                      <input type="text" name="your_email_1"  className="form-control" required />
                  </div>
                </div>
                <div className="text-center">
                     <button type="submit" className="btn btn-primary mt-3">
                       Add
                     </button>
                     </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
}