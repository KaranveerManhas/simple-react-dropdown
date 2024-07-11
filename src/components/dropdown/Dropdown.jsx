import { useState } from "react";
import './dropdown.css';

export const Dropdown = ({items}) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items[0]);


      const handleSelectDropDownItem = (item) => {
        setShowDropdown(!showDropdown);
        setSelectedItem(item);
      }

    return (
        <div className="wrapper">
            <label>Should you use a dropdown?</label>
            <div className="dropdown-wrapper" onMouseEnter={e=>setShowDropdown(true)} onMouseLeave={e=>setShowDropdown(false)}>
              <div className="selected-item">{selectedItem}</div>
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