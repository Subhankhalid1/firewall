import React from 'react';
import './style.css'
const Map = () => {

  return <div style={{ width: '85%', height: 'auto', margin: 'auto', paddingBottom: '5%' }}>
    <section className="text-center bygga-parent equip-parent py-5">
      <span className="back-border bygga-text-heading fs-4 fw-bold text-muted ">
        Har du en fraga? fraga oss.
      </span>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Laudantium numquam distinctio earum illo asperiores
        obcaecati repudiandae nisi dolores magnam?

      </p>
    </section>

    <div style={{ width: '100%', margin: 'auto', display: 'flex', border: '12px solid gainsboro' }}>
      <div class="mapouter"  >

        <div class=" py-1 p-4 " >
          {/* <Form.Group > */}
          <div className="searchs d-flex align-items-center" >
            <i className="fa fa-map-marker-alt  text-danger mx-2 fa-2x"></i>
            <input className="search-inputs " disabled value="FirewallForce Nordic AB" aria-label="Search" />

          </div>
          <div className="searchs d-flex align-items-center" >
            <i className="fa fa-envelope text-danger mx-2 fa-2x"></i>
            <input className="search-inputs " disabled value="firewallforce@gmail.com" aria-label="Search" />

          </div>
          <div className="searchs d-flex align-items-center" >
            <i className="fa fa-phone-square-alt text-danger mx-2 fa-2x"></i>
            <input className="search-inputs " disabled value="+49 4949900000" aria-label="Search" />

          </div>


          <div class="d-flex align-items-center justify-content-center" style={{ textAlign: 'center', display: 'flex' }}>
            <img class="imgs"
              style={{ height: '10%', width: '10%' }} src="https://firewallforce.net/wp-content/uploads/2020/06/fw-icon-300x300.png" alt="" />
            <h4 style={{ fontFamily: 'bold', fontSize: '2rem', color: 'red' }}>FirewallForce</h4>
          </div>


          <div style={{ padding: '1%' }}>
            <div className=" d-flex align-items-center justify-content-center">
              <i className="fa  fa-2x mx-3 fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-2x  mx-3 fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-2x mx-3 fa-facebook" aria-hidden="true"></i>
            </div>

          </div>
        </div>

      </div>
      <div class="mapouter" >
        <div class="gmap_canvas">
          <iframe title="Map" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Firewall Force Nordic AB&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

          </iframe>
          <a href="https://www.fridaynightfunkin.net/">

            Friday Night Funkin

          </a>
        </div>
      </div>
    </div>
  </div>
}


export default Map;