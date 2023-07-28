import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';




export function clearBoard(){
  document.location.reload(false);
}



export default function MyAppBar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }} style={{ height: 50 }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'Helvetica',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
              textAlign: 'center',
              fontSize: 20,
              marginBottom: '8px',
            }}
          >
            Path Visualizer
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '8px',
              marginRight: '8px',
              color: 'black',
            }}
          >
            <div className="dropdown">
              Algorithms
              <div className="dropdown-content">
                <Typography variant="body1" component="div">
                  Dijkstras Algorithm
                </Typography>
                <Typography variant="body1" component="div">
                  A* Search
                </Typography>
                <Typography variant="body1" component="div">
                  Greedy Best-first Search
                </Typography>
                <Typography variant="body1" component="div">
                  Swarm Algorithm
                </Typography>
                <Typography variant="body1" component="div">
                  Convergent Swarm Algorithm
                </Typography>
                <Typography variant="body1" component="div">
                  Bidirectional Swarm Algorithm
                </Typography>
                <Typography variant="body1" component="div">
                  Breadth-first Search
                </Typography>
                <Typography variant="body1" component="div">
                  Depth-first Search
                </Typography>
              </div>
            </div>
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '8px',
              marginRight: '8px',
              color: 'black',
            }}
            onClick={clearBoard}
          >
            Clear Board
          </Typography>
          
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '8px',
              marginRight: '8px',
              color: 'black',
            }}
          >
            <div className="button">Clear Walls & Weights</div>
          </Typography>
          
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '8px',
              color: 'black',
            }}
          >
            <div className="button">Clear Path</div>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
