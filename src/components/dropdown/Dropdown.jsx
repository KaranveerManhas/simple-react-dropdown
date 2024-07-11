// import useState from React
import { useState } from "react";
// import css for dropdown component
import './dropdown.css';

// Dropdown component
export const Dropdown = ({items}) => {
  
    // useState hook to store the showDropdown state, initially set to false
    const [showDropdown, setShowDropdown] = useState(false);
    // useState hook to store the selected item, initially set to the first item in the list 
    const [selectedItem, setSelectedItem] = useState(items[0]);

    // function to handle click on dropdown item
    const handleSelectDropDownItem = (item) => {
      setShowDropdown(!showDropdown);
      setSelectedItem(item);
    }

    return (
        <div className="wrapper">
            <label>Should you use a dropdown?</label>
            <div className="dropdown-wrapper" 
              onMouseEnter={e=>setShowDropdown(true)} 
              onMouseLeave={e=>setShowDropdown(false)}>

              <div className="selected-item">
                {selectedItem}
                <img src="/images/arrow.png" alt="down-arrow" className="dropdown-arrow" />
              </div>
              {/* Conditional rendering of dropdown items container based on showDropDown state */}
              {showDropdown && <div className="dropdown-items-container" >
                  {items.map((item) =>
                      <div onClick={e=>handleSelectDropDownItem(item)} className="dropdown-item">
                          {item}
                      </div>
                  )}
              </div>}
            </div>
        </div>
    )

}