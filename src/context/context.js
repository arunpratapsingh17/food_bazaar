
import React from "react";
import data from "../data/dataSet";
// const DataContext = React.createContext();
// const context = () => {
//     const [state,setState] = useState([]);
//     const DataConsumer = RoomContext.Consumer;
//     useEffect(()=>{
//         setState(data)
//     },[])
//     return (
//             <DataContext.Provider value={state}>
                
//             </DataContext.Provider>
//     )
// }

// export default context

var DataContext = React.createContext(data);
export default DataContext;
const DataProvider = DataContext.Provider;
const DataConsumer = DataContext.Consumer;
export {DataProvider,DataConsumer}