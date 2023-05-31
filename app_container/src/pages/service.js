import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })
const Service = dynamic(() => import('micro1/Service'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (<Service />);
}
