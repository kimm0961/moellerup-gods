import React from 'react';
import './Footer.css';


const Footer = (props) => {
  let contactAdress = props.alleContactInformationerProp.map(ContactInformation => {
    return ContactInformation.id < 4 ? (
        <div className="contactInfoListe" key={ContactInformation.id}>
        <li className="my-2"><p>{ContactInformation.title} {ContactInformation.contactData}</p></li>
        </div>
  ) : null
});

  let contactinfo = props.alleContactInformationerProp.map(ContactInformation => {
    return ContactInformation.id > 3 ? (
        <div className="contactInfoListe" key={ContactInformation.id}>
        <li className="my-2"><p className="text-nowrap">{ContactInformation.title} {ContactInformation.contactData}</p></li>
        </div>
  ) : null
});



    return (
          <footer className="pt-4 my-md-5 py-md-4 border-top">
              <div className="Footer container">
    <div className="row">
      <div className="col-4 col-md">
        <ul className="list-unstyled text-small">
        {contactAdress}
        </ul>
      </div>
      <div className="col-4 col-md">
        <ul className="list-unstyled text-small">
          {contactinfo}
        </ul>
      </div>
      <div className="col-4 col-md">
        <ul className="text-small">
          <li className="my-2"><a className="text-muted" href="http://www.lonerubin.dk/">Tekst Lone Rubin</a></li>
        </ul>
      </div>
    </div>
    </div>
  </footer>
     );
}
 
export default Footer;