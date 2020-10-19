import React, {useContext, useState} from 'react'
import firebase from '../config/firebase.js'
import { Link, Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthService.js'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const classes = useStyles()

    const user = useContext(AuthContext)
    
    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
        //↓成功した場合の処理
        .then(() => {
            //ログイン後の処理
            // http://~login => http://~/
            history.push('/')
        })
        //↓失敗した場合の処理
        .catch(err => console.log(err))
    }
    
    //login状態ならlogin画面に行かないようにする処理
    if (user) {
        // '/'にリダイレクトする処理
        return <Redirect to="/"></Redirect>
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <label htmlFor='email'>E-mail</label>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth 
                            type='email' 
                            id='email' 
                            name='email' 
                            placeholder='Email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor='password'>Password</label>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            type='password' 
                            id='password' 
                            name='email'
                            placeholder='Password' 
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Login
                </Button>
            </form>
            <Link to='/signup'>Sign Up</Link>
            </div>
        </Container>
    )
}

export default Login