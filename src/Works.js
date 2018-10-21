import React from 'react'
import {Grid,Rail,Segment,Header,Container,Icon,Divider,Image, Card, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus',
    ].join('')}
  </p>
)

export class Works extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="works-body">
		        <Container className="works-content">
			        <Card.Group itemsPerRow={3} style={{marginBottom: "3em", marginTop: "2em"}}>
						<Modal closeIcon trigger={
							<Card link>
								<Image fluid size="large" src='https://natgeo.imgix.net/factsheets/thumbnails/article%20-%20Hidden%20Penguin%20Mega-Colonies%20Discovered%20in%20Antarctica.jpg?auto=compress,format&w=1024&h=560&fit=crop' />
								<Card.Content>
									<Card.Header textAlign="left">RoomiNUS</Card.Header>
									<Card.Description>Design Project</Card.Description>
								</Card.Content>
							</Card>
						}>
							<Modal.Header><b>RoomiNUS</b></Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Image fluid style={{width: "100%"}} src='https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock-511366776.jpg?itok=cWhdWNZ8&resize=1100x1100' />
									<Paragraph />
									<Paragraph />
									<Paragraph />
									<Paragraph />
									<Paragraph />
									<Paragraph />
									<Image fluid style={{width: "100%"}} src='https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock-511366776.jpg?itok=cWhdWNZ8&resize=1100x1100' />
									<Paragraph />
									<Paragraph />
								</Modal.Description>
							</Modal.Content>
						</Modal>	

						<Modal closeIcon trigger={
							<Card link>
								<Image fluid size="large" src='https://natgeo.imgix.net/factsheets/thumbnails/article%20-%20Hidden%20Penguin%20Mega-Colonies%20Discovered%20in%20Antarctica.jpg?auto=compress,format&w=1024&h=560&fit=crop' />
								<Card.Content>
									<Card.Header textAlign="left">Crowdfunding Site</Card.Header>
									<Card.Description>Interactive Dashboard Project</Card.Description>
								</Card.Content>
							</Card>
						}>
							<Modal.Header>Crowdfunding Site</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Image fluid style={{width: "100%"}} src='https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock-511366776.jpg?itok=cWhdWNZ8&resize=1100x1100' />
									<Paragraph />
									<Paragraph />
									<Paragraph />
									<Paragraph />
								</Modal.Description>
							</Modal.Content>
						</Modal>	

						<Modal closeIcon trigger={
							<Card link>
								<Image fluid size="large" src='https://natgeo.imgix.net/factsheets/thumbnails/article%20-%20Hidden%20Penguin%20Mega-Colonies%20Discovered%20in%20Antarctica.jpg?auto=compress,format&w=1024&h=560&fit=crop' />
								<Card.Content>
									<Card.Header textAlign="left">Fizz 5.0</Card.Header>
									<Card.Description>Interactive Dashboard</Card.Description>
								</Card.Content>
							</Card>
						}>
							<Modal.Header>Fizz 5.0</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Image fluid style={{width: "100%"}} src='https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock-511366776.jpg?itok=cWhdWNZ8&resize=1100x1100' />
									<Paragraph />
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Card.Group>

					<Modal closeIcon trigger={
						<Card link centered style={{width:"32%"}}>
							<Image fluid size="large" src='https://natgeo.imgix.net/factsheets/thumbnails/article%20-%20Hidden%20Penguin%20Mega-Colonies%20Discovered%20in%20Antarctica.jpg?auto=compress,format&w=1024&h=560&fit=crop' />
							<Card.Content>
								<Card.Header>Sticky Keys</Card.Header>
							 	<Card.Description>Game</Card.Description>
							</Card.Content>
						</Card>
					}>
						<Modal.Header>Sticky Keys</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Image fluid style={{width: "100%"}} src='https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock-511366776.jpg?itok=cWhdWNZ8&resize=1100x1100' />
									<Paragraph />
									<Paragraph />
									<Paragraph />
								</Modal.Description>
							</Modal.Content>
					</Modal>	       	
		        </Container>		      
			</div>
			);
	}

}