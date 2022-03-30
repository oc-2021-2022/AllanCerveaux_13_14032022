import React, { useEffect, useState } from 'react'
import Account from '../components/Account'
import Profile from '../components/Profile'

const data_accounts = [
  { title: 'Argent Bank Checking', value: 8349, balance: '2,082.79'},
  { title: 'Argent Bank Savings', value: 6712, balance: '10,928.42'},
  { title: 'Argent Bank Credit Card', value: 8349, balance: '184.30'}
]

export default function Dashboard() {
  const [accounts, setAccount] = useState([])

  useEffect(() => {
    setAccount(data_accounts)
  }, [])


  return (
    <main className='main bg-dark'>
      <Profile />
      {
        accounts?.map(({title, value, balance}, index) => (
          <Account
            key={index}
            account_name={title}
            value={value}
            balance={balance}
          />
        )) || []
      }

    </main>
  )
}
