import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";




export const DasshBoard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((result) => { setData(result) })
      .catch(error => console.log(error))
  }, [])
  console.log(data)



  return (
    <>
      <Row>
        {data.map((categories, index) => (
          <Col >
            <Link to={`${categories}`} style={{ textDecoration: 'none', color: '#202124' }}>
              <Card style={{ margin: '1rem', width: '25rem', backgroundColor: '#8D98A8', textAlign: 'center' }}>
                <Card.Body style={{ height: '8rem' }}>
                  <Card.Title style={{ margin: '2rem' }}>{categories}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>

        ))}
      </Row>

    </>
  )
}