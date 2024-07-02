import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Section Title
import SectionTitle from '../common/section-title';
//Import service box
import ServiceBox from '../services/service-box';
//Import Ask Question
import AskQuestion from '../services/AskQuestions';

class Services extends Component {
	state = {
		services: [
			{
				icon: 'search',
				title: 'Search for a doctor',
				desc: 'Same-day appointments, in-person or remote, that start on time'
			},
			{
				icon: 'message-square',
				title: 'Easy Chat',
				desc: 'Unlimited 24/7 Video Chats with our virtual medical team at no extra cost'
			},
			{
				icon: 'map-pin',
				title: 'Locate Us',
				desc: 'Access to all hospitals and labs across India'
			},
			{
				icon: 'book',
				title: 'Book an appointment',
				desc: 'Easy appointment booking with a doctor in seconds.'
			},
			{
				icon: 'info',
				title: 'Diagnosis & test',
				desc: 'Easy access to COVID-19 testing and care.'
			},
			{
				icon: 'activity',
				title: 'Rapid response',
				desc: 'Our experts will help get quality healthcare'
			}
		]
	};

	render() {
		return (
			<section className="section bg-light" id="services">
				<Container>
					<SectionTitle
						subtitle="Services"
						title="What We do"
						desc="We provide quality health care service using innovative technology."
					/>
					<Row>
						<ServiceBox services={this.state.services} />
					</Row>
					<Row className="mt-4">
						<Col lg={12}>
							<div className="text-center">
								<Link to="#" className="btn btn-primary" style={{boxShadow: 'none'}}>
									View more
								</Link>
							</div>
						</Col>
					</Row>
					<AskQuestion />
				</Container>
			</section>
		);
	}
}
export default Services;
