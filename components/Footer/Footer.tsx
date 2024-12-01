'use client';
import { section } from '../../data/lumenContent.js';

const Footer: React.FC = () => {
  return (
    <section className='footer'>
        <div>
            <h1 className='footerTitle'>
            <span className='font-normal'>{section.footer.title}</span>
            {section.footer.description}</h1>
        </div>
        <div className="footerBottom">
        <div className="address">
            <div className="mail">
            <p>{section.footer.mail}</p>
            <hr/>
            </div>
            <p className='dummyAddress'>{section.footer.address}</p>
            <a href='' className='font-semibold'>Privacy Policy</a>
        </div>
        <div className="socialLinks">
        {section.footer.social.map((app, index)=>(
            <a href="" key={index}>{app}</a>
        ))}
        </div>
        </div>
    </section>
  )
}

export default Footer
