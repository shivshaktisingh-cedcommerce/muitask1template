import React from 'react'
import "./Component1.css"

import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';


export default function Component1() {
  return (
    <div id="component1">
        <div id ="navbar">
            <div id="navlogo"><img src="../1.png" alt="" id="logo"/></div>
            <div id="navpages">
             <div id="solutionsnav"><Typography variant='body' style={{color:"white",fontWeight:"bold"}}>Solutions</Typography></div>
             <div id="productnav"><Typography variant='body' style={{color:"white",fontWeight:"bold"}}>Products</Typography></div>
             <div id="resourcesnav"><Typography variant='body' style={{color:"white",fontWeight:"bold"}}>Resources</Typography></div>
             <div id="companynav"><Typography variant='body' style={{color:"white",fontWeight:"bold"}}>Company</Typography></div>
             <div id="getnav"><Typography variant="body" style={{color:"white",fontWeight:"bold"}}>Get Started</Typography></div>
             <div id="searchicon"><SearchIcon ></SearchIcon></div>
             <div id="searchnav"><Typography variant='body' style={{color:"white",fontWeight:"bold"}}>Search</Typography></div>
            </div>
        </div>
        <div id="contentandinput">
            <div id="content">
            <div id="content1"><Typography variant="h3" style={{fontWeight:"bold",color:"white",letterSpacing:"1px"}}>Get Started with</Typography></div>
            <div id="content2"><Typography variant="h3" style={{fontWeight:"bold",color:"white",letterSpacing:"1px"}}>Apptio Today</Typography></div>
            <div id="content3"><Typography variant="h6" style={{fontWeight:"700",color:"white",letterSpacing:"1px"}}>Talk to an Apptio expert about your</Typography></div>
            <div id="content4"><Typography variant="h6" style={{fontWeight:"700",color:"white",letterSpacing:"1px"}}>specific needs and see a live product</Typography></div>
            <div id="content5"><Typography variant="h6" style={{fontWeight:"700",color:"white",letterSpacing:"1px"}}>demonstration. Discuss current</Typography></div>
            <div id="content6"><Typography variant="h6" style={{fontWeight:"700",color:"white",letterSpacing:"1px"}}>challenges and find the right</Typography></div>
            <div id="content7"><Typography variant="h6" style={{fontWeight:"700",color:"white",letterSpacing:"1px"}}>application for your use case.</Typography></div>
            </div>
            <div id="input">
              <div id="input1"><TextField id="outlined-basic" label="First name" variant="outlined" size="small" style={{width:"30%",backgroundColor:"white",borderRadius:"2px"}}/><TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" style={{ width:"30%",backgroundColor:"white",borderRadius:"2px",marginLeft:"2%"}}/><br/></div>
              <div id="input2"><TextField id="outlined-basic" label="Work email" variant="outlined" size="small" style={{width:"30%",backgroundColor:"white",borderRadius:"2px"}}/><TextField id="outlined-basic" label="Phone" variant="outlined" size="small" style={{ width:"30%",backgroundColor:"white",borderRadius:"2px",marginLeft:"2%"}}/><br/></div>
              <div id="input3"><TextField id="outlined-basic" label="Company" variant="outlined" size="small" style={{width:"30%",backgroundColor:"white",borderRadius:"2px"}}/><TextField id="outlined-basic" label="Job Function" type="number" variant="outlined" size="small" style={{ width:"30%",backgroundColor:"white",borderRadius:"2px",marginLeft:"2%"}}/><br/></div>
              <div id="input4"><TextField id="outlined-basic" label="Country" type="number" variant="outlined" size="small" style={{ width:"62%",backgroundColor:"white",borderRadius:"2px"}}/><br/></div>
              <div id="input5"><TextareaAutosize aria-label="minimum height"  minRows={5} placeholder="How can we Help?" style={{ width: "60%" }}/></div>
              <div id="input6"><Button variant="contained" style={{backgroundColor:"#FA7E2A",width:"50%",marginLeft:"-10%"}}>Get Started</Button></div>
            </div>
        </div>
        
    </div>
  )
}
