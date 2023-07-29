import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<App />}>
//         <Route path='/contact' element={<Contact />}/>
//       </Route>
//     )
//   )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
         <App  />
    </BrowserRouter>
        
   
);


  