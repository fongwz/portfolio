import React from 'react';
import {Menu, Sidebar, Button, Container, Segment} from 'semantic-ui-react';
import './Header.css';

export class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			fixed: false,
			Profile: true,	//header button state variables
			Resume: false,
			Portfolio: false,
			Contact: false
		}
		this.handleProfileClick = this.handleProfileClick.bind(this)
		this.handleResumeClick = this.handleResumeClick.bind(this)
		this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
		this.handleContactClick = this.handleContactClick.bind(this)
	}

	handleProfileClick(){
		this.setState({
			Profile: true,
			Resume: false,
			Portfolio: false,
			Contact: false
		})
	}

	handleResumeClick(){
		this.setState({
			Profile: false,
			Resume: true,
			Portfolio: false,
			Contact: false
		})
	}

	handlePortfolioClick(){
		this.setState({
			Profile: false,
			Resume: false,
			Portfolio: true,
			Contact: false
		})
	}

	handleContactClick(){
		this.setState({
			Profile: false,
			Resume: false,
			Portfolio: false,
			Contact: true
		})
	}

	render(){
		const {fixed} = this.state
		return(
				<Segment inverted	raised textAlign='center' vertical>
					<Menu
						className='header-container'
					  fixed={fixed ? 'top' : null}
					  inverted={true}
					  pointing={!fixed}
					  secondary={!fixed}
					  size='massive'
					>
						<Container>
							<Menu.Item as='a' onClick={this.handleProfileClick} active={this.state.Profile}>Profile</Menu.Item>
							<Menu.Item as='a' onClick={this.handleResumeClick} active={this.state.Resume}>Resume</Menu.Item>
							<Menu.Item as='a' onClick={this.handlePortfolioClick} active={this.state.Portfolio}>Portfolio</Menu.Item>
							<Menu.Item as='a' onClick={this.handleContactClick} active={this.state.Contact}>Contact</Menu.Item>
						</Container>
					</Menu>
				</Segment>
          
			);
	}
}