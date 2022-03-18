import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
          <Header/>
        </header>
        <aside>
            menu admin duy vlog
        </aside>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout