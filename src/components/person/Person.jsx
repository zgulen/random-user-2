import styling from "./Person.module.scss"
import axios from "axios"
import spinner from "../../assets/spinner.svg"
import { useState,useEffect } from "react";

const url = "https://randomuser.me/api/";

const Person = () => {
  const [text1, setText1] = useState("My name is ")
  const [text2, setText2] = useState("")
  const [loading, setLoading] = useState(false)

  const PersonInfo = async() =>{
    setLoading(true)
    try {
      const response = await axios.get(url)
      const person = response.data.results[0]
      console.log(person);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  useEffect(() => {  
    PersonInfo()
  }, [])
  
  return (
    <div className={styling.card}>
      <nav className={styling.navbar}>
      <div>

      </div>
      </nav>

    </div>
  )
}

export default Person