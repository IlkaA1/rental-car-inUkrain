import Select from 'react-select';
import React, { useState } from 'react';
 import {LabelSelect,SelectPrice,SearchDiv,MileageSearch } from './Filter.styled'
 import { useDispatch  } from 'react-redux';
 import { filterSerchName,filterMaxMails,filterMinMails,filterPrice} from '../../redux/filterSlice';

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

 const optionsPrice = [
  {value:"10",  label:"10$"},
  {value:"20",  label:"20$"},
  {value:"30",  label:"30$"},
  {value:"40",  label:"40$"},
  {value:"50",  label:"50$"},
  {value:"60",  label:"60$"},
  {value:"70",  label:"70$"},
  {value:"80",  label:"80$"},
  {value:"90",  label:"90$"},
  {value:"100",  label:"100$"},
  {value:"200",  label:"200$"},
  {value:"300",  label:"300$"},
  {value:"400",  label:"400$"},
  {value:"500",  label:"500$"},
  {value:"600",  label:"600$"},
  {value:"700",  label:"700$"},
  {value:"800",  label:"800$"},
 ]

 
 



export const Filter = () => {
 const [selectedOption, setSelectedOption] = useState(null);
 const [selectedOptionPrice, setSelectedOptionPrice] = useState(null);
 const dispatch = useDispatch();

const handleChange = (selectedOption) => {
     setSelectedOption(selectedOption);
     dispatch(filterSerchName(selectedOption.value));
};

const handelMileageMax = (evt) =>{
 const milegMax = evt.currentTarget.value;
 dispatch(filterMaxMails(milegMax));
}

const handelMileageMin = (evt) =>{
 const milegMin = evt.currentTarget.value;
 dispatch(filterMinMails(milegMin));
}

const handelPrice = (SelectedOptionPrice) =>{
  setSelectedOptionPrice(SelectedOptionPrice)
  const price = SelectedOptionPrice.value;
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
        styles={{
            control: (baseStyles) => ({
             ...baseStyles,
              width: 224,
              height: 48,
              borderRadius: 14,
              backgroundColor:'rgba(247, 247, 251, 1)',
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
      <Select
       placeholder="$"
       value={selectedOptionPrice}
        onChange={handelPrice}
         options={optionsPrice}
        styles={{
          
            control: (baseStyles) => ({
             ...baseStyles,
              width: 100,
              height: 38,
              borderRadius: 14,
              backgroundColor:'rgba(247, 247, 251, 1)',
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
                width: 125,
               borderRadius: 14,
               border: '1 solidrgba(18, 20, 23, 0.05)',
             }),
            option: (defaultStyles, state) => ({
              ...defaultStyles,
              color: state.isFocused ? 'rgba(18, 20, 23, 1)' : 'rgba(18, 20, 23, 0.5)',
              backgroundColor:"none",
            }),
        }}/>
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