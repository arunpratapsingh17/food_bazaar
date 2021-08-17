import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext';
import Product from './Product';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const ProductList = ({data}) => {
  const classes = useStyles();
  const [data1,setData1] = useState(data);
  const [state, setState] = React.useState({
    Category:""
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  console.log(state);
  useEffect(()=>{
    if(state.Category ===""){
      console.log("Hurray");
    }
    else if(state.Category == "Vegetables"){
      console.log("Veggie changed");
      data = data.filter((item)=>item.category=="Vegetables");
      // setData1(data);
      // console.log("Neen");
      // console.log(data);
      // setData1(data);
      // console.log(data1);
    }
    else if(state.Category == "Fruits"){
      console.log("Veggie changed");
      data = data.filter((item)=>item.category=="Fruits");
    }
  },[state])
  var {total} = useContext(CartContext);
    console.log(data);
    return (
        <section className="section">
        <h2 className="section-title">Our Products</h2>
        <div className="cat-select-outer">
          <FormControl className={classes.formControl} className="cat-select">
            <InputLabel htmlFor="Category-native-simple">Category</InputLabel>
            <Select
              native
              value={state.Category}
              onChange={handleChange}
              inputProps={{
                name: 'Category',
                id: 'Category-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Fruits"}>Fruits</option>
              <option value={"Vegetables"}>Vegetables</option>
            </Select>
          </FormControl>
        </div>
        <div className="products-center">
          {data1.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
        <div>
          {total}
        </div>
      </section>
    )
}

export default ProductList
