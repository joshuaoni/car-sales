import { Layout } from './_components';
import CarProvider from './_contexts/CarProvider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Rental App',
  description: 'Car Rental App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <CarProvider>
            {children}
          </CarProvider>
        </Layout>
      </body>
    </html>
  )
}
