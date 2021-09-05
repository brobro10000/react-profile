// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
function App() {
  const [portfolioData, setportfolioData] = useState([])
  const [currentPage, handlePageChange] = useState('About');
  console.log(currentPage)
  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    //
    switch (currentPage) {
      case 'Contact':
        return <ContactForm />
      case 'Portfolio':
        return <Portfolio />
      default: return <About />
    }
  };
  useEffect(() => {
    return fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brobro10000')
      .then(res => res.text())
      .then(res => {
        var arr = []
        res.split(`"repo":"`).forEach(element => {
          arr.push(element.split(`",`)[0])
        })
        delete arr[0]
        const newArr = arr.filter(() => true)
        newArr.forEach(element => {
          fetch(`https://api.github.com/repos/brobro10000/${element}/deployments`).then(res => res.json()).then(data => {
            if (data.length < 1)
              if (element === 'potluck-chefs') {
                return setportfolioData((state) => [...state, { name: element, repo: `https://www.github.com/${element}`, deployment: `https://potluck-chef.herokuapp.com/` }])
              }
            if (data[0].environment === 'github-pages') {
              if (element === `brobro10000.github.io`) {
                return setportfolioData((state) => [...state, { name: element, repo: `https://www.github.com/${element}`, deployment: `https://www.brobro10000.github.io` }])
              }
              return setportfolioData((state) => [...state, { name: element, repo: `https://www.github.com/${element}`, deployment: `https://www.brobro10000.github.io/${element}` }])
            } else if (data[0].description === 'Heroku') {
              return setportfolioData((state) => [...state, { name: element, repo: `https://www.github.com/${element}`, deployment: data[0].payload.web_url }])
            }
          })
        })
      });
  }, []);
  return (
    <div>
      <header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );

}
/* <About />
        {portfolioData.length > 0 ?
          <Portfolio portfolioData={portfolioData} /> : <></>
        }
        <ContactForm /> */
export default App;
