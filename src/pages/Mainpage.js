import logo from '../kittenr.png';

function MainPage() {
  return (
    <div className="main-content">
      <header className="App-header">
        <p> Welcome to the "Super duper shop", where you can find a very narrow variety of useless things. Enjoy yourself!
        </p> <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>Alright um so, thanks or visiting our shop!!
          Link in case you wanna donate for the development of our website: 
        </p>
        <a href="https://vk.com/video137523692_168022180" target="_blank" rel="noopener noreferrer">
        this donation will feed my heart
      </a>
      </header>
    </div>
  );
}

export default MainPage