import logo from './logo.svg';
import './App.css';
import Article from './Article';
import MyList from './ListdesProduits';
import Join from './Join';
function App() {
  console.log(MyList,"list");
  
  return (
    <>
  <Join/>
 {MyList.map((item,i) =>  <Article  title={item.title} image={item.image} disc={item.description} prix={item.price}/>)} 

  </>
  );
}

export default App;
