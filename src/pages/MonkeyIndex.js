import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class MonkeyIndex extends Component {
  render() {
    return (
      <>
      <div className='indexpage'>
        <h2>Find your pri-MATE</h2>
          <div>
            <Row sm='3'>
            {this.props.monkey && this.props.monkey.map(monk => {
              return (
                <Card key={monk.id}
                style={{
                width: '18rem'}}>
                <CardImg
                  alt="monkey image"
                  src= {monk.image} 
                  width="70%"
                  height="50%"/>
              <CardBody>
                <CardTitle tag='h5'>
                  {monk.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  {monk.age}
                  </CardSubtitle>
                  <NavLink to={`/monkeyshow/${monk.id}`}>
                    <Button>More info</Button>
                  </NavLink> 
              </CardBody>
              </Card>)
            })}
            </Row>
          </div>
        </div>
      </>
    )
  }
}

export default MonkeyIndex