import { Container, Button, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export const Panel = (props) => {
  return (
    <Container className={props.label} sx={props.style}>
      <Paper sx={{ backgroundColor: '#CCEA8D' }}>
        <Container sx={{ backgroundColor: '#A6BC09' }}>
          <label htmlFor={props.label}>{props.label.toUpperCase()}</label>
          <Button>{true ? <ExpandMoreIcon /> : <ExpandLessIcon />}</Button>
        </Container>
        {props.children}
      </Paper>
    </Container>
  )
}
