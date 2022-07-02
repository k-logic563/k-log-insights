import React from 'react'

type Props = {
  urls: string[]
}

export const Sidebar: React.FC<Props> = ({ urls }) => {
  return (
    <nav className="sticky-top">
      <ul className="list-group">
        {urls.map((x, i) => (
          <li className="list-group-item" key={i}>
            <a
              className="d-block"
              href={`#res-${i}`}
              data-testid={`sidebar-url-${i}`}
            >
              {x}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
