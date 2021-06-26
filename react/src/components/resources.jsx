import React, { Component } from 'react'

export default class Resources extends Component{
    render() {
        return(
            <div>
            <section className="colorlib-about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Some other section?</span>
                        <h2 className="colorlib-heading">Here are some resources?</h2>
                    </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-1">
                            <span className="icon">
                                <i className="icon-bulb" />
                            </span>
                            <div className="desc">
                                <h3>Websites? </h3>
                                <p>Read more about HLH here?</p>
                                <p><a className="btn btn-primary btn-learn" href="#what" target="_blank" rel="noopener noreferrer">LINKS<i className="icon-download4" /></a></p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-3">
                            <span className="icon">
                                <i className="icon-phone3" />
                            </span>
                            <div className="desc">
                                <h3>Hear from others?</h3>
                                <p>Stories of people who have this disease?</p>
                                <p><a className="btn btn-primary btn-learn" href="#what" target="_blank" rel="noopener noreferrer">LINK<i className="icon-download4" /></a></p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                            <span className="icon">
                                <i className="icon-bar-graph" />
                            </span>
                            <div className="desc">
                                <h3>The science?</h3>
                                <p>Here are some studies on HLH condition and scientific info?</p>
                                <p><a className="btn btn-primary btn-learn" href="#what" target="_blank" rel="noopener noreferrer">LINK<i className="icon-download4" /></a></p>
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