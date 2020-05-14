import React from 'react';
import { Element, Link } from 'react-scroll';
import { HeaderContainer, HeaderContent, SocialMedia, List, Itens } from './styles';

const Header = () => (
        <HeaderContainer>
            <Element className="headerImage" name="header">
                <HeaderContent>
                    <h1>F Ξ R N Λ И D O D Λ N I Ξ L</h1>
                    <Link className="button-singles" to="singles" spy={true} smooth={true} duration={600}>Últimos Singles</Link>
                </HeaderContent>
                <SocialMedia>
                        <List>
                            <li>
                                <Itens title="Instagram" href="https://www.instagram.com/ofernandodaniel/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </Itens>
                            </li>
                            <li>
                                <Itens title="Facebook" href="https://www.facebook.com/ofernandodaniel/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </Itens>
                            </li>
                            <li>
                                <Itens title="Youtube" href="https://www.youtube.com/channel/UCSgU1_31gLZFzpjC_MBtxoA" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-youtube" aria-hidden="true"></i>
                                </Itens>
                            </li>
                            <li>
                                <Itens title="Spotify" href="https://open.spotify.com/artist/3Cpjz5dY9HNR41QuMn3oYC?si=0veC9BkuS5yMhLdkoyeWnQ" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-spotify" aria-hidden="true"></i>
                                </Itens>
                            </li>
                        </List>
                </SocialMedia>
            </Element>
        </HeaderContainer>
)

export default Header;
