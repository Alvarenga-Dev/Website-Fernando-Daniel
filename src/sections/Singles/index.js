import React from 'react';
import { Element } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import SingleCard from '../../components/SingleCard';

import { Footer } from './styles';
import singleCair from '../../assets/single-cair.png';
import singleAteVoltares from '../../assets/single-ate-voltares.png';
import singleTalComoSou from '../../assets/single-tal-como-sou.png';
import singleVoltas from '../../assets/single-voltas.png';

const Singles = () =>  (
    <Element name="singles">
        <Container>
            <Row className="justify-content-md-center">
               <Col md="auto">
                    <SingleCard image={singleCair} description="Single Cair" link="https://open.spotify.com/album/5KdyJWi9bn2qcHL8U067pJ?si=bQJACgnzQC6Rm5A47l3UMg"/>
                </Col>
               <Col md="auto">
                    <SingleCard image={singleAteVoltares} description="Single Até Voltares" link="https://open.spotify.com/track/3jDqavkXI8JfdzX41njdWn?si=UxaD3AivSN-CFUxe4SIPTQ"/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
               <Col md="auto">
                    <SingleCard image={singleTalComoSou} description="Single Tal como sou" link="https://open.spotify.com/track/1Ow1gItnI7alCezwAhygT7?si=ZAcP1V9ZTwqIBan0bRbqyA"/>
                </Col>
               <Col md="auto">
                    <SingleCard image={singleVoltas} description="Single Voltas" link="https://open.spotify.com/track/3K53RODdfVk8K9yv3GCPQP?si=fxZv8wRNR9K1ZrqT39Lw5g"/>
                </Col>
            </Row>
            <Footer> Copyright © 2020 | Design by Lucas Alvarenga </Footer>
        </Container>
    </Element>
)

export default Singles;
