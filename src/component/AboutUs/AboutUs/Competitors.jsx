import React from 'react'
import logo from "../../Home/CarouselGallery/img/logo.png";
const AboutUs = () => {
    return <div style={{ width: '85%', textAlign: 'center', margin: 'auto', paddingTop: '5%' }}>


        <div class="d-flex justify-content-center text-white " style={{ position: 'relative' }}  >

            <div class="lg p-5 border bg-secondary " >
                <h1>Hello world</h1>
                <p class="p-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries.
                </p>
            </div>

            <div class="row align-items-center justify-content-center m-auto " >
              
                <img class=" row d-flex justify-content-center justify-text-center "
                    style={{ height: '8rem', width: '8rem', position: 'absolute' }} src={logo} alt="" />
                
            </div>


            <div class="lg p-5  bg-danger  " >
                <h1>Hello world</h1>
                <p class="p-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries.
                </p>
            </div>


        </div>

        <br />
        <br />
        <div class="d-flex justify-content-center text-white " style={{ position: 'relative' }}  >

            <div class="lg p-5 border bg-secondary " >
                <h1>Hello world</h1>
                <p class="p-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries.
        </p>
            </div>

            <div class="row align-items-center justify-content-center m-auto " >
                <img class=" row d-flex justify-content-center justify-text-center  "
                    style={{ height: '8rem', width: '8rem', position: 'absolute' }} src={logo} alt="" />
            </div>

            <div class="lg p-5 border bg-danger " >
                <h1>Hello world</h1>
                <p class="p-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries.
        </p>
            </div>


        </div>
        <br />
        <br />

    </div>
}

export default AboutUs