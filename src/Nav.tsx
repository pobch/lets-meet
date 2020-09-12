import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'

function Nav() {
  return (
    <nav>
      <Link to="/">
        <HomeOutlined />
        Home
      </Link>
      <ul>
        <li>
          <Link to="/selector">Create/Edit</Link>
        </li>
        <li>
          <Link to="/display">Display</Link>
        </li>
      </ul>
    </nav>
  )
}

export { Nav }
