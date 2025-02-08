
import { useState , useEffect , useRef} from "react"
import Button from "../components/Button"
import Text from "../components/Text"


 const Test = () => {
  console.log("RENDER")

  const [variable , setVariable] = useState("Hello")
  const [count , setCount] = useState(0)
  const [name , setName] = useState("Empty")
  const [data , setData] = useState([])
  const focusRef = useRef()
  const countRef = useRef(0)


  console.log(name , "NAME")

  const myFunction = () =>{
      setVariable("Hi Bro")
  }


  useEffect(()=>{
    setTimeout(()=>{
      setVariable("Salam")
    } , 10000)
    
  } , [])


  const decrease = () => {
      if(count <=-5){
        return
      }
      setCount(count-1)
  }

  const decrease2 = () => {
    if( countRef.current <=-5){
      return
    }
    countRef.current--;
    console.log(countRef.current , "REF")
}

  const focusFunc = () =>{
    focusRef.current.focus()
  }


  const increase = () =>{
    setCount(count+1)
  }

  const increase2 = () =>{
    countRef.current++;
    console.log(countRef.current , "REF")
  }


  const nameOnChange = (e) =>{
      setName(e.target.value)
  }
  

  const sendData = () =>{
    setData(prev => [...prev , name])
  }

  console.log(data , "LOG")


    return (
      <>


      <label type="text" >Your Name :</label> <br></br>
      <input  onChange={nameOnChange}  ></input>  <br></br>
      <Button name = "Send"  onClickFun={sendData} ></Button> <br></br>
      <div>
        {data.map((dt , i)=> (
            <div key={i}> {dt}</div>
        ))}
      </div> 
      <br></br>

      
        <div onClick={myFunction}>
          {variable}
        </div>
        <br></br>

       <Text version = "17" name ="Java"/>  <br></br>
       <Text version = "24" name ="Ubuntu"/>  <br></br>
       <Text version = "7" name =".NET"/>  <br></br>


       <Button  name = "Increase"  onClickFun={increase}/> <br></br>
        {count} <br></br>
       <Button  name = "Decrease"  onClickFun={decrease}/>


      <br></br>

        <label>Ref Test</label>
        <input ref={focusRef} ></input>
        <button onClick={focusFunc}>Focus</button>


        <br></br>

        <Button  name = "Increase"  onClickFun={increase2}   /> <br></br>
       {countRef.current} <br></br>
       <Button  name = "Decrease"  onClickFun={decrease2} />



      </>
    )
  }
  
  export default Test