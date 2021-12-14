import './home.css'
import {Button, List, Stack} from '@mui/material';
import {TodoItem} from '../components/player-item.component';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="container">
      <Stack spacing={5} sx={{ width: 300 }}>
        <div>
          <List dense={true}>
            {
              props.todos.map(todo => (
                <TodoItem key={todo.id} username={todo.username} email={todo.email} id={todo.id} onDelete={props.onDelete} />
              ))
            }
          </List>
        </div>
        <Button size="small" variant="contained" className="submit-container">
          <Link
            style={{  textDecoration: 'none', color: '#fff' }}
            to={`/players`}
          >
            New PLayers
          </Link>
        </Button>
      </Stack>
    </div>
  )
}

export default Home