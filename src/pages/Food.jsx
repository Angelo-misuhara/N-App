import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Title from "../components/Title";

const Food = () => {
  const [data, setData] = useState([])
  const title = 'Food'
  //aYb56ITjv91AN1rvIAaWG8aytM3dOFmK
  
  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=aYb56ITjv91AN1rvIAaWG8aytM3dOFmK')
      .then((res) => res.json())
      .then((Data) => setData(Data.results))
  }, [])
  console.log(data)

  return (
    <>
      <Title title={title}/>
      <div className="grid grid-cols-3 gap-4 px-3 mt-3" id="mainPage">
        {data.map((news) => (
          <div key={uuidv4()}>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <img src={news.multimedia[1].url} alt="" className="rounded" />
              <div className="mt-2">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h1 className="font-bold my-4 text-center">"{news.title}"</h1>
              <h1 className="text-justify">{news.abstract}</h1>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )

}

export default Food