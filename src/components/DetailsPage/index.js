/* eslint-disable no-nested-ternary */
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'

const DetailsPage = () => {
  const [course, setCourse] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isFailed, setIsFailed] = useState(false)
  console.log(course.name)
  const p = useParams()
  const {id} = p
  const newId = id.replace(':', '')
  const url = `https://apis.ccbp.in/te/courses/${newId}`

  useEffect(() => {
    const getData = async () => {
      const options = {
        METHOD: 'get',
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        setCourse(data.course_details)
        setIsLoading(false)
      } else {
        setIsFailed(true)
      }
    }
    getData()
  }, [url])

  return (
    <div className="detailspage">
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      ) : !isFailed ? (
        <div className="detailsInner">
          <img src={course.image_url} alt={course.name} />
          <div>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
            alt="failure view"
          />
          <h1>Oops! Something Went Wrong</h1>
          <p>We cannot seem to find the page you are looking for</p>
          <button type="button">Retry</button>
        </div>
      )}
    </div>
  )
}

export default DetailsPage
