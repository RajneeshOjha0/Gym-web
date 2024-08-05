import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, colors } from '@mui/material'
import Logo from "../assets/images/logo.png"
import { BorderBottom } from '@mui/icons-material'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:'122px' ,xs :'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none' }} px='20px'>
      <Link to="/">
      <img src={Logo} alt='logo' style={{width:'200px',height:'80px',margin:'0 20px' ,border:"4px solid #FFFAFB" ,borderRadius:"25px"}} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to='/' style={{textDecoration:'none', colors:'#3A1212', borderBottom:'3px solid #FF2625',marginBottom:"40px"} }>Home</Link>
        <a href='#exercise' style={{textDecoration:'none',color:'#3A1212',marginBottom:"40px"}}>Exercises</a>
      </Stack>
    </Stack>  
  )
}

export default Navbar