import Image from 'next/image'

export default function footer() {
  return (
    <footer className='bg-gray-100'>
      <div className="container py-10 mx-auto text-center footer-wrapper">
        <div className="flex flex-col items-center justify-center footer-item">
          <div className="footer-image">
            <Image src="/images/logo-footer.png" alt="Logo" width={75} height={75} />
          </div>
          <p className="pt-8 text-sm tracking-wider text-center text-gray-500">© 2021 - 2022 Zengi Architecture. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
