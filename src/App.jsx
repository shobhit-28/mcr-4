import { Route, Routes } from "react-router-dom"

import { HeaderComponent } from "./components/header/header"
import { LeftSideBar } from "./components/leftSideBar/leftSideBar"
import { RightSideBar } from "./components/rightSideBar/rightSideBar"
import { HomePage } from "./pages/homePage/homePage"
import { CommentPage } from "./pages/commentPage/commentPage"
// import { RightSideBar } from "./components/rightSideBar/rightSideBar"

function App() {
  
  return (
    <div className="App">
      <HeaderComponent />
      <LeftSideBar />
      <RightSideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comments/:postID" element={<CommentPage />} />
      </Routes>
    </div>
  )
}

export default App
