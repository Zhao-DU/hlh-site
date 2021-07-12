import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="colorlib-about" data-section="about">
        <Carousel style={{'margin':"auto", 'width':"70%"}}>
          <Carousel.Item style={{'height':"550px", 'margin':"auto"}} > 
            <img style={{'height':"450px"}} className="d-block w-100" src={'images/blog-1.jpg'} />
            <Carousel.Caption>
              <h3>First Demo </h3>
              <h4>EXPLORE THE PATH
                Dive into a unique and exotic legend of Chinese Xianxia mythology and restore balance to the world of Shenzhou.
              </h4>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item style={{'height':"550px"}} > 
            <img style={{'height':"450px"}} className="d-block w-100" src={'images/blog-2.jpg'} />
            <Carousel.Caption>
              <h3>Second Demo </h3>
                <h4>EXPLORE A STRANGE WORLD
                  Glide through the heavens on your mount, relishing in the splendours of mystical mountain temples, luscious bamboo forests and icy glaciers.
                </h4>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item style={{'height':"550px"}} > 
            <img style={{'height':"450px"}} className="d-block w-100" src={'images/blog-3.jpg'} />
            <Carousel.Caption>
              <h3>Third Demo </h3>
                <h4>LET YOUR CREATIVITY RUN WILD
                  Build a home for yourself on your very own island and let your creativity run wild, decorating your residence down to the very last detail.
                </h4>
            </Carousel.Caption>
          </Carousel.Item >
        </Carousel>           
        {/*
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About HLH</span>
                    <h2 className="colorlib-heading">What is HLH?</h2>
                    <p>
                      Hemophagocytic lymphohistiocytosis (HLH) is a severe systemic inflammatory syndrome that can be fatal. 
                    </p>
                    <p> 
                      It can be broadly divided into two types, primary HLH and secondary HLH. 
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        */}
        </section>        
      </div>
    )
  }
}
