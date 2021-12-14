import './players.css'
import { Button, Stack, TextField } from "@mui/material"
import { Link } from 'react-router-dom'

export const Todo = (props) => { 

    return (
    <div className="container">
      <Stack spacing={5} sx={{ width: 300 }}>
      <TextField 
            id="outlined-basic" 
            label="Username" 
            variant="outlined" 
            className="submit-container" 
            size="small"
            onChange={(e) => props.setTmpTodo({
                ...props.tmpTodo,
                username: e.target.value
            })}
            value={props.tmpTodo.username}
        />
        <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            className="submit-container" 
            size="small"
            onChange={(e) => props.setTmpTodo({
                ...props.tmpTodo,
                email: e.target.value
            })}
            value={props.tmpTodo.email}
        />
        <TextField 
            id="outlined-basic" 
            label="Experience" 
            variant="outlined" 
            className="submit-container" 
            size="small"
            onChange={(e) => props.setTmpTodo({
                ...props.tmpTodo,
                experience: e.target.value
            })}
            value={props.tmpTodo.experience}
        />
        <TextField 
            id="outlined-basic" 
            label="Level" 
            variant="outlined" 
            className="submit-container" 
            size="small"
            onChange={(e) => props.setTmpTodo({
                ...props.tmpTodo,
                lvl: e.target.value
            })}
            value={props.tmpTodo.lvl}
        />
       
        <Button size="small" variant="contained" className="submit-container">
          <Link
            style={{  textDecoration: 'none', color: '#fff' }}
            to={{
                pathname: `/`,
            }}
            onClick={props.onCreate}
          >
            Submit
          </Link>
        </Button>
      </Stack>
    </div>
    )
}