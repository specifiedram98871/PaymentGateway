import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'
import Home from './components/menu/Home';
import { store } from './redux/Store'
import { Provider } from 'react-redux'
import Header from './components/ui/Header/Header';
import MainHeader from './components/ui/Header/mainHeaader';
import Product from './components/products/Product';
import Cart from './components/cart/cart';
function App() {
  // const [theme,setTheme] = useState(true)
  const { setTheme } = useTheme();
  return (

    <div className=''>
      <Header />
      <Product />
      <Cart/>
        {/* <Home /> */}
        <Button onClick={() => {
          setTheme("light");
        }}>Toggle</Button>
      </div>
    
  )
}

export default App
