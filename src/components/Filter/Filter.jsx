import Select from 'react-select';
import React, { useState } from 'react';
 import {LabelSelect,SelectPrice,Price,SearchDiv,MileageSearch } from './Filter.styled'
 import { useDispatch  } from 'react-redux';
 import { filterContact,filterMaxMails,filterMinMails,filterPrice} from '../../redux/select/select';

const options  =[
   { value: "Buick", label: "Buick" },
   { value: "Volvo", label: "Volvo" },
   { value: 'HUMMER', label: 'HUMMER' },
   { value: "Subaru", label: "Subaru" },
   { value: "Mitsubishi", label: "Mitsubishi" },
   { value: 'Nissan', label: 'Nissan' },
   { value: "Lincoln", label: "Lincoln" },
   { value: "GMC", label: "GMC" },
   { value: 'Hyundai', label: 'Hyundai' },
   { value: "MINI", label: "MINI" },
   { value: "Bentley", label: "Bentley" },
   { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
   { value: "Aston Martin", label: "Aston Martin" },
   { value: "Pontiac", label: "Pontiac" },
   { value: 'Lamborghini', label: 'Lamborghini' },
   { value: "Audi", label: "Audi" },
   { value: "BMW", label: "BMW" },
   { value: 'Chevrolet', label: 'Chevrolet' },
   { value: "Chrysler", label: "Chrysler" },
   { value: "Kia", label: "Kia" },
   { value: 'Land', label: 'Land' },
 ];

 
 



export const Filter = () => {
 const [selectedOption, setSelectedOption] = useState(null);

 

   const dispatch = useDispatch();


  

  const handleChange = (selectedOption) => {
     setSelectedOption(selectedOption);
     dispatch(filterContact(selectedOption.value));
   };

  const handleInput = (evt) => {
   const value = evt.target.value
   dispatch(filterContact(value));
   };

const handelMileageMax = (evt) =>{
 const milegMax = evt.currentTarget.value;
 dispatch(filterMaxMails(milegMax));
}

const handelMileageMin = (evt) =>{
 const milegMin = evt.currentTarget.value;
 dispatch(filterMinMails(milegMin));
}

const handelPrice = (evt) =>{
  const price = evt.target.value;
  dispatch(filterPrice(price));
}




    return(
        <>
          
       <div>
      <LabelSelect>Car brand</LabelSelect>
     
      <Select
       placeholder="Enter the text"
       value={selectedOption}
        onChange={handleChange}
         options={options}
         onKeyDown={handleInput}
        noOptionsMessage= { ({ inputValue: string }) =>  null }
        styles={{
            control: (baseStyles) => ({
             ...baseStyles,
              width: 224,
              height: 48,
              borderRadius: 14,
              backgroundColor:'rgba(247, 247, 251, 1)',
              fontFamily: 'Manrope',
              fontSize: 18,
              borderColor:'rgba(247, 247, 251, 1)',}),
              placeholder: (provided) => ({
                ...provided,
                color:'rgba(18, 20, 23, 1)',
              }),
              indicatorSeparator:(base) =>({
                display:'none',
              }),
              dropdownIndicator:(base) =>({
                ...base,
                color:'rgba(18, 20, 23, 1)',
              }),
              menu:(base,state)=>({
                ...base,
                width: 224,
               borderRadius: 14,
               border: '1 solidrgba(18, 20, 23, 0.05)',
             }),
            option: (defaultStyles, state) => ({
              ...defaultStyles,
              color: state.isFocused ? 'rgba(18, 20, 23, 1)' : 'rgba(18, 20, 23, 0.5)',
              backgroundColor:"none",
            }),
        }}
        
      />
      </div>
      <SearchDiv>
      <LabelSelect>Price/ 1 hour</LabelSelect>
      <SelectPrice>To 
      <Price onChange={handelPrice}>
        
      <option value={10}>10$</option>
      <option value={20}>20$</option>
      <option value={30}>30$</option>
      <option value={40}>40$</option>
      <option value={50}>50$</option>
      <option value={60}>60$</option>
      <option value={70}>70$</option>
      <option value={80}>80$</option>
      <option value={90}>90$</option>
      <option value={100}>100$</option>
      <option value={200}>200$</option>
      <option value={300}>300$</option>
      <option value={400}>400$</option>
      
      </Price>
      </SelectPrice>
      </SearchDiv>
      <div>
      <LabelSelect>Сar mileage / km</LabelSelect>
      <MileageSearch>
        <p>From</p><input type="text" onChange={handelMileageMin}></input>
        <p>To</p> <input type="text" onChange={handelMileageMax}></input>
      </MileageSearch>
      </div>
   
        </>
    )
}