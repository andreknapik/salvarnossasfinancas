import './App.css';
import Content from './components/Content';
import Header from './components/Header';


function App() {
  return (
    <div className="container">
      <div className="header-content">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Content />
      </div>
      </div>
    </div>
  );
}

export default App;
