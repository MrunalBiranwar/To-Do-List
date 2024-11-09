import React from 'react'
import List from './list.js'

export default function Todolist(props) {
  return (
    props.list.map((list , i) =>{
        return <List list={list} key={i} index={i} Deletetodo={props.Deletetodo} />
    })
  )
}
