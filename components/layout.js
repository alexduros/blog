import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'

import { Karla } from 'next/font/google';

const karla = Karla({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Layout({ preview, children }) {
  return (
    <html lang="en" className={karla.className}>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </html>
  )
}
