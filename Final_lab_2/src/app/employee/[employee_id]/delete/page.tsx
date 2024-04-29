
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

function deleteEmployee(username: string) {
  const _deleteUser = async () => {
      const response = await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT+"/user/"+username, {
        headers: {
            //'Content-Type': 'multipart/form-data'
            'Content-Type': 'application/json'
        }
    })

    //console.log(response)
  }

  _deleteUser()
}

export default deleteEmployee