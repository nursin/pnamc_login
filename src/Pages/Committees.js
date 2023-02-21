import React from 'react';
import { Row, Container } from 'reactstrap';
import BoardMemberCard from '../components/BoardMemberCard';
import no_image from "../empty_profile.jpeg"

const maria = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/maria_membrebe.png?alt=media&token=6eed239e-0f10-4649-8584-b3cda6d6ab99";
const arnel = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/arnel_abesamis.jpg?alt=media&token=592c8fa9-0039-4668-9229-d1ae26f04cdd";
const dedeen = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/dedeen_womer.jpg?alt=media&token=0e91ac9c-8bc4-46cb-b23d-99894f4758c8"
const josefina = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Josefina_Jarina.jpeg?alt=media&token=884ebece-8324-4df9-b35d-0b007fb39d7e"
const conrad = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/conrad_utanes.jpg?alt=media&token=28f144dd-8777-4e8e-b562-308858fa2c17"
const leilani = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/leilani_turman.jpg?alt=media&token=a9a7e6df-39af-487c-962f-bbc4f6533bc2"
const gene = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/gene_chu.jpg?alt=media&token=a76b2000-ca1f-479a-af1d-c260a212dd36"
const jonathan = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/jonathan_espenancia.jpg?alt=media&token=6ddd79ec-b20e-4ee5-af2a-ede44cacecb5"
const alvin = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/alvin_mariano.jpg?alt=media&token=25ee5def-5849-4078-93a7-851cea9e59c8"
const jade = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/jade_flinn.jpg?alt=media&token=f0333cf6-7e46-4de2-9840-57aa8212cb3a"
const lila = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/lila_salada.jpg?alt=media&token=94af97bc-d44f-4db7-bcd4-45e9ee233f85"
const arulanda = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Aurolanda_Peralta.jpeg?alt=media&token=3048281e-1aab-47d8-ad31-20090b48166f"
const wilma = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/wilma_kalaw.jpg?alt=media&token=200037fc-756e-467c-a994-f256cf378841"
const rowena = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/rowena_villacorta.jpg?alt=media&token=47ced79e-9239-454c-bc74-6c7f8d177515"
const marianne = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/marianne_samontanez.jpg?alt=media&token=6db8604b-3c48-424e-8aea-ac807d7aabdb"
const bethel = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Grace_Aureus.jpeg?alt=media&token=5dcfcc6e-514f-4745-8839-44618e1989ae"
const chat = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Chat_Mapatac.jpeg?alt=media&token=12798017-b546-4a64-b70c-140ac6efa932"
const jun = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/Jun_Fernandez.jpeg?alt=media&token=95f5aa17-a6c0-40ab-9e89-dd1309fae6ca"

const maria_membrebe = "Maria Sheilla Membrebe, DNP, MSN/ED, RN";
const alvin_mariano = "Alvin Mariano, BSN, RN";
const jade_flinn = "Jade Flinn, MSN, RN";
const arnel_abesamis = "Arnel Abesamis, MSN, RN";
const dedeen_womer = "Dedeen Womer, MSN, RN";
const josefina_jarina = "Josefina Jarina, BSN, RN";
const conrad_utanes = "Conrad Utanes, CRNP, MBA, RN";
const leilani_turman = "Leilani Turman, BSN, RN";
const gene_chu = "Gene Faenconi-Chu, BSN, RN";
const jonathan_espenancia = "Jonathan Espenancia, BSN, RN";
const jun_fernandez = "Jun Fernandez, BSN, RN";
const lil_salada = "Lil Salada, BSN, RN";
const chat_mapatac = "Chat Mapatac, BSN, RN";
const bethel_calilung = "Bethel Oris Calilung";
const arulanda_peralta = "Aurolanda Peralta, BSN, RN";
const wilma_kalaw = "Wilma Kalaw, BSN, RN";
const rowena_villacorta = "Rowena F. Villacorta, MSN, CRNP";
const marianne_samontanez = "Marianne Samontanez BSN, RN";

function Committees() {
    return (
        <Container className='mb-4'>
            <Row>
                <h1 className='text-black text-center mt-4'>Committees</h1>
                <h2 className='text-black text-center mb-3'>2022-2024</h2>
            </Row>
            <Row>
                <h1 className='committee__subtitleContainer text-center mt-4 bg-black p-2'>Membership Committee</h1>
            </Row>
            <Row className='d-flex justify-content-center'>
                <BoardMemberCard title={"Director"} name={arnel_abesamis} image={arnel} />
                <BoardMemberCard title={"Chair"} name={gene_chu} image={gene} />
                <BoardMemberCard title={"Co-Chair"} name={alvin_mariano} image={alvin} />
                <BoardMemberCard title={"Co-Chair"} name={jun_fernandez} image={jun} />
            </Row>
            <Row>
                <h1 className='committee__subtitleContainer text-center mt-4 bg-black p-2'>Education Committee</h1>
            </Row>
            <Row className='d-flex justify-content-center'>
                <BoardMemberCard title={"Director"} name={conrad_utanes} image={conrad} />
                <BoardMemberCard title={"Chair"} name={maria_membrebe} image={maria} />
                {/* <BoardMemberCard title={"Co-Chair"} name={jade_flinn} image={jade} /> */}
            </Row>
            <Row>
                <h1 className='committee__subtitleContainer text-center mt-4 bg-black p-2'>Socials Committee</h1>
            </Row>
            <Row className='d-flex justify-content-center'>
                <BoardMemberCard title={"Director"} name={lil_salada} image={lila} />
                <BoardMemberCard title={"Chair"} name={chat_mapatac} image={chat} />
                <BoardMemberCard title={"Co-Chair"} name={arulanda_peralta} image={arulanda} />
                {/* <BoardMemberCard title={"Co-Chair"} name={wilma_kalaw} image={wilma} /> */}
            </Row>
            <Row>
                <h1 className='committee__subtitleContainer text-center mt-4 bg-black p-2'>Community Outreach Committee</h1>
            </Row>
            <Row className='d-flex justify-content-center'>
                <BoardMemberCard title={"Director"} name={josefina_jarina} image={josefina} />
                <BoardMemberCard title={"Chair"} name={rowena_villacorta} image={rowena} />
                <BoardMemberCard title={"Co-Chair"} name={marianne_samontanez} image={marianne} />
            </Row>
            <Row>
                <h1 className='committee__subtitleContainer text-center mt-4 bg-black p-2'>Awards & Recognition Committee</h1>
            </Row>
            <Row className='d-flex justify-content-center'>
                <BoardMemberCard title={"Director"} name={dedeen_womer} image={dedeen} />
                <BoardMemberCard title={"Chair"} name={jonathan_espenancia} image={jonathan} />
            </Row>
            <Row>
                <h1 className='committee__subtitleContainer text-center mt-4 bg-black p-2'>Additional Chairs</h1>
            </Row>
            <Row className='d-flex justify-content-center round-bottom'>
                <BoardMemberCard title={"Webmaster"} name={jonathan_espenancia} image={jonathan} />
                <BoardMemberCard title={"Auditor"} name={leilani_turman} image={leilani} />
                <BoardMemberCard title={"Assitant Auditor"} name={bethel_calilung} image={bethel} />
            </Row>
        </Container >
    )
}

export default Committees