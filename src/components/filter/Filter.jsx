import React from 'react';
import { menu } from "../../data";
import './Filter.css'

class Filter extends React.Component{

render(){
  const categories = ['all']
  const arrayOfAllCategories = menu.map((dish)=>dish.category)
  const setOfUniqueCategories = new Set(arrayOfAllCategories)
  const setCategories = Array.from(setOfUniqueCategories)
  setCategories.forEach(category=>(categories.push(category)))
  
  return(
    <div className='mainFilter'>
      <h4 id="sort">Choose Your Category:</h4>
      <select id='filter-select' value={this.props.value} onChange={(e)=>this.props.handleFilter(e.target.value)}>
        {categories.map((category, index)=><option key={index} value={category}>{category}</option>)}
      </select>
    </div>
  )
}
}

export default Filter;