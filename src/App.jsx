import {useState, useEffect} from "react"
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'

import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import NotFoundPage from "./pages/not-found"
import {Routes, Route} from 'react-router'


@@ -32,6 +34,7 @@


    return(
      <>
      <Routes>
        <Route path='/' element={ <HomePage
          coins={coins}
@@ -43,9 +46,12 @@
          error={error}
          />
        }/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />}>
      </Routes>
      </>
    )


}