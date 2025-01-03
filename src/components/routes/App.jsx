import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"
import HomeItem from "../HomeItem"
import FetchItems from "../../components/fetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../../components/LoadingSpinner"


function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus)


  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />

    </>
  )
}

export default App
