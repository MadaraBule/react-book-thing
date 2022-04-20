import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyBooks from './components/MyBooks';
import WelcomeMSG from './components/WelcomeMSG';

function App() {
  return (
    <div>
      <MyNavbar />
      <WelcomeMSG />
      <div className='booksCentered'>
        <MyBooks />
      </div>
      <MyFooter />
    </div>
  )
}

export default App;
