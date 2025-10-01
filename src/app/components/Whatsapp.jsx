"use client"
import '../../app/globals.css'
import Image from 'next/image';
import whatsappicon from '../../../public/whatsapp.png'

const WhatsAppButton = () => {


  const openWhatsApp = () => {
    window.open('https://wa.me/3115170829', '_blank');
  };

  return (


    <div className='whatsappButton   animate-' onClick={openWhatsApp} >
      <Image
        src={whatsappicon}
        alt='whatsapp button'
        className='whatsappimage'

      />
    </div >


  );
};

export default WhatsAppButton;
