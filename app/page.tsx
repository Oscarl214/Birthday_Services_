import MainHero from './components/main/hero';
import Hook from './components/main/hook';
import TitleImage from './components/main/image';
import AboutUsMain from './components/main/aboutusmain';

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
