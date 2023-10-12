import { Outlet } from "react-router-dom"
import AlertDialog from "./components/common/AlertDialog"

function App() {
  return (
    <>
      <AlertDialog />

      <Outlet />
    </>
  )
}

export default App
