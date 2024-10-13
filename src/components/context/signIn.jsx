import React from 'react'
import { InsideCon, SignInLink, SignLink, Signcontainer } from '../styles/style'
import naver from '../../assets/naver-icon.png'
import google from '../../assets/red-icon.png'
import kakaotalk from '../../assets/KakaoTalk_logo.svg'

const SignIn = () => {
  return (
    <Signcontainer>
       <div className='sign-con'>
       <InsideCon className='InsideCon'> 
       <h1>Sign in</h1>
       <h2>Email</h2>
       <input type='type' className='email-input'  placeholder='Your email'/>
       <h2>Password</h2>
       <input type='type' className='email-input'  placeholder='Your password'/>
       <div className='chekbox-main'>
        <div className='chekbox-con'>
        <input type={'checkbox'}  className='chekbox'/>
        <label style={{color:'#373737'}}>Keep me logged in</label>
        </div>
        <p  style={{color:'#373737'}}>Forget your password ?</p>
       </div>
       <SignInLink to={`/motor`}>
       <button className='sign-but'>SIGN IN</button>
       </SignInLink>
       <div className='lines-con'>
        <hr style={{width:'119px',height:'1px',border:'1px solid rgba(55, 55, 55, 0.15)'}}/>
        <p style={{color:'#6D6D6D'}}>OR</p>
        <hr style={{width:'119px',height:'1px',border:'1px solid rgba(55, 55, 55, 0.15)'}}/>
       </div>
       <div className='logos-con'>
        <img style={{width:'46px'}} src={naver} alt="naver-icon-img" />
        <img style={{width:'46px'}} src={google} alt="google-icon-img" />
        <img style={{width:'46px',borderRadius:'50%'}} src={kakaotalk} alt="kakaotalk-icon-img" />
       </div>
       <SignLink to={'/create-account/'}>
       <button className='create-but'>CREATE ACCOUNT</button>
       </SignLink>
       </InsideCon>
        </div>
     </Signcontainer>
    
  )
}

export default SignIn