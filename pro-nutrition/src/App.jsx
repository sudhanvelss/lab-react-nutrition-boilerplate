import './App.css'
import { useState } from 'react'
import FoodData from '../../resources/FoodData'
import Search from './Component/search'
import React from 'react'
import FoodBox from './Component/foodBox'

function App() {
  const [search, setSearch] = useState("")

  const filteredSearch = FoodData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div>
    <h1>Pro-nutrition-app</h1>
      <Search setSearch={setSearch} />
      {
        filteredSearch.length <= 0 ? (
          <h3>No data found</h3>
            ) : (
        filteredSearch.map((e, i)=>(
            <FoodBox key={i} ele={e} index={i} />
            ))
            )
        }
    </div>
  )   
}
      export default App
