import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    LinkedIn,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  //import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    background-color: #1f2224
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
    color: white;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
    color: white;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    
    
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
//   const Center = styled.div`
//     flex: 1;
//     padding: 20px
//   `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    color: white;
  `;
  
//   const List = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
//   `;
  
//   const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
//     color: white;
//   `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    color: white;
    
    
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Elvis.</Logo>
          <Desc>
            For me, becoming isn’t about arriving somewhere or achieving a certain aim.<br/> 
            I see it instead as forward motion, a means of evolving, a way to reach<br/>
            continuously toward a better self. The journey doesn’t end.<br/>
            
            — Michelle Obama
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="004e92">
              <LinkedIn/>
            </SocialIcon>
          </SocialContainer>
        </Left>
        {/* <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Kids Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center> */}
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 304 Grove on the Grove , Claremont, Cape Town 7708
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +27 629 533 613
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> elvismulowayi@gmail.com
          </ContactItem>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="004e92">
              <LinkedIn/>
            </SocialIcon>
          </SocialContainer>
          {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  