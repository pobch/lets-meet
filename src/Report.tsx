import React, { useState } from 'react'
import { Input, Button, List } from 'antd'
import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { ListRoomsQuery } from './API'
import { getRoom, listRooms } from './graphql/queries'

function Report() {
  const [roomName, setRoomName] = useState('')
  const [dates, setDates] = useState<String[]>([])
  async function handleClickFetchRoom() {
    const result = (await API.graphql({
      query: listRooms,
      variables: { filter: { name: { eq: roomName } } },
    })) as GraphQLResult<ListRoomsQuery>
    const sortedDates = result.data?.listRooms?.items?.[0]?.dates ?? []
    setDates(sortedDates)
  }
  return (
    <div>
      <h1>Report</h1>
      <Input value={roomName} onChange={(e) => setRoomName(e.target.value)} />
      <Button onClick={handleClickFetchRoom}>Go</Button>
      <List
        itemLayout="vertical"
        dataSource={dates}
        renderItem={(date) => <List.Item>{date}</List.Item>}
      />
    </div>
  )
}

export { Report }
