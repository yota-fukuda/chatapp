import React, {useState} from 'react'
import firebase from '../config/firebase'
import { Link } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
  
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

const SignUp = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [name, setName] = useState('')
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault()
        
        // 非同期関数 => 終了するまで別の時間軸で動く
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                //サインアップ後の処理
                // http://~login => http://~/
                history.push('/')

                user.updateProfile({
                    displayName: name
                })
            })
            //エラーが起きることを知らせる。
            .catch(err => {
                console.log(err)
            }) 
    }
    
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <label htmlFor='name'>Name</label>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name='name' 
                                type='name' 
                                id='name' 
                                placeholder='text' 
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor='email'>E-mail</label>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name='email' 
                                type='email' 
                                id='email' 
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
                                name='password' 
                                type='password' 
                                id='password' 
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
                        Sign Up
                    </Button>
                </form>
                <Link to='/login'>Login</Link>
            </div>
         </Container>
    )
}

export default SignUp

