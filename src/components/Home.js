import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
          title="Model S"
          Discription="Order Online For Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
      />
      <Section 
          title="Model Y"
          Discription="Order Online For Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
      />
      <Section 
          title="Model 3"
          Discription="Order Online For Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
      />
      <Section 
          title="Model X"
          Discription="Order Online For Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
      />
      <Section 
          title="Lowest cost solar Panels in America"
          Discription="Mony back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
      />
      <Section 
          title="Solar for New Roofs"
          Discription="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="ORDER NOW"
          rightBtnText="LEARN MORE"
      />
      <Section 
          title="Accessories"
          Discription=""
          backgroundImg="accessories.jpg"
          leftBtnText="SHOPE NOW"
          
      />
    </Container>
  )
}

export default Home
const Container = styled.div`
height: 100vh`;
