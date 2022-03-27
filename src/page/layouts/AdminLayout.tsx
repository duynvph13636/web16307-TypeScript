import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        {/* <header>
            header admin
        </header>
        <aside>
            menu admin
        </aside> */}
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout