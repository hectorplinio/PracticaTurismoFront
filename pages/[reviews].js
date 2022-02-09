import React, { useEffect, useState, useRef } from 'react'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import styles from '../styles/style.module.css'
import Router, { useRouter } from 'next/router'
import Layout from '../components/layout'
import 'reactjs-popup/dist/index.css'
import axios from 'axios'
function date (date) {
  return new Date(date).toLocaleString()
}

export default function useEffectPage () {
  const [email, setEmail] = useState('')
  const [punctuation, setPunctuation] = useState(0)
  const [description, setDescription] = useState('')
  const [rewview, setReview] = useState([])
  const inputNewForm = useRef(null)
  const onButtonClick = () => {
    inputNewForm.current.focus()
  }
  const router = useRouter()
  const id = router.query
  const resourceType = id.id
  const [items, setItems] = useState([])
  const deleteReview = (id) => {
    const bodyArray = {
      id: id
    }
    fetch('http://turismo:8081/rest/reviewsRestaurant', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyArray)

    })
      .catch(err => console.log(err))
    Router.reload(window.location.pathname)
  }
  const submitReview = (event) => {
    const idRestuarant = router.query.id

    event.preventDefault()
    const newReview = {
      description: description,
      punctuation: punctuation,
      email: email,
      restaurant_id: idRestuarant
    }

    fetch('http://turismo:8081/rest/reviewsRestaurant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    Router.reload(window.location.pathname)
  }
  useEffect(() => {
    fetch(`http://turismo:8081/rest/reviewsRestaurant/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  return (
    <Layout>
      <div className={styles.boxCenter}>
        <div className={styles.boxUp}>
          <h1>
            Reviews{' '}
            <button onClick={onButtonClick} className={styles.buttonNew}>
              New Review
            </button>{' '}
          </h1>
        </div>
        <div className={styles.boxTriple}>
          <div className={styles.boxRestaurant}>
            <img
              src="https://www.edesk.com/wp-content/uploads/2021/04/amazon-review-tool.png"
              className={styles.image}
            ></img>
            <form className={styles.form} onSubmit={submitReview}>
              <label>
                Email:
                <input
                  name="email"
                  ref={inputNewForm}
                  id="email"
                  placeholder="Email"
                  className={styles.input}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label id="description">
                Review:{' '}
                <textarea
                  placeholder="Introduce tu opinion del restaurante..."
                  cols={20}
                  rows={2}
                  className={styles.input}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>

              <label>
                Puntuacion{' '}
                <select
                  name="punctuation"
                  id="punctuation"
                  className={styles.input}
                  onChange={(e) => setPunctuation(e.target.value)}
                >
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </label>

              <button value="Enviar" className={styles.buttonNew}>
                Send
              </button>
            </form>
          </div>
          {items.map((item, index) => {
            return (
              <div className={styles.boxRestaurant}>
                <ul key={index}>
                  <li className="cuadro">
                    <img
                      src="https://www.edesk.com/wp-content/uploads/2021/04/amazon-review-tool.png"
                      className={styles.image}
                    ></img>
                    <br></br>Review nº: {item.id}
                    <br></br>Descripcion: {item.description}
                    <br></br>Puntuacion: {item.punctuation}
                    <br></br>Email: {item.email}
                    <br></br>Date Created: {date(item.created_at.date)}{' '}
                  </li>
                </ul>
                <a onClick={() => deleteReview(item.id)}>
                  <button className={styles.buttonDelete}>🗑</button>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
