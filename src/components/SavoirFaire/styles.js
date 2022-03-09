import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme)=>({
    savoirFaire: {
        marginBottom: '100px',
        padding: '0 150px',
        [theme.breakpoints.down('sm')]: {
            padding: '0 10px',
          width: '100%',
        },
      },
}))
