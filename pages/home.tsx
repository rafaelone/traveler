import Image from 'next/image';
import {
  Header,
  Container,
  LeftSide,
  GridImages,
  Column,
  ColumnItem,
  GridContainer,
  ColumnItemInfo,
  ColumnItemImage,
} from '../styles/pages/Home';

const IndexPage: React.FC = () => (
  <>
    <Header>
      <Image src="/img/logo.svg" alt="Logo Traveler" width={156} height={32} />
      <button type="button">Acesso restrito</button>
    </Header>
    <Container>
      <LeftSide>
        <h1>Viva uma grande aventura</h1>
        <p>
          Descubra locais incríveis para se visitar em cidades maravilhosas de
          Santa Catarina.
        </p>
        <button type="button">Descobrir todos os lugares</button>
      </LeftSide>
      <GridContainer>
        <GridImages>
          <Column>
            <ColumnItem>
              <ColumnItemImage
                src="/img/cards/florianopolis.png"
                alt="florianopolis"
                width={304}
                height={220}
              />
              <ColumnItemInfo>
                <strong>Florianópolis</strong>
                <span>98 locais</span>
              </ColumnItemInfo>
            </ColumnItem>
            <ColumnItem>
              <ColumnItemImage
                src="/img/cards/bombinhas.png"
                alt="bombinhas"
                width={304}
                height={220}
              />
              <ColumnItemInfo>
                <strong>Bombinhas</strong>
                <span>43 locais</span>
              </ColumnItemInfo>
            </ColumnItem>
            <ColumnItem>
              <ColumnItemImage
                src="/img/cards/santorini.jpg"
                alt="santorini"
                width={304}
                height={220}
              />
              <ColumnItemInfo>
                <strong>Santorini</strong>
                <span>10 locais</span>
              </ColumnItemInfo>
            </ColumnItem>
          </Column>
          <Column>
            <ColumnItem>
              <ColumnItemImage
                src="/img/cards/blumenau.png"
                alt="Blumenau"
                width={304}
                height={220}
              />
              <ColumnItemInfo>
                <strong>Blumenau</strong>
                <span>29 locais</span>
              </ColumnItemInfo>
            </ColumnItem>
            <ColumnItem>
              <ColumnItemImage
                src="/img/cards/aguasMornas.png"
                alt="Águas mornas"
                width={304}
                height={220}
              />
              <ColumnItemInfo>
                <strong>Águas Mornas</strong>
                <span>13 locais</span>
              </ColumnItemInfo>
            </ColumnItem>
          </Column>
        </GridImages>
      </GridContainer>
    </Container>
  </>
);

export default IndexPage;
