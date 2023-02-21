import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
const memberApplication = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/PNAMCMembershipApplicationForm.doc?alt=media&token=f54bb1ad-0b8f-4e7f-a90a-1456e68389f8"

function Membership() {
  return (
    <Container className='my-5'>
      <Row className="d-flex-inline justify-content-center membership__benefitsContainer">
        <Col md={8}>
          <h2 className='text-black'>PNAMC Membership Benefits</h2>
          <ul>
            <li>
              PRIVILEGE OF REPRESENTATION. Your chapter membership makes you a Philippine Nurses Association of America member along with 10,000 Filipino-American nurses in the USA. You are represented in various professional organizations, government agencies, community groups and other coalitions.
            </li>
            <li>
              NETWORKING. opportunities for networking with experts in your own specialty and in other fields, when participating in our professional activities at the local, state, national and international level.
            </li>
            <li>
              EDUCATIONALOPPORTUNITIES. Discounted fees to educational programs at the chapter, regional, national and international levels. PNAMC provides local quarterly continuing education for free.
            </li>
            <li>
              LEADERSHIP DEVELOPMENT. Various opportunities to develop your leadership skills.
            </li>
            <li>
              SERVING YOUR COLLEAGUES. You will have the opportunity of serving as a delegate, officer or committee member at the local or national level, vote on important issues, decisions and actions affecting Filipino-American nurses especially in the Asian community at large.
            </li>
            <li>
              GIVING BACK TO OUR HOME COUNTRY. Participate in health care missions sponsored by PNAMC and Balik Turo Program to share expertise with our counterparts in the Philippines
            </li>
            <li>
              COLLECTIVE POWER OF A GROUP OF COMMITTED AND COMPASSIONATE FILIPINO- AMERICAN NURSES. We advocate for issues affecting Filipino-American nurses in the workplace.
            </li>
            <li>
              COLLABORATE WITH OTHER PROFESSIONAL ORGANIZATIONS TO ADVANCE CAUSES of FILIPINO-AMERICAN NURSES AND To SUPPORT ISSUES OF COMMON INTEREST.
            </li>
            <li>
              DEMONSTRATE OUR COMMITMENT TO OUR LOCAL COMMUNITY BY SUPPORTING ACTIVITIES TO PROMOTE THE POSITIVE IMAGE OF FILIPINO NURSES. We participate in local health fairs, Philippine community events, volunteer at local homeless shelter or healthcare for the homeless and other events as requested.
            </li>
            <li>
              MENTORSHIP. We have a experts in almost all specialties among our kababayans who can serve as mentors to members.
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="d-flex-inline justify-content-center membership__benefitsContainer">
        <Col md={8}>
          <h2 className='text-black'>PNAA Membership Benefits</h2>
          <ul>
            <li>
              Receive a PNAA monthly newsletter <i>Inside PNAA</i> electronically (correct email provided).
            </li>
            <li>
              Free subscription bi-annually to peer-reviewed journals, the <i>Journal of Nursing Practice Applications and Reviews of Research (JNPARR)</i>
            </li>
            <li>
              Tuition discount (10%) with PNAA university partners (e.g. Grand Canyon University, Walden University).
            </li>
            <li>
              Free or discounted contact hours.
            </li>
            <li>
              Free access to Leadership Development Program (iLDP)
            </li>
            <li>
              Your membership could be a valuable benefit to your clinical ladder or career enhancement program.
            </li>
            <li>
              Network with subject matter experts in your field of specialty from different chapters across the country.
            </li>
            <li>
              Check out mypnaa.org and join PNAA's Facebook Page for the latest news and updates about the organization and other relevant issues.
            </li>
            <li>
              Meet and greet your chapter leaders and members through online meetings (or face to face if permissible).
            </li>
            <li>
              Give back to the community through chapter sponsored events such as local health screenings, community outreach, and medical missions.
            </li>
            <li>
              Apply for scholarship awards (NAtional or Local Chapter), research grants.
            </li>
            <li>
              Be nominated for PNAA nursing excellence award.
            </li>
            <li>
              Attend one of PNAA's regional, national, or international conferences.
            </li>
            <li>
              Runf to serve as an officer and develop your leadership skills.
            </li>
            <li>
              Volunteer as a committee member at the national level and vote on important issues/actions that afect the Filipino-American nurses.
            </li>
            <li>
              Stay active with our annual 5K marathon funderaising event.
            </li>
            <li>
              Access <a className='text-primary me-0' href='https://mypnaa.org/Sys/Store/Products/19084' target="_blank" rel="noreferrer">PNAA's Tapestry Book</a> in our website's online store: A landmark ebook that traces the 40 years of history of this remarkable organization. 
            </li>
            <li>
              Career opportunities/job posting via <a className='text-primary me-0' href='https://mypnaa.org' target="_blank" rel="noreferrer">mypnaa.org</a>
            </li>
            <li>
              Visit PNAA's new headquarters, the legacy building in North Brunswick, New Jersey.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="d-flex-inline justify-content-center membership__eligibilityContainer">
        <Col md={8}>
          <h2 className='text-black'>Message From The Membership Committee</h2>
          <p className='text-black'>
            Do you qualify for any of the criteria listed below AND are you interested to become a part of an organization with a common understanding and who shares a common interest with you?

            If you are then please join us.  Please click on the Membership Application Form below, fill up this form and send it with your registration payment to the PNAMC Treasurer as indicated on the form.
          </p>
          <p className='text-black'>
            Criteria for Membership (any 1 below):
          </p>
          <ul>
            <li>
              RN of Philippine ethnic origin lives or works in MD and maintains an active or inactive license to practice nursing in Maryland or bordering states.
            </li>
            <li>
              Military Personnel of Phil. ethnic origin who lives or works in the state of MD may be license to practice nursing in any state of the United States
            </li>
            <li>
              RN of Philippine ethnic origin, a resident of MD who is not licensed to practice in the United States.
            </li>
            <li>
              RN of non-Phil. ethnic origin, a resident of MD, who has been granted a license to practice in his/her country of origin and/or State of MD.
            </li>
            <li>
              RN of Philippine ethnic origin residing in the state of Maryland.
            </li>
            <li>
              RN of  non-Philippine ethnic origin who had been a member of  PNAA for at least 2 years
            </li>
            <li>
              A student nurse of Phil. ethnic origin, a resident of MD and who is at the Clinical Training phase of a Nursing Program.
            </li>
          </ul>
          <div className='text-center'>
            <Button href={memberApplication} className='membership__formButton'>Download Application</Button>
          </div>

        </Col>
      </Row>
    </Container>
  )
}

export default Membership