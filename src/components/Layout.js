import React from 'react'
import { SideBar } from './SideBar'

export const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      
        <div className="row flex-nowrap">
            <SideBar/>
        <div className="col py-3 bg-secondary text-light">
            { children }
        </div>
        </div>
    </div>
  )
}
