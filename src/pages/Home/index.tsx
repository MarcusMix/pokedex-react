import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      Olá mundo!
      <Outlet/>
    </div>
  )
}

export default HomePage