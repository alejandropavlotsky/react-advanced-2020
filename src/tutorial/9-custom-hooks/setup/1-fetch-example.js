import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {

  const {loading, products} = useFetch(url)
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : products.map((pr) => <p key={pr.id}>{pr.fields.company}</p>)}</h2>
    </div>
  )
}

export default Example
