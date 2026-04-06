import './App.css';
import Nav from "./components/nav/nav";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import History from './pages/History/HistoryFebMar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { index: true, element: <Home /> },
      { path: "history", element: <History /> },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
