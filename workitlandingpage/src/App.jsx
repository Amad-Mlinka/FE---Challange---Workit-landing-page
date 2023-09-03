/*React imports */

/*Custom imports */
import Header from './components/header/Header';
import Points from './components/points/Points';
import RoundedSection from './components/UI/roundedSection/RoundedSection';
import Testimony from './components/testimony/Testimony';

/*CSS imports */
import './App.scss';
import Footer from './components/footer/Footer';

/*Assets imports */


const App = () => {
  return (
    <div className="App">
      <RoundedSection type="primary" firstSection = {true}>
        <Header/>
      </RoundedSection>
      <RoundedSection type="tertiary" >
        <Points/>
      </RoundedSection>
      <Testimony/>
      <Footer/>
    </div>
  );
}

export default App;
