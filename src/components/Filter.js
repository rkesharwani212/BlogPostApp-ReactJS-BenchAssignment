import React, { useState } from 'react'

const Filter = (props) => {
  
  const [search, setSearch] = useState("");
  const [selectValue, setSelectValue] = useState("");
  props.filterValue(search);
  props.orderBy(selectValue);
  return (
    <div className='row'>
        <div className='col-md-8'>
            <input
                        type="text"
                        value={search}
                        onChange = {(e)=> setSearch(e.target.value)}
                        placeholder = "search by title"
                        className="form-control mb-4" />
        
        </div>
        <div className='col-md-4'>
            <select class="form-select" onChange={(e)=>setSelectValue(e.target.value)} aria-label="Default select example">
                <option selected>Sort By</option>
                <option value="1">Created Date</option>
                <option value="2">Maximum Likes</option>
            </select>
        </div>
    </div>
  )
}

export default Filter