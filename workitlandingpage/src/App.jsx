/*React imports */

/*Custom imports */
import Header from './components/header/Header'
import FeatureList from './components/features/FeatureList';
/*CSS imports */
import './App.scss';
import './variables.scss'
import Statements from './components/statements/Statements';
import Footer from './components/footer/Footer';
/*Assets imports */


const App = () => {
  return (
    <div className="App">
      <Header/>
      <FeatureList/>
      <Statements/>
      <Footer/>
    </div>
  );
}

export default App;
