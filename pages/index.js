import Head from 'next/head'
import Image from 'next/image'
import Blog from '../src/containers/Blog/Blog'
import Category from '../src/containers/Category/Category'
import CryptoCoins from '../src/containers/CryptoCoins/CryptoCoins'
import Footer from '../src/containers/Footer/Footer'
import GenerationOnlineShopping from '../src/containers/GenerationOnlineShopping/GenerationOnlineShopping'
import Mailing from '../src/containers/Mailing/Mailing'
import MainPage from '../src/containers/MainPage/MainPage'

export default function Home() {
  return (
    <div className="max-w-screen-4xl w-screen-lg m-auto ">
      <MainPage />
      <GenerationOnlineShopping />
      <Blog />
      <Category />
      <CryptoCoins />
      <Mailing />
      <Footer />
    </div>
  )
}
