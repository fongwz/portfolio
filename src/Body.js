import React, { Component } from 'react'
import _ from 'lodash'
import {Container,Divider,Dropdown,Grid,Header,Icon,Image,List,Menu,Segment,Visibility} from 'semantic-ui-react'
import {Profile} from './Profile.js'
import {Resume} from './Resume.js'
import {Works} from './Works.js'
import './Body.css'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '2.8em',
  marginTop: '3.5em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  backgroundColor: '#f6eabe'
}

const fixedMenuStyle = {
  backgroundColor: '#f6eabe',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

export class Body extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    profile: true,
    resume: false,
    works: false
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  profileClick = () => this.setState({ profile: true, works: false, resume: false })

  resumeClick = () => this.setState({ profile: false, works: false, resume: true })

  worksClick = () => this.setState({ profile: false, works: true, resume: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect, profile, resume, works } = this.state

    return (
      <div className="web-body">
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        
        <Container text style={{ marginTop: '2.5em' }}>
          <Header size="huge">{resume?"Skills!":works?" What I've done.":"Who Am I?"}</Header>
        </Container>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item as='a' active={profile} onClick={this.profileClick}>About Me</Menu.Item>
              <Menu.Item as='a' active={resume} onClick={this.resumeClick}>Resume</Menu.Item>
              <Menu.Item as='a' active={works} onClick={this.worksClick}>My Works</Menu.Item>
            </Container>
          </Menu>
        </Visibility>

        <div className="content-body">
        	{resume?<Resume />:works?<Works />:<Profile handleOverlayRef={this.handleOverlayRef} />} 
      	</div>
      </div>
    )
  }
}