import React from 'react'
import styled from 'styled-components'
import Email from '../../assets/FooterIcon/Email.png'
import FaceBook from '../../assets/FooterIcon/SocialIcons/FaceBook.png'
import Instagram from '../../assets/FooterIcon/SocialIcons/Instagram.png'
import Telegram from '../../assets/FooterIcon/SocialIcons/Telegram.png'
import Twitter from '../../assets/FooterIcon/SocialIcons/Twitter.png'
import Youtube from '../../assets/FooterIcon/SocialIcons/YouTube.png'
import WhatsApp from '../../assets/FooterIcon/whatsAppIcon.png'

const Footer = ({ number, email }) => {
  return (
    <Container>
      <ContactsContainer>
        <div>
          <ContactsTitle>Contact Us</ContactsTitle>
          <ContactsDiv>
            <ImgIcons src={WhatsApp} alt='error WhatsApp.png' />
            <ContactsNumber>{number}+996 000 000 000</ContactsNumber>
          </ContactsDiv>
          <EmailDiv>
            <ImgIcons src={Email} alt='error Email.png' />
            <ContactsNumber>{email}daniel@gmail.com</ContactsNumber>
          </EmailDiv>
        </div>
      </ContactsContainer>
      <SocialContainer>
        <ContactsTitle>Social media</ContactsTitle>
        <IconsSocials>
          <SocialsIcons src={WhatsApp} alt='error WhatsApp.png' />
          <SocialsIcons src={Youtube} alt='error YouTube.png' />
          <SocialsIcons src={Twitter} alt='error Twitter.png' />
        </IconsSocials>
        <IconsSocials>
          <SocialsIcons src={Telegram} alt='error Telegram.png' />
          <SocialsIcons src={Instagram} alt='error Instagram.png' />
          <SocialsIcons src={FaceBook} alt='error FaceBook.png' />
        </IconsSocials>
      </SocialContainer>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  width: 100%;
  height: 20vw;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  padding: 2vw 0 0 0;
  @media (max-width: 541px) {
    height: 25vw;
    padding: 1vw 0 0 0;
  }
  @media (max-width: 394px) {
    height: 33vw;
    padding: 1.5vw;
  }
`
const ContactsContainer = styled.div`
  width: 20%;
  color: #fff;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin: 0 0 0 12vw;
  @media (max-width: 541px) {
    width: 30%;
    margin: 0 0 0 5vw;
  }
`
const ContactsTitle = styled.h2`
  color: #fff;
  font-family: Roboto;
  font-size: 2.5vw;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.4px;
  @media (max-width: 541px) {
    font-size: 3.5vw;
  }
`
const ContactsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0 20px 0;
  @media (max-width: 821px) {
    margin: 10px 0 20px 0;
  }
  @media (max-width: 541px) {
    margin: 10px 0 10px 0;
  }
`
const EmailDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const ContactsNumber = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 541px) {
    font-size: 2.5vw;
  }
`
const ImgIcons = styled.img`
  width: 3vw;
  flex-shrink: 0;
  @media (max-width: 541px) {
    width: 4.5vw;
  }
`
const SocialContainer = styled.div`
  color: #fff;
  margin: 0 0 0 10vw;
  display: flex;
  flex-direction: column;
  align-items: start;
`
const IconsSocials = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 821px) {
    margin: 10px 0 10px 0;
  }
  @media (max-width: 541px) {
    width: 20vw;
    margin: 5px 0 10px 0;
  }
`
const SocialsIcons = styled.img`
  width: 3.5vw;
  flex-shrink: 0;
  @media (max-width: 541px) {
    width: 5vw;
  }
`
