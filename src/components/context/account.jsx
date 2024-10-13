import React from 'react'
import { AccountCon, AccountConMain, RegistrateLink } from '../styles/style'
import cancel from '../../assets/heroicons-solid_x.svg'

const CreateAccount = () => {
  return (
    <AccountConMain>
    <AccountCon>
        <div>

            <div  className='registrate'>
            <h1>Registrate</h1>
           <img src={cancel} alt="cancel-icon" style={{cursor:'pointer'}}/>
            </div>
            <h2 style={{color:'rgba(55, 55, 55, 0.80)',marginTop:'30px'}}>Email</h2>
            <input type="text" className='email-input' placeholder='Your email' />
            <h2 style={{color:'rgba(55, 55, 55, 0.80)',marginTop:'10px'}}>Password</h2>
            <input type="text" className='email-input' placeholder='Your password' />
            <h2 style={{color:'rgba(55, 55, 55, 0.80)',marginTop:'10px'}}>Repeat your password</h2>
            <input type="text" className='email-input' placeholder='Your password' />
            <div className='chek-con'>
                <input type={'checkbox'} className='chek-in'/>
                <label>Keep me logged in</label>
            </div>
            <RegistrateLink to={'/sign-in/'}>
            <button className='registrate-but'>REGISTRATE</button>
            </RegistrateLink>
           
        </div>
    </AccountCon>
    </AccountConMain>
   
  )
}

export default CreateAccount

