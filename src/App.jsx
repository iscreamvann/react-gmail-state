import Header from './components/Header'
import initialEmails from './data/emails'
import './styles/App.css'
import React from 'react'

function App() {
const [emails, setEmails] = React.useState(initialEmails)
const starredEmails = emails.filter((item) => {return true === item.starred})
  // Use initialEmails for state
  console.log(starredEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{emails.length}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emails.map((item) => { 
        const readUnreadClass = item.read ? 'read' : 'unread'
      return (<li key={item.id} className={'email ' + readUnreadClass}>
             <div className="select">
	<input
	  className="select-checkbox"
	  type="checkbox"/>
  </div>
  <div className="star">
	<input
	  className="star-checkbox"
	  type="checkbox"
    checked={item.starred}
	/>
  </div>
  <div className="sender">{item.sender}</div>
  <div className="title">{item.title}</div>
</li>)})}</main>
    </div>
  )
}

export default App
