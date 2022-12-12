import Loading from './Components/Loading/loading.components';
import Tours from './Components/Tours/tours.components';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      touristPlace: [],
      loading:true
    };
  }

  tourList = async () => {
    const data = await fetch('https://course-api.com/react-tours-project');
    const result = await data.json();

    return result;
  
  };


  componentDidMount() {
      this.tourList().then(result => {
        this.setState(() => {
          return {
            touristPlace: result,
            loading: false
          }
          
        })

      })
    
    }

 


  render() {
    let { touristPlace, loading } = this.state;
    
    if (loading) {
      return ( 
        <main>
          <Loading/>
        </main>
        
      )
    }

    return (
      <main>
        <Tours touristPlace={touristPlace} />
      </main>
      
    
    )
  }

}


export default App;
