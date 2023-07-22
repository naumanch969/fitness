import { Routes, Route } from "react-router-dom"
import { Home, ExerciseDetail } from "./pages"
import { Navbar, Footer } from "./components"

import { Box } from "@mui/material"


function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1480px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
