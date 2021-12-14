import './home.css'
import {Button} from '@mui/material';
// import {TodoItem} from '../components/player-item.component';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = (props) => {


  return (
    <div className="container">
         <Button size="small" variant="contained" className="submit-container">
          <Link
            style={{  textDecoration: 'none', color: '#fff' }}
            to={`/players`}
          >
            New PLayers
          </Link>
        </Button><p></p>
       
     
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Players ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="center">Experience</TableCell>
            <TableCell align="center">Level</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        props.todos.map(todo => (
            <TableRow
              key={todo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {todo.id}
              </TableCell>
              <TableCell align="right">{todo.username}</TableCell>
              <TableCell align="right">{todo.email}</TableCell>
              <TableCell align="center">{todo.experience}</TableCell>
              <TableCell align="center">{todo.lvl}</TableCell>
               <TableCell align="center">
                  <button onClick={props.onDelete(todo.id)}>Delete</button>
                  <button onClick={props.onFormEdit(todo.id,todo.username,todo.email,todo.experience,todo.lvl)}>Edit</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}
  

export default Home