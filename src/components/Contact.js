import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <>
      <Container>
        <Avatar src="https://images.immediate.co.uk/production/volatile/sites/3/2021/08/GettyImages-1335764370-1-b1bd34c.jpg?quality=90&resize=620,413" />
        <p>Grealish</p>
      </Container>
      <Container>
        <Avatar src="https://e0.365dm.com/21/09/768x432/skysports-kevin-de-bruyne-man_5506851.jpg?20210909230656" />
        <p>De Bruyuse</p>
      </Container>
      <Container>
        <Avatar src="https://i.insider.com/5fbe52b350e71a00115574c4?width=700" />
        <p>Messi</p>
      </Container>
      <Container>
        <Avatar src="https://cdn.vox-cdn.com/thumbor/6RGBT_-0yEKAE-dSEG91CkebfJo=/0x0:4778x3185/1400x933/filters:focal(2007x1211:2771x1975):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65354865/usa_today_12841374.0.jpg" />
        <p>Saul</p>
      </Container>
      <Container>
        <Avatar src="https://www.gannett-cdn.com/-mm-/d5cc2e96a619a990e1e2f0f6e5f6ff27d71df61e/c=0-767-2890-2400/local/-/media/2018/05/15/USATODAY/USATODAY/636620180299652238-AFP-AFP-1385P1-98737481.JPG" />
        <p>Ronaldo</p>
      </Container>
      <Container>
        <Avatar src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/11/18/16372472852365.jpg" />
        <p>Neymar</p>
      </Container>
      <Container>
        <Avatar src="https://phantom-marca.unidadeditorial.es/08cf9e4abc697dd3a082b870da68cb09/resize/1320/f/jpg/assets/multimedia/imagenes/2021/12/04/16386096389592.jpg" />
        <p>Benzima</p>
      </Container>
      <Container>
        <Avatar src="https://barcauniversal.com/wp-content/uploads/2021/09/1006288051-scaled.jpg" />
        <p>De Jong</p>
      </Container>
      <Container>
        <Avatar src="https://www.vbetnews.com/wp-content/uploads/2021/02/vinicius-junior-real-madrid-2019-20_9xicbub0yj1h1615zqeqtls9a.jpg" />
        <p>Jounor Jr</p>
      </Container>
      <Container>
        <Avatar src="https://resources.premierleague.com/photos/2021/08/17/fe0a06ca-5fc9-46ca-af97-dfc8f03dcd2a/lukaku-joins-chelsea-4.png?width=860&height=573" />
        <p>Lukaku</p>
      </Container>
      <Container>
        <Avatar src="https://images.beinsports.com/TJKPk1XA9cURD-NEaVaGxap7LyE=/full-fit-in/1000x0/3837008-MicrosoftTeams-image-%2855%29.png" />
        <p>Depay</p>
      </Container>
      <Container>
        <Avatar src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/12/06105651/Bernardo-Silva-Manchester-City-Watford.jpg" />
        <p>Silva</p>
      </Container>
      <Container>
        <Avatar src="https://images.beinsports.com/8mjdCRen4W1bKqR0G62V6-8ZB0g=/full-fit-in/1000x0/felix-cropped_18l7o2hll74k3179zcjtqbmw2z.jpg" />
        <p>Jao felix</p>
      </Container>
      <Container>
        <Avatar src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1314x345:1316x343)/origin-imgresizer.eurosport.com/2021/11/03/3247847-66474208-2560-1440.jpg" />
        <p>Lawandoski</p>
      </Container>
    </>
  );
}

export default Contact;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  cursor: pointer;
  border-radius: 10px;
  margin: 4px 0px;

  p {
    margin-left: 6%;
  }

  :hover {
    background-color: #ffffff26;
  }
`;
