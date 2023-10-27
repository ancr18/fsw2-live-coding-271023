import { useState } from "react"
import Calculator from "./components/Calculator/Calculator"
import Header from "./components/Header/Header"
import Result from "./components/Result/Result"

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10,
  })

  const durationIsValid = userInput.duration > 0

  function handleUserInput(inputKey, newValue) {
    console.log(newValue)
    setUserInput((existingUserInput) => {
      return {
        ...existingUserInput,
        [inputKey]: +newValue,
      }
    })
  }

  return (
    <>
      <Header />
      <Calculator onChangeProps={handleUserInput} userInput={userInput} />
      {!durationIsValid && <p className="center">Masukkan Durasi diatas 0</p>}
      {durationIsValid && <Result resultInput={userInput} />}
    </>
  )
}

export default App
