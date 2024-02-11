import {useAuth} from '../context//AuthContext'

function Taskpage() {
 
 const {user} = useAuth()
  console.log(user)
 
  return (
    <div>Taskpage</div>
  )
}

export default Taskpage