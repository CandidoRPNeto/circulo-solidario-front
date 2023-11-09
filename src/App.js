import logo from './logo.svg';
import './App.css';
import NumerosCrescentes from './NumerosCrescentes';
import DownloadButton from './DownloadButton';
import imageSrc from './image.png';

function App() {
  let spacing = "100";
  return (

    <div className="App">


      <div class="container-sm d-flex flex-column bd-highlight mb-3 mt-5">
        <div class="mx-auto col-md-8">
          <img width="500px" src={imageSrc} alt="Cinque Terre" />
          <h2 class="display-1 text-warning mt-4 m-b5 text-center"><strong>Circulo Solidario</strong></h2>

          <NumerosCrescentes />
        </div>


        <p class="fw-regular fs-5 text-primary d-flex align-items-center mb-5 bg-white rounded ms-4">
          <strong>Conecta doadores, voluntários e organizações sem fins lucrativos
            em uma rede de solidariedade. Permitimos que doadores façam
            doações de alimentos, roupas e itens essenciais, se cadastrem
            como voluntários, e tenham um chat direto com organizações para
            coordenar a ajuda.</strong>
        </p>
        <div class="text-center">
          <DownloadButton />
        </div>

      </div>
    </div>
  );
}

export default App;
