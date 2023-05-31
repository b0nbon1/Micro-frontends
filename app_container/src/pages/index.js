import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })
const HeaderComp = dynamic(() => import('micro1/navbar'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import('micro2/Footer'), {
  ssr: false,
});

export default function Home() {
  return (
      <div>
        <HeaderComp>
          <div>this is the header</div>
        </HeaderComp>
        <p>Ipsum laborum excepteur aliquip non Lorem voluptate veniam esse laboris adipisicing amet et in. Reprehenderit elit quis laboris amet pariatur nisi cillum eu non consectetur in deserunt duis. Voluptate incididunt dolor adipisicing in duis. Nulla veniam nulla elit deserunt aliqua ut et aliquip in cillum consequat quis nostrud veniam. Consectetur exercitation id duis culpa enim minim mollit minim sit.</p>
        <Footer />
      </div>
  );
}
