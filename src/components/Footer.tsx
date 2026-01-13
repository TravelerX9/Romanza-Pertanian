import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#21477A] text-white'>
      <div className='mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-[1.2fr_1fr_1.2fr_180px]'>
          {/* Column: About */}
          <div>
            <h3 className='text-xl font-extrabold text-[#7ED957]'>
              Saprotan Utama
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-white/90'>
              Produk Pak Tani, selalu mengutamakan kualitas terbaik. Kami
              memiliki produk inovatif dengan merk internasional yang pastinya
              akan memenuhi setiap kebutuhan Anda.
            </p>
          </div>

          {/* Column: Address */}
          <div>
            <h3 className='text-xl font-extrabold text-[#7ED957]'>Alamat</h3>
            <div className='mt-3 flex items-start gap-3 text-sm'>
              <FaMapMarkerAlt className='mt-1 text-[#7ED957]' />
              <div>
                <p>Jl. Brigjend Sudiarto 79</p>
                <p>Semarang</p>
                <p>50167</p>
              </div>
            </div>
          </div>

          {/* Column: Contact */}
          <div>
            <h3 className='text-xl font-extrabold text-[#7ED957]'>
              Hubungi Kami
            </h3>
            <ul className='mt-3 space-y-2 text-sm'>
              <li className='flex items-start gap-3'>
                <FaPhoneAlt className='mt-1 text-[#7ED957]' />
                <span>Tel. (024) 841 3208 | 841 3178</span>
              </li>
              <li className='flex items-start gap-3'>
                <FaFax className='mt-1 text-[#7ED957]' />
                <span>Fax. (024) 841 3203</span>
              </li>
              <li className='flex items-start gap-3'>
                <FaEnvelope className='mt-1 text-[#7ED957]' />
                <span>info@saprotan-utama.com</span>
              </li>
            </ul>
          </div>

          {/* Right Logo Card */}
          <div className='flex justify-start md:justify-end lg:justify-end'>
            <div className='flex h-[140px] w-[160px] items-center justify-center rounded-lg bg-white shadow'>
              {/* Placeholder for Pak Tani logo */}
              <div className='h-[120px] w-[110px] bg-[url(/icons/pak-tani.svg)] bg-contain bg-center bg-no-repeat' />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-white/10'>
        <div className='mx-auto max-w-[1200px] px-4 py-4 sm:px-6 lg:px-8'>
          <p className='text-xs text-white/80'>
            © 2025 Saprotan Utama. All rights reserved.
          </p>
          <p className='m-2 w-fit items-center justify-center rounded-full border border-white p-3 text-xs text-white/80'>
            This is only Sample and rebuild by Rza, Technology using Nextjs +
            Tailwind + Typescript + 3D animation. Contact me if need more :
            0896-9800-9000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
