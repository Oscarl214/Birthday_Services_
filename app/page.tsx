import MainHero from './components/homepage/hero';
import Hook from './components/homepage/hook';
import TitleImage from './components/homepage/image';
import AboutUsMain from './components/homepage/aboutusmain';

export default function Home() {
  return (
    <main>
      <MainHero />
      <Hook />
      <TitleImage />
      <div className="bg-black">
        <AboutUsMain />
      </div>
    </main>
  );
}
