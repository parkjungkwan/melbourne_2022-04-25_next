import React, {useEffect, useState} from 'react'
import UserJoin from '@/components/user/UserJoin'
import {useDispatch, useSelector} from 'react-redux'
import {userJoin, inputValues} from "@/modules"

const UserJoinPage = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const { auth, user} = useSelector(
        ({auth, user}) => ({auth: auth.auth, user: user.user, authError: auth.authError, form: auth.userJoin})
    )
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        dispatch(inputValues({form: 'userJoin', key: name, value}))
    }
    const onSubmit = e => {
      alert(' click ')
        e.preventDefault()
        const {
            userid,
            name,
            email,
            password,
            phone,
            birth,
            address
        } = form
        dispatch(userJoin({
            userid,
            name,
            email,
            password,
            phone,
            birth,
            address
        }))
    }

    return (<><UserJoin setValue={setValue}/>
    <h1>{value}</h1>
    </>)
}

export default UserJoinPage