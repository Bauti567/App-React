import React from 'react'
import { useEffect,useState } from 'react'
import Cat from './Cat.jsx';
import Button from './Button.jsx';

function CatList() {

  const[cats,setCats] = useState([]);
  const[loading,setLoading] = useState(true);
  const [currentIndex,setIndex] = useState(0);

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_8apUnQOeQqjgspowL0i2m1N5mobvQLm31yZMS75gCiz0PmuCNtdZuNRBhlpxHVFc')
      const data = await response.json()
      console.log(data)
      setCats(data)

      
    }
    fetchData();

  },[])

  return (
    <div className='bg-danger'>
      <div className="row">
      {
        cats.map(cat=>{
          return(
            <div className="col-md-4">
              <Cat cat={cat}></Cat>
            </div> 
          )
        })
      }
      </div>
    </div>
  )

}

export default CatList