import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import PokemonList from './components/PokemonList/PokemonList.jsx';
import PokemonDetails from "./components/PokemonDetails/PokemonDetails.jsx"

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [ // it basically defines the Outlet inside the App parent component
      {
        path: "/",
        element: <PokemonList />
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetails />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
