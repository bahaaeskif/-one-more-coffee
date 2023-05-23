//import library
import { Routes, Route } from 'react-router-dom'

//import files
import './App.css'

//import components  
import SharedLayout from './components/sharedlayout/SharedLayout'
import Home from './components/home/Home'
import ShowMore from './components/showmore/ShowMore'

import { useDispatch, useSelector } from 'react-redux'
import QuantityController from './common/QuantityController'

import SkeletonCategory from './skeleton/skeletonCategory'
import CardsSkeleton from './skeleton/CardsSkeleton'
import Nav from './skeleton/nav'
import Cart from './components/cart/Cart'
import { useEffect } from 'react'
import axios from 'axios'
import { RouteGlobal } from './variables'


import { apiCallBegan } from './store/actionsApi'
import { loadProducts } from './store/products'
import Search from './components/search/search'

function App() {
  const { ui } = useSelector((state) => state.ui)
  const darkMode = ui.darkMode

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(loadProducts());
  }, [])

  return (
    <div className={`App ${darkMode ? ' bg-secondaryDark' : 'bg-white'} min-h-screen`}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={`${RouteGlobal.search}`} element={<Search />} />
          <Route path={`${RouteGlobal.cart}`} element={<Cart />} />
          <Route path={`${RouteGlobal.detailes}${`/:id`}`} element={<ShowMore />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
