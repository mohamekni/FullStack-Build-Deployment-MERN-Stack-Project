import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <>
      <p>banner</p>
      <p>navbar</p>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>Footer</p>
      <p>cartsidebar</p>
    </>
  )
}

export default AppLayout
