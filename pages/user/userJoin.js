import React, { useEffect, useState } from 'react'
import UserJoin from '@/components/user/UserJoin'
import { useDispatch } from 'react-redux'
import { userJoin } from "@/modules"

const UserJoinPage = () => {
  const dispatch = useDispatch()
  const form = {}
  const onSubmit = e => {
    e.preventDefault()
    const {userid, name, email, password, phone, birth, address} = form
    alert(" 1단계 "+JSON.stringify(form))
    dispatch(userJoin({userid, name, email, password, phone, birth, address}))
  }
  const onChange = e => {
    e.preventDefault()
  }
  return (<UserJoin form={form} onSubmit = {onSubmit} onChange={onChange} />)
}

export default UserJoinPage