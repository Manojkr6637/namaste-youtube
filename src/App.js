import { Provider } from 'react-redux';
import './App.css' 
import Body from './components/Body'; 
import Header from './components/Header'
import store from './utils/store'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage'; 
import MainContainer from './components/MainContainer';
import Demo from './components/Demo';
const appRounter = createBrowserRouter([
    {
      path: '/',
      element:<Body/>,
      children:[
                {
                    path: '/',
                    element:<MainContainer/>  
                },
                {
                  path: '/watch',
                  element:<WatchPage/>  
                },
                {
                  path: '/demo',
                  element:<Demo/> 
                }
              ]  
   },
]);
function App() {
  return (
    <Provider store={store}>
    <div > 
    <Header/>
    <BrowserRouter basename='/namaste-youtube'>
    <RouterProvider router={appRounter} />
    </BrowserRouter>
    </div></Provider>
  );
}

export default App;
