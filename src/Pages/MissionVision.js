import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import pnaa_logo from '../PNAA_logo.png';
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';

function MissionVision() {
  return (
    <Container className='mb-3'>
      <Row className='text-center mt-4'>
        <Col>
          <img src={pnamc_logo} alt='pnamc logo' />
        </Col>
        <Col>
          <img src={pnaa_logo} alt='pnaa logo' />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className='text-center text-black my-3'>Mission & Vision</h1>
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' md={8}>
          <h2 className='text-black my-3'>Vision</h2>
          <p className='text-black'>
            The PNAMC is the premiere association for Filipino-American nurses in Maryland.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' md={8}>
          <h2 className='text-black my-3'>Mission</h2>
          <p className='text-black'>
            The mission of the PNAMC shall be to provide an organization that will uphold the image and foster the welfare of Filipino-American nurses in the State of Maryland as a professional group.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' md={8}>
          <h2 className='text-black my-3'>Values</h2>
          <ul className=''>
            <li>Respect and transparency</li>
            <li>Diversity and professionalism</li>
            <li>Collaboration and visibility</li>
            <li>Growth and recognition</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' md={8}>
          <h2 className='text-black my-3'>Objectives</h2>
          <p className='text-black'>
            The objectives of the PNAMC shall include, but not limited to the following:
          </p>
          <ul>
            <li>Provides opportunities to enhance professional growth of the Filipino-American nurses.</li>
            <li>Networks with professional organizations and agencies to advocate for programs that further the cause of nursing practice, education and research.</li>
            <li>Reviews and acts on legislation and public policies, which directly and indirectly affect nursing.</li>
            <li>Promotes activities to unify Filipino-American nurses in the State of Maryland.</li>
            <li>Participates in community and outreach activities.</li>
            <li>Collaborates with organizations and agencies, both in the Philippines and United States, to facilitate the professional and cultural adjustment of Filipino-American nurses in the State of Maryland.</li>
            <li>Promotes evidence based practice through education, engagement in research, performance improvement, and survey activities including health care needs of Filipino American nurses.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default MissionVision