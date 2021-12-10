import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {
  ChatBubbleOutlineOutlined,
  Favorite,
  MoreHoriz,
  ReplyOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@material-ui/icons";

function Content() {
  return (
    <>
      <Container>
        <Header>
          <Profile>
            <Avatar src="https://www.gannett-cdn.com/-mm-/d5cc2e96a619a990e1e2f0f6e5f6ff27d71df61e/c=0-767-2890-2400/local/-/media/2018/05/15/USATODAY/USATODAY/636620180299652238-AFP-AFP-1385P1-98737481.JPG" />
            <Title>
              <h4>Ronaldo</h4>
              <p>5d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>The all of you is i need for help</div>
        </Text>
        <Image>
          <img
            src="https://www.gannett-cdn.com/-mm-/d5cc2e96a619a990e1e2f0f6e5f6ff27d71df61e/c=0-767-2890-2400/local/-/media/2018/05/15/USATODAY/USATODAY/636620180299652238-AFP-AFP-1385P1-98737481.JPG"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>10k comments</p>
              <p>900 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://i.insider.com/5fbe52b350e71a00115574c4?width=700" />
            <Title>
              <h4>Messsi</h4>
              <p>5d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>The team is the best and will be win</div>
        </Text>
        <Image>
          <img
            src="https://i.insider.com/5fbe52b350e71a00115574c4?width=700"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/11/18/16372472852365.jpg" />
            <Title>
              <h4>Neymar Jr</h4>
              <p>5d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>Keep moving on the football</div>
        </Text>
        <Image>
          <img
            src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/11/18/16372472852365.jpg"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://phantom-marca.unidadeditorial.es/08cf9e4abc697dd3a082b870da68cb09/resize/1320/f/jpg/assets/multimedia/imagenes/2021/12/04/16386096389592.jpg" />
            <Title>
              <h4>Benzima</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://phantom-marca.unidadeditorial.es/08cf9e4abc697dd3a082b870da68cb09/resize/1320/f/jpg/assets/multimedia/imagenes/2021/12/04/16386096389592.jpg"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://barcauniversal.com/wp-content/uploads/2021/09/1006288051-scaled.jpg" />
            <Title>
              <h4>De Jong</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://barcauniversal.com/wp-content/uploads/2021/09/1006288051-scaled.jpg"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://www.vbetnews.com/wp-content/uploads/2021/02/vinicius-junior-real-madrid-2019-20_9xicbub0yj1h1615zqeqtls9a.jpg" />
            <Title>
              <h4>Jounori Jr</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://www.vbetnews.com/wp-content/uploads/2021/02/vinicius-junior-real-madrid-2019-20_9xicbub0yj1h1615zqeqtls9a.jpg"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://resources.premierleague.com/photos/2021/08/17/fe0a06ca-5fc9-46ca-af97-dfc8f03dcd2a/lukaku-joins-chelsea-4.png?width=860&height=573" />
            <Title>
              <h4>Lukaku</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://resources.premierleague.com/photos/2021/08/17/fe0a06ca-5fc9-46ca-af97-dfc8f03dcd2a/lukaku-joins-chelsea-4.png?width=860&height=573"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://images.beinsports.com/TJKPk1XA9cURD-NEaVaGxap7LyE=/full-fit-in/1000x0/3837008-MicrosoftTeams-image-%2855%29.png" />
            <Title>
              <h4>Depay</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://images.beinsports.com/TJKPk1XA9cURD-NEaVaGxap7LyE=/full-fit-in/1000x0/3837008-MicrosoftTeams-image-%2855%29.png"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/12/06105651/Bernardo-Silva-Manchester-City-Watford.jpg" />
            <Title>
              <h4>Bernadosilva</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/12/06105651/Bernardo-Silva-Manchester-City-Watford.jpg"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://images.beinsports.com/8mjdCRen4W1bKqR0G62V6-8ZB0g=/full-fit-in/1000x0/felix-cropped_18l7o2hll74k3179zcjtqbmw2z.jpg" />
            <Title>
              <h4>Jao Flelix</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://images.beinsports.com/8mjdCRen4W1bKqR0G62V6-8ZB0g=/full-fit-in/1000x0/felix-cropped_18l7o2hll74k3179zcjtqbmw2z.jpg"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1314x345:1316x343)/origin-imgresizer.eurosport.com/2021/11/03/3247847-66474208-2560-1440.jpg" />
            <Title>
              <h4>Lawandoski</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1314x345:1316x343)/origin-imgresizer.eurosport.com/2021/11/03/3247847-66474208-2560-1440.jpg"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://images.immediate.co.uk/production/volatile/sites/3/2021/08/GettyImages-1335764370-1-b1bd34c.jpg?quality=90&resize=620,413" />
            <Title>
              <h4>Grealish</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/3/2021/08/GettyImages-1335764370-1-b1bd34c.jpg?quality=90&resize=620,413"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>

      <Container>
        <Header>
          <Profile>
            <Avatar src="https://cdn.vox-cdn.com/thumbor/6RGBT_-0yEKAE-dSEG91CkebfJo=/0x0:4778x3185/1400x933/filters:focal(2007x1211:2771x1975):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65354865/usa_today_12841374.0.jpg" />
            <Title>
              <h4>Saul</h4>
              <p>10d </p>
            </Title>
          </Profile>
          <MoreHoriz />
        </Header>
        <Text>
          <div>we try to the best to do some we want</div>
        </Text>
        <Image>
          <img
            src="https://cdn.vox-cdn.com/thumbor/6RGBT_-0yEKAE-dSEG91CkebfJo=/0x0:4778x3185/1400x933/filters:focal(2007x1211:2771x1975):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65354865/usa_today_12841374.0.jpg"
            alt=""
          />
        </Image>
        <EmojiCount>
          <EmojiList>
            <Emojis>
              <ThumbUp className="like" />
              <Favorite className="love" />
              <p>1M</p>
            </Emojis>
            <DetailInfo>
              <p>5k comments</p>
              <p>1000 shares</p>
            </DetailInfo>
          </EmojiList>
        </EmojiCount>
        <Bottom>
          <Reactios>
            <Icon>
              <ThumbUpOutlined />
              <p>Like</p>
            </Icon>
            <Icon>
              <ChatBubbleOutlineOutlined />
              <p>Comment</p>
            </Icon>
            <Icon>
              <ReplyOutlined className="share" />
              <p>Share</p>
            </Icon>
          </Reactios>
        </Bottom>
      </Container>
    </>
  );
}

export default Content;

const Container = styled.div`
  margin: 16px 6px;
  padding: 10px 0px;
  max-width: inherit;
  border-radius: 10px;
  background-color: #242526;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 0px 16px;
  display: flex;
  margin: 6px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .MuiSvgIcon-root {
    padding: 10px;
    cursor: pointer;
    border-radius: 40px;
  }

  :hover .MuiSvgIcon-root:hover {
    background-color: #525252b0;
  }
`;

const Profile = styled.p`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 12px;

  h4 {
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
  }

  p {
    cursor: pointer;
    color: #9ea1a5;
    font-size: 14px;
  }
`;

const Text = styled.div`
  padding: 0px 16px;
  margin: 6px 0px;
  display: flex;
  flex: 1;
  div {
    max-width: fit-content;
    font-size: 15px;
    margin-bottom: 6px;
  }
`;

const Image = styled.div`
  max-width: fit-content;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
const EmojiCount = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  margin: 0px 0px;
  border-bottom: 2px solid #343637;
`;

const EmojiList = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

const Emojis = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    font-size: 14px;
    margin: 0px 0px;
    padding: 4px;
    border-radius: 40px;
  }

  .like {
    background-color: #13a0f8;
  }

  .love {
    background-color: #fb5b77;
  }

  p {
    margin-left: 14%;
    color: #b5b5b5;
    font-weight: 100;
  }

  @media (max-width: 520px) {
    p {
      font-size: 76%;
    }
  }
`;

const DetailInfo = styled.div`
  display: flex;
  color: #9ea1a5;
  font-size: 16px;

  p {
    margin: 0px 6px;
  }

  @media (max-width: 520px) {
    p {
      font-size: 76%;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  margin: 0px 16px;
  margin-top: 6px;
`;

const Reactios = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

const Icon = styled.div`
  padding: 6px 2px;
  display: flex;
  justify-content: center;
  flex: 1;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  margin: 0px 6px;
  .share {
    transform: rotateY(180deg);
  }

  :hover {
    background-color: #525252b0;
  }

  p {
    margin-left: 6px;
  }

  @media (max-width: 520px) {
    p {
      font-size: 80%;
    }

    .MuiSvgIcon-root {
      font-size: 20px;
    }
  }
`;
