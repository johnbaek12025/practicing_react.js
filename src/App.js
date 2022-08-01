// import styles from "./App.module.css"
import { useEffect, useState } from "react";


function Hello(){
  useEffect(() => {
    console.log("I am here!")
  }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev)=> !prev)
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);  
  // const iRunOnlyOnce = () => {
  //   console.log("i run all the time.");    
  // };
  // useEffect(iRunOnlyOnce, [])

  // useEffect(() => {
  //   if (counter > 0){
  //   console.log("I run when 'counter' changes.");    
  // }
  // }, [counter]);
  // useEffect(()=> {
  //   if(keyword !== "" && keyword.length > 5)
  //   {
  //     console.log(`search for ${keyword}`);
  //   }
  // }, [keyword]);
  return (
    <div>
      {/* <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button> */}
      {showing ? <Hello/>: null}
      <button onClick={onClick}>{showing ? "Hide": "Show"}</button>
    </div>
  );
}

export default App;
