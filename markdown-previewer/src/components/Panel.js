import { Container, Button, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export const Panel = (props) => {
  return (
    <Container className={props.label} sx={!props.isExpanded ? props.style : {width: '90vw'}}>
      <Paper sx={{ backgroundColor: '#CCEA8D' }}>
        <Container sx={{ backgroundColor: '#A6BC09' }}>
          <label htmlFor={props.label}>{props.label.toUpperCase()}</label>
          <Button onClick={props.expand}>{!props.isExpanded ? <ExpandMoreIcon data-testid="expand-more" /> : <ExpandLessIcon data-testid="expand-less" />}</Button>
        </Container>
        {props.children}
      </Paper>
    </Container>
  )
}
