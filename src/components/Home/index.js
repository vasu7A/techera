import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const Home = () => {
  const [data, setData] = useState([])
  const [isFailed, setIsFailed] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const url = 'https://apis.ccbp.in/te/courses'
      const options = {
        METHOD: 'get',
      }
      const response = await fetch(url, options)
      const fetchedData = await response.json()
      if (response.ok) {
        setData(fetchedData.courses)
      } else {
        setIsFailed(true)
      }
    }
    getData()
  }, [])

  return !isFailed ? (
    <div>
      <h1 style={{color: '#1e293b'}}>Course</h1>
      <ul className="icons">
        {data.map(each => (
          <li key={each.id} className="eachCourse">
            <Link to={`/courses/:${each.id}`}>
              <img src={each.logo_url} alt={each.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>we cannot seem to find the page you looking for.</p>
      <button type="button">Retry</button>
    </div>
  )
}

export default Home
