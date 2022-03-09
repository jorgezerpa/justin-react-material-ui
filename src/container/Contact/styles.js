import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
      container:{
        width: '100%',
        overflowX: 'hidden'
      },
      span:{
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      containerItem: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '10px',
      }, 
      containerImage: {
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        },
      }, 
      listsContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '100px',
        [theme.breakpoints.down('sm')]: {
          gap: '20px',
        },
      },
      list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
          alignItems: 'center',
        },
      },
      listItem: {
        listStyle: 'none',
      }
  }));
