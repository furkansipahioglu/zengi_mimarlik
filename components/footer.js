import Image from 'next/image'

export default function footer() {
  return (
    <footer className='bg-gray-100'>
      <div className="footer-wrapper py-10 container mx-auto text-center">
        <div className="footer-item flex flex-col items-center justify-center">
          <div className="footer-image">
            <Image src="/images/logo-footer.png" alt="" width={75} height={75} />
          </div>
          <p className="text-center text-sm text-gray-500 pt-3 tracking-wider">© 2021 - 2022 Zengi Architecture. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
