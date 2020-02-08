import React, { useState, useEffect } from 'react'
import { Card, Spinner, Alert, Pagination } from 'react-bootstrap'
import api from '../api'

function State() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pages, setPages] = useState(1)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const data = await api.get('/todos')
      if (data.status >= 200 && data.status < 300) {
        console.log(data)
        Promise.all([setData(data.data), setLoading(false), setError(false)])
      }
    } catch (error) {
      Promise.all([setLoading(false), setError(true)])
    }
  }

  function _renderCard(item) {
    return (
      <Card
        key={item.id}
        style={{
          padding: 5,
          backgroundColor: item.completed ? null : 'pink'
        }}
      >
        <Card.Title>
          {item.id} - {item.title}
        </Card.Title>
      </Card>
    )
  }

  function _renderData() {
    return data.map(item => {
      if (pages === 1) {
        if (item.id <= pages * 10) {
          return _renderCard(item)
        }
      } else {
        if (item.id <= pages * 10 && item.id >= pages * 10 - 9) {
          return _renderCard(item)
        }
      }
    })
  }

  function _renderPagination() {
    let items = []

    for (let i = 1; i <= data.length / 10; i++) {
      if (i >= 25 && i < data.length) {
        if (i === data.length - 1)
          items.push(<Pagination.Item key={i}>...</Pagination.Item>)
      } else {
        items.push(
          <Pagination.Item
            key={i}
            active={pages === i}
            onClick={() => setPages(i)}
          >
            {i}
          </Pagination.Item>
        )
      }
    }

    return (
      <Pagination style={{ justifyContent: 'center', marginTop: 10 }}>
        {items}
      </Pagination>
    )
  }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 50
        }}
      >
        <Spinner animation='border' variant='primary' />
      </div>
    )
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 25,
          padding: 5
        }}
      >
        <Alert variant='danger' style={{ width: '80%' }}>
          Erorr: Please try again later.
        </Alert>
      </div>
    )
  }

  return (
    <div style={{ padding: 5 }}>
      <h3 style={{ textAlign: 'center' }}>ToDo List With State</h3>

      {data && _renderData()}
      {data && _renderPagination()}
    </div>
  )
}

export default State
