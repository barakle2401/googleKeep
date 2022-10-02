import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UpdateModal from '@/components/notes/UpdateModal';
import Home from '@/views/home/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'edit/:noteId',
        element: <UpdateModal />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
