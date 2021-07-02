import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
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
        </section>        
      </div>
    )
  }
}
