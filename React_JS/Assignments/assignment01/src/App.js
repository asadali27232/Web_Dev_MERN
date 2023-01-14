import './App.css';
import EgCard from './EgCard';
import EgCarousel from './EgCarousel';


function App() {
  return (
    <>
      <EgCarousel />
      <div className='w-100 flex justify-evenly bg-purple'>
        <EgCard />
        <EgCard />
        <EgCard />
      </div>
      <p className='text-3xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos explicabo neque ad nam dolor possimus illum maxime earum a, soluta culpa molestias animi assumenda dolorum, repellendus aliquam dolorem commodi!</p>
    </>
  );
}

export default App;
