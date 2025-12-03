import Title from '@/components/Title';

import Catalogue from '@/components/Catalogue';
import Footer from '@/components/Footer'
// Catalog component expects the books prop to be an array of Book objects

export default async function Catalog() {
  return (
    <>
      <Title
        mainTitle="Book Marketplace Catalogue"
        subTitle="Welcome to DZ-Kitab, Algeria's premier online book marketplace. Discover, browse, and access thousands of books from the comfort of your home."
      />
      <div
        className="absolute bg-gradient-to-r from-[#9a1c21] to-[#c13b42] z-[-1] h-[500px] w-full"
        style={{
          backgroundImage: `url('/jpg/catalogue.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <Catalogue></Catalogue>
    
      <Footer />
    </>
  );
}
