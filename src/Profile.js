import React from 'react'
import _ from 'lodash'
import {Menu, Sidebar, Button, Container, Segment, Image, Icon, Divider} from 'semantic-ui-react';

const overlayStyle = {
  float: 'right',
  margin: '1em -9em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const Paragraph = () => (
  <Container>
  	  <Segment basic className="profile-greeting" vertical size="massive">
		  <text>Hey! I'm </text><text style={{color: "red"}}>Wei Zheng.</text>	  
	  </Segment>
	  <text>I love just about anything IT, from design to implementation,  IoT products to Web Apps,<br /></text>
	  <text>Assembly Language to Java --  its all so intriguing.</text><br /><br />
	  <text>I like designing products and then developing and implementing them, and hence, strongly believe that good design skills complement programming expertise,
	  and together they can better express one's creativity.</text>
	  <Divider />
	  <Segment basic className="profile-details" vertical size="large">
	  	<Icon size="large" name="book" />Bachelor of Engineering (Computer Engineering), Year 3 @ <b>NUS</b><br /><br />
	  	<Icon size="large" name="child" />Competitive Team for NUS Kendo Club
	  </Segment>
  </Container>
)

export class Profile extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		    menuFixed: false,
		    overlayFixed: false,
		}
	}

	render(){
		const { menuFixed, overlayFixed, overlayRect } = this.state
		return(
			<div className="profile-content">
				  <Image
				    floated='left'
				    circular={true}
				    size='medium'
				    src='data:image/jpeg;base64,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'
				    className="profile-content-image"
				  />
				<Container text className="profile-content-body">
		          <div ref={this.props.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
		            <Menu
		              icon='labeled'
		              style={fixedOverlayMenuStyle}
		              vertical
		            >
		              <Menu.Item as='a' href='https://github.com/fongwz/' target="_blank">
		                <Icon name='github' />
		                Github
		              </Menu.Item>

		              <Menu.Item as='a' href="mailto:e0035221@u.nus.edu?Subject=Hello!">
		                <Icon name='mail' />
		                Email
		              </Menu.Item>
		            </Menu>
		          </div>
		          
		          {_.times(1, i => <Paragraph key={i} />)}        
		        </Container>  
	        </div> 
			);
	}
}