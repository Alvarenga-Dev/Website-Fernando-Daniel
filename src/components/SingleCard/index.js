import React from 'react';
import { CardContainer, ButtonGoToSpotify } from './styles';

const SingleCard = ({image, description, link}) => (
    <CardContainer>
        <img src={image} alt={description} />
        <ButtonGoToSpotify target="_blank" href={link}>Ouvir no Spotify <i class="fa fa-spotify" aria-hidden="true"></i></ButtonGoToSpotify>
    </CardContainer>
)

export default SingleCard;
