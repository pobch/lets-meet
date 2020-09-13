import React, { useState, useRef } from 'react'
import { DatePicker, Button, List, Input } from 'antd'
import { Moment } from 'moment'
import { API } from 'aws-amplify'
import { createRoom } from './graphql/mutations'

function Create() {
  const hasDate = useRef<{ [key: string]: boolean }>({})
  const [sortedDates, setSortedDates] = useState<Moment[]>([])
  const [newDate, setNewDate] = useState<Moment | null>(null)
  const [roomName, setRoomName] = useState('')

  async function handleSubmit() {
    await API.graphql({
      query: createRoom,
      variables: {
        input: { name: roomName, dates: sortedDates.map((date) => date.format('DD/MM/YYYY')) },
      },
    })
    setRoomName('')
    setSortedDates([])
  }

  return (
    <div>
      <h1>Create</h1>
      <DatePicker value={newDate} onChange={(date) => setNewDate(date)} />
      <Button
        disabled={!newDate}
        onClick={() => {
          if (!newDate) return
          const formattedDate = newDate.format('DD/MM/YYYY')
          if (!hasDate.current[formattedDate]) {
            hasDate.current[formattedDate] = true
            setSortedDates((prev) => [...prev, newDate].sort((a, b) => a.valueOf() - b.valueOf()))
          }
          setNewDate(null)
        }}
      >
        Add
      </Button>
      <List
        dataSource={sortedDates}
        itemLayout="vertical"
        renderItem={(date) => {
          return <List.Item>{date.format('DD/MM/YYYY')}</List.Item>
        }}
      />
      <Input
        placeholder="Room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}

export { Create }
