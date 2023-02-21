import React from 'react';
import { Row, Container } from 'reactstrap';
import BoardMemberCard from '../components/BoardMemberCard';
import no_image from "../empty_profile.jpeg"

const griely = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/griely_persia.jpg?alt=media&token=029674f0-05cb-4d29-9f85-da2c72068092";
const maria = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/maria_membrebe.png?alt=media&token=6eed239e-0f10-4649-8584-b3cda6d6ab99";
const erna = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/erna_pollicar.jpg?alt=media&token=cec83514-abc1-4daa-a987-8dcd839c6225";
const ann = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/ann_aquino.jpg?alt=media&token=495a6b8c-1784-407e-ae63-271a56518d74";
const arnel = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/arnel_abesamis.jpg?alt=media&token=592c8fa9-0039-4668-9229-d1ae26f04cdd";
const dedeen = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/dedeen_womer.jpg?alt=media&token=0e91ac9c-8bc4-46cb-b23d-99894f4758c8"
const josefina = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Josefina_Jarina.jpeg?alt=media&token=884ebece-8324-4df9-b35d-0b007fb39d7e"
const conrad = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/conrad_utanes.jpg?alt=media&token=28f144dd-8777-4e8e-b562-308858fa2c17"
const leilani = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/leilani_turman.jpg?alt=media&token=a9a7e6df-39af-487c-962f-bbc4f6533bc2"
const hermie = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/hermie_nudo.jpg?alt=media&token=9214ee7f-e6be-469c-a75a-71eb5bce29b0"
const mercy = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/mercy_bowerman.jpg?alt=media&token=3b28e768-e3ff-452c-ac31-614fccbe77b7"
const grace = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Bethel_Calilung.jpeg?alt=media&token=1ba82287-85a2-488f-8d18-dfb715a726a6"
const bethel = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Grace_Aureus.jpeg?alt=media&token=5dcfcc6e-514f-4745-8839-44618e1989ae"
const maria_b = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Maria_Rowena_Benitez.jpeg?alt=media&token=4d8063f9-b593-403b-b8b2-a63c9925ad52"

const griely_persia = "Griely Persia, MSN, RN";
const maria_membrebe = "Maria Sheilla Membrebe, DNP, MSN/ED, RN";
const erna_pollicar = "Erna Pollicar, MSN, BSN";
const grace_aureus = "Grace Aureus, MSN, RN";
const ann_aquino = "Ann Roselle Aquino, BSN, RN";
const maria_benitez = "Maria Rowena Benitez, MSN, RN";
const arnel_abesamis = "Arnel Abesamis, MSN, RN";
const dedeen_womer = "Dedeen Womer, MSN, RN";
const josefina_jarina = "Josefina Jarina, BSN, RN";
const conrad_itanes = "Conrad Utanes, CRNP, MBA, RN";
const leilani_turman = "Leilani Turman, BSN, RN";
const bethel_calilung = "Bethel Oris Calilung";
const hermie_nudo = "Hermie Nudo, MSN, RN";
const fe_nieves = "Fe Nieves, MSN, RN";
const virginia_alinsao = "Virginia Alinsao, MSN, RN";
const mercy_bowerman = "Mercy Bowerman, BSN, RN";

function BoardOfDirectors() {
  return (
    <Container className='mb-4'>
      <Row>
        <h1 className='text-black text-center mt-4'>Executive Board</h1>
        <h2 className='text-black text-center mb-3'>2022-2024</h2>
      </Row>
      <Row className='d-flex justify-content-center'>
        <BoardMemberCard title={"President"} name={griely_persia} image={griely} />
        <BoardMemberCard title={"President-Elect"} name={maria_membrebe} image={maria} />
        <BoardMemberCard title={"Secretary"} name={erna_pollicar} image={erna} />
        <BoardMemberCard title={"Assitant Secretary"} name={grace_aureus} image={grace} />
        <BoardMemberCard title={"Treasurer"} name={ann_aquino} image={ann} />
        <BoardMemberCard title={"Assitant Treasurer"} name={maria_benitez} image={maria_b} />
        <BoardMemberCard title={"Board Member 1"} name={arnel_abesamis} image={arnel} />
        <BoardMemberCard title={"Board Member 2"} name={dedeen_womer} image={dedeen} />
        <BoardMemberCard title={"Board Member 3"} name={josefina_jarina} image={josefina} />
        <BoardMemberCard title={"Board Member 4"} name={conrad_itanes} image={conrad} />
        <BoardMemberCard title={"Auditor"} name={leilani_turman} image={leilani} />
        <BoardMemberCard title={"Assistant Auditor"} name={bethel_calilung} image={bethel} />
        <BoardMemberCard title={"Parliamentarian"} name={hermie_nudo} image={hermie} />
        <BoardMemberCard title={"Advisory Council"} name={fe_nieves} image={no_image} />
        <BoardMemberCard title={"Advisory Council"} name={virginia_alinsao} image={no_image} />
        <BoardMemberCard title={"Advisory Council"} name={mercy_bowerman} image={mercy} />
      </Row>
    </Container>
  )
}

export default BoardOfDirectors