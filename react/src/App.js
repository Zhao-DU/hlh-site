import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Footer from './components/footer'
import Header from './components/header'
import Dialog from './components/dialog'


class App extends Component {	

	constructor(props) {
        super(props)
        this.state = {            
			modalState:true
        }        
    }

	render() {
		return (
		<div id="colorlib-page">
			
			<div id="container-wrap">
				<Sidebar/>
				<div id="colorlib-main">					
					<div>
						<Header/>
						<Introduction/>
						<Dialog/>
						<About/>
						<Timeline/>		
						<Footer/>
					</div>					
				</div>
			</div>	
					
		</div>	  
		);
	}
}

export default App;
