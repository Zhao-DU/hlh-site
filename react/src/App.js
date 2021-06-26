import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Causes from './components/causes'
import Footer from './components/footer'
import Header from './components/header'
import Dialog from './components/dialog'
import Resources from './components/resources';
import Treatment from './components/treatment';
import Diagnosis from './components/diagnosis';


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
						<Causes/>
						<Diagnosis/>
						<Treatment/>
						<Resources/>
						<Footer/>
					</div>					
				</div>
			</div>	
					
		</div>	  
		);
	}
}

export default App;
