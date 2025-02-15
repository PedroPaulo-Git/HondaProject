// // Exemplo de navegação com Link
// import Link from 'next/link';
import WhatsappButton from './components/whatsappButton';
import HeaderComponent from './components/header';
import BannerCarousel from './components/banners';
import FooterComponent from './components/footer';
import MotosGrid from "./components/MotosGrid";

export default function Home() {
  return (
    <div className='2xl:px-64 lg:px-0'>
     <HeaderComponent/>
     <WhatsappButton/>
      <BannerCarousel/>
      <MotosGrid/>
      <FooterComponent/>
    </div>
  );
}
