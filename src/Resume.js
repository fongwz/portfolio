import React from 'react'
import {Grid,Rail,Segment,Header,Container,Icon,Divider,Image} from 'semantic-ui-react'

const Skills = (props) => (
	<Container className="resume-content-leftjobbody2">
		<Header as="h3">
			<Header.Content className="resume-content-left-jobtitle">&nbsp;{props.skill}</Header.Content>
		</Header>	
	</Container>
)

export class Resume extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="resume-body">
			  <Grid columns={2} stackable>
		      <Grid.Column className="resume-body-left">
		        <Container className="resume-content-left" fluid text textAlign='left'>
		        	<h2 className="resume-content-left-header-exp"><Icon size="small" name="briefcase" />Experience</h2>
		        	<Container className="resume-content-leftjobbody1">
		        		<Image className="resume-content-left-jobicon1" floated="left" size="mini" src="./images/linde.png"/>
		        		<Header as="h3">
		        			<Header.Content className="resume-content-left-jobtitle">&nbsp;Software Engineer Intern</Header.Content>
		        			<Header.Subheader>
		        				<Icon name="location arrow" />Linde Gas Asia Pte Ltd
		        				&emsp;&emsp;
		        				<Icon name="calendar alternate outline" />May 2018 - Aug 2018
		        			</Header.Subheader>
		        		</Header>	
		        	</Container>

		        	<Container className="resume-content-leftjobbody2">
		        	<Image className="resume-content-left-jobicon" floated="left" size="mini" src="./images/microsoft.png"/>
		        		<Header as="h3">
		        			<Header.Content className="resume-content-left-jobtitle">&nbsp;Admin Assistant</Header.Content>
		        			<Header.Subheader>
		        				<Icon name="location arrow" />Microsoft Regional Sales Corporation
		        				&emsp;&emsp;
								<Icon name="calendar alternate outline" />Jan 2014 - Mar 2014		
		        			</Header.Subheader>
		        		</Header>	
		        	</Container>		        	
		        </Container>
		      	
		        <Container text>
		        	<h2 className="resume-content-left-header-events"><Icon size="small" name="pencil" />Events & Hackathons</h2>
		        	<Container className="resume-content-leftjobbody1">
		        		<Header as="h3">
		        			<Header.Content className="resume-content-left-jobtitle">
		        				&nbsp;NUS GameCraft! &emsp;|<a href="https://itch.io/jam/gamecraft2017/rate/203889" target="_blank">Participant</a>
		        			</Header.Content>
		        			<Header.Subheader>
		        				<Icon name="calendar alternate outline" />8 Dec 2017 - 9 Dec 2017
		        			</Header.Subheader>
		        		</Header>

		        		<Header as="h3">
		        			<Header.Content className="resume-content-left-jobtitle">
		        				&nbsp;Startup Weekend Singapore Mega 2017 &emsp;|<a href="http://communities.techstars.com/singapore/singapore/startup-weekend/11281" target="_blank">Participant</a>
		        			</Header.Content>
		        			<Header.Subheader>
		        				<Icon name="calendar alternate outline" />29 Sep 2017 -  1 Oct 2017
		        			</Header.Subheader>
		        		</Header>

		        		<Header as="h3">
		        			<Header.Content className="resume-content-left-jobtitle">
		        				&nbsp;NUS Orbital &emsp;|<a href="https://github.com/fongwz/Orbital-project" target="_blank">Participant</a>
		        			</Header.Content>
		        			<Header.Subheader>
		        				<Icon name="calendar alternate outline" />May 2018 - Aug 2018
		        			</Header.Subheader>
		        		</Header>	
		        	</Container>		        	
		        </Container>
		      </Grid.Column>

		      <Grid.Column className="resume-body-right">
		        <Container text textAlign='left'>
		        	<Container className="resume-content-left" fluid text textAlign='left'>
		        	<h2 className="resume-content-left-header-exp"><Icon size="small" name="wrench" />Skill Sets</h2>
		        		<Header as="h3">
		        			<Header.Content className="resume-content-left-jobtitle">
		        				Prototyping
		        			</Header.Content>
		        			<Header.Subheader>
		        				Proto.io
		        			</Header.Subheader>
		        		</Header>

		        		<Header as="h3">
		        			<Header.Content className="resume-content-left-jobtitle">
		        				Code
		        			</Header.Content>
		        			<Header.Subheader>
		        				Java, &nbsp;Python, &nbsp;ReactJS, &nbsp;NodeJS, &nbsp;Verilog, &nbsp;ARM Assembly
		        			</Header.Subheader>
		        		</Header>

		        		<Header as="h3">
		        			<Header.Content className="resume-content-left-jobtitle">
		        				IoT tools
		        			</Header.Content>
		        			<Header.Subheader>
		        				ARM Cortex M3, &nbsp;Arduino Uno/Mega, &nbsp;RPi3/RPiMini
		        			</Header.Subheader>
		        		</Header>		        				        		
		        	</Container>

		        	<Container className="resume-content-left" fluid text textAlign='left'>
		        		<h4 className="resume-content-left-header-exp">
		        			Download my <a href="./documents/CV.pdf" download="Fong Wei Zheng">Resume.</a><br />
		        			For more information, visit my <a href="https://github.com/fongwz/" target="_blank">GitHub Profile</a>
		        		</h4>		        				        		
		        	</Container>		        	
		        </Container>
		      </Grid.Column>
		      </Grid>
			</div>			
			);
	}

}