import React, { useEffect, useState } from "react";
import './style.css';

const FormSelect = ({ defaultValue,openValue,title,options, ...attrs }) => {
	const [isOpen, setOpen] = useState(false);
	const [items, setItem] = useState(options);
	const [selectedItem, setSelectedItem] = useState(1);
	
	const toggleDropdown = () => setOpen(!isOpen);
	
	const handleItemClick = (value) => {
		selectedItem == value ? setSelectedItem(value) : setSelectedItem(value);
		toggleDropdown();
	}

	return (
		<>
		<div className="position-fixed" style={{width: "100%", height: "100vh", left: "0", top: "0", background: "none", display: isOpen === true ? 'block' : "none"}} onClick={() => setOpen(false)}></div>
		<div className="form-field m-0" onClick={() => toggleDropdown() }>
			<label>
 				{title}
 			</label>
			<div className='dropdown'>
				<div className='dropdown-header' onClick={() => toggleDropdown()}>
				<img src={selectedItem ? items.find(item => item.value == selectedItem).img : defaultValue}/>
				{selectedItem ? items.find(item => item.value == selectedItem).label : defaultValue}
				<i className={`icon ${isOpen && "open"}`}></i>
				</div>
				<div className={`dropdown-body ${isOpen && 'open'}`}>
				{items.map((item, idx) => (
					<div
						className={`dropdown-item ${item.value == selectedItem && 'selected'}`} onClick={(e) => handleItemClick(e.target.id)}
						id={item.value}
						key={idx}
					>
						<img src={item.img}/>
						{item.label}
					</div>
				))}
				</div>
			</div>
		</div>
	  </>
	);
  };
  
  export default FormSelect;

