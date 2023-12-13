import React from 'react'
import Email from '../../../assets/FooterIcon/Email.png'
import FaceBook from '../../../assets/FooterIcon/SocialIcons/FaceBook.png'
import Instagram from '../../../assets/FooterIcon/SocialIcons/Instagram.png'
import Telegram from '../../../assets/FooterIcon/SocialIcons/Telegram.png'
import Twitter from '../../../assets/FooterIcon/SocialIcons/Twitter.png'
import Youtube from '../../../assets/FooterIcon/SocialIcons/YouTube.png'
import WhatsApp from '../../../assets/FooterIcon/whatsAppIcon.png'
import classes from './Footer.module.css'

const Footer = ({ number, email }) => {
  return (
    <footer className={classes.Container}>
      <div className={classes.ContactsContainer}>
        <div>
          <h3 className={classes.ContactsTitle}>Contact Us</h3>
          <div className={classes.ContactsDiv}>
            <img
              className={classes.ImgIcons}
              src={WhatsApp}
              alt='error WhatsApp.png'
            />
            <p className={classes.ContactsNumber}>{number}+996 000 000 000</p>
          </div>
          <div className={classes.EmailDiv}>
            <img
              className={classes.ImgIcons}
              src={Email}
              alt='error Email.png'
            />
            <a href='daniel@gmail.com' className={classes.ContactsNumber}>
              {email}daniel@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={classes.SocialContainer}>
        <h3 className={classes.ContactsTitle}>Social media</h3>
        <main className={classes.IconsSocials}>
          <img
            className={classes.SocialsIcons}
            src={WhatsApp}
            alt='error WhatsApp.png'
          />
          <img
            className={classes.SocialsIcons}
            src={Youtube}
            alt='error YouTube.png'
          />
          <img
            className={classes.SocialsIcons}
            src={Twitter}
            alt='error Twitter.png'
          />
        </main>
        <main className={classes.IconsSocials}>
          <img
            className={classes.SocialsIcons}
            src={Telegram}
            alt='error Telegram.png'
          />
          <img
            className={classes.SocialsIcons}
            src={Instagram}
            alt='error Instagram.png'
          />
          <img
            className={classes.SocialsIcons}
            src={FaceBook}
            alt='error FaceBook.png'
          />
        </main>
      </div>
    </footer>
  )
}

export default Footer
