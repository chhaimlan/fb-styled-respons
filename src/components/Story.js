import React from "react";
import styled from "styled-components";

function Story() {
  return (
    <Container>
      <List image="https://www.gannett-cdn.com/-mm-/d5cc2e96a619a990e1e2f0f6e5f6ff27d71df61e/c=0-767-2890-2400/local/-/media/2018/05/15/USATODAY/USATODAY/636620180299652238-AFP-AFP-1385P1-98737481.JPG">
        <Profile src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0MDI4MjA1ODc3ODMxMzY5/ronaldo-numero-uno.jpg" />
        <UserName>
          <h4>Ronaldo</h4>
        </UserName>
      </List>
      <List image="https://i.insider.com/5fbe52b350e71a00115574c4?width=700">
        <Profile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGF6o09d7JMYB1GkUeW7pcGPPLrxGkIrubQuj67DshfTIkKFviTfIB9TtmmBkOlxHuCg&usqp=CAU" />
        <UserName>
          <h4>Messi</h4>
        </UserName>
      </List>
      <List image="https://upload.wikimedia.org/wikipedia/commons/0/0c/USMNT_vs._Trinidad_and_Tobago_%2848124897017%29_%28cropped%29.jpg">
        <Profile src="https://cdn.vox-cdn.com/thumbor/6RGBT_-0yEKAE-dSEG91CkebfJo=/0x0:4778x3185/1400x933/filters:focal(2007x1211:2771x1975):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65354865/usa_today_12841374.0.jpg" />
        <UserName>
          <h4>Saul</h4>
        </UserName>
      </List>
      <List image="https://images.immediate.co.uk/production/volatile/sites/3/2021/08/GettyImages-1335764370-1-b1bd34c.jpg?quality=90&resize=620,413">
        <Profile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMOuQ7UkO46NaH6t0c-NsqTjN3RkReKEaHkflEu3SmpPQhw8Eng0ggE2UVBnY6Oe3IoY&usqp=CAU" />
        <UserName>
          <h4>Grealish</h4>
        </UserName>
      </List>
      <List image="https://e0.365dm.com/21/09/768x432/skysports-kevin-de-bruyne-man_5506851.jpg?20210909230656">
        <Profile src="https://e0.365dm.com/20/07/1600x900/skysports-kevin-de-bruyne-manchester-city_5028684.jpg?20200702214909" />
        <UserName>
          <h4>De Bruyes</h4>
        </UserName>
      </List>
    </Container>
  );
}

export default Story;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const UserName = styled.div`
  bottom: 5px;
  left: 20px;
  color: white;
  h4 {
    bottom: 10px;
    align-items: center;
  }
`;

const List = styled.div`
  display: flex;
  border-radius: 10px;
  width: 116px;
  height: 190px;
  background-color: white;
  margin: 0px 6px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  img {
    border-radius: 10px;
    width: inherit;
    height: inherit;
    object-fit: cover;
    transform: scale(0.9);
  }

  :hover {
    -ms-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    transform: scale(1.05);
    transition: transform ease-in 0.2s;
  }

  @media (max-width: 1000px) {
    width: 100px;
    height: 160px;
  }

  @media (max-width: 580px) {
    width: 21vw;
    height: 20vh;

    :nth-child(n + 5) {
      display: none;
    }
  }
`;

const Profile = styled.img`
  border-radius: 40px !important;
  margin: 14px 8px;
  width: 32px !important;
  height: 32px !important;
  border: 4px solid #2e89ff;
`;
