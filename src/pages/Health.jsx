import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Title from "../components/Title";

const Health = () => {
  const [data, setData] = useState([])
  const title = 'Health'
  //aYb56ITjv91AN1rvIAaWG8aytM3dOFmK
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1eb71495ed2643c5ab66d835dca6c1a8')
      .then((res) => res.json())
      .then((Data) => setData(Data.articles))
  }, [])
  console.log(data)

  return (
    <>
      <Title title={title}/>
      <div className="grid grid-cols-3 gap-4 px-3 mt-3" id="mainPage">
        {data.map((news) => (
          <div key={uuidv4()} className="border rounded p-3">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
            <img src={news.urlToImage} alt="" className="rounded" />
            <div className="mt-2">
               {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h1 className="font-bold my-4 text-center">"{news.title}"</h1>
              <h1 className="text-justify">{news.description}</h1>
              </div>
            </a>
        </div>
      ))}
      </div> 
    </>
  )
}

export default Health