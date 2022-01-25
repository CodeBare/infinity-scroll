import React, {useEffect, useState} from 'react';
import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {AllInclusive} from "@mui/icons-material";
import { ReactComponent as Loader } from './loader.svg';
import UnsplashDataHook from "./UnsplashData.hook";

const App = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const [sLoadMore, setLoadMore] = useState(true)

    const hUnsplash = UnsplashDataHook(sLoadMore)

    useEffect(() => {
        const scrollListener = () => {
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000)
                setLoadMore(true)
        }
        // Add the event listener for scrolling...
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    useEffect(() => {
        // When the state of this object changes,
        // turn off the load more variable
        setLoadMore(false)
    }, [hUnsplash])

    return (
        <Container sx={{
            position: 'relative'
        }}>
            <Typography variant={'h1'} sx={{
              display: 'flex',
              flexDirection: 'row',
              margin: '10px auto',
              justifyContent: 'center',
              fontSize: matches ? 18 : 40,
              letterSpacing: matches ? 1 : 5,
              alignItems: 'center',
              textTransform: 'uppercase'
            }}>
                <AllInclusive sx={{
              fontSize: matches ? 18 : 40,
              marginRight: matches ? '10px' : '20px'
            }} />
                <span>unsplash api - infinite scroll</span>
            </Typography>
            <Box sx={{
                position: 'absolute',
                visibility: 'hidden',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Loader />
            </Box>
            <Box sx={{
                margin: matches ? '10px' : '10px 30%',
                '& img': {
                    width: '100%',
                    marginTop: '5px'
                }
            }}>
                {hUnsplash.map((u, i) => (
                    <a key={u.id + i}
                       style={{
                           cursor: 'pointer'
                       }}
                       target={'_blank'}
                       rel={'noreferrer'}
                       href={u.links.html}>
                        <img alt={u.alt_description ? u.alt_description : 'Details unknown'}
                             title={u.alt_description ? u.alt_description : 'No description provided'}
                             src={u.urls.regular}/>
                    </a>

                ))}
            </Box>
        </Container>
    );
}

export default App;
