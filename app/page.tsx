import MainHero from './components/homepage/hero';
import Hook from './components/homepage/hook';
import TitleImage from './components/homepage/image';
import AboutUsMain from './components/homepage/aboutusmain';
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <MainHero />
      <Hook />
      <TitleImage />
      <div className="bg-black">
        <AboutUsMain />
      </div>
      <div className="flex justify-center">
        {' '}
        <Link href={'/faq'}>
          <button className="border-red-700 border-2 border-solid  p-3 lg:text-md text-sm font-semibold text-black hover:bg-red-400 rounded-full hook-button">
            FAQ
          </button>
        </Link>
      </div>
    </main>
  );
}
