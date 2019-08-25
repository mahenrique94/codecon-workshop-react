import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTweets } from '../selectors/tweets'
import { getApp } from '../utils/firebase'
import { getAll } from '../actions/tweets'
import { getTokenInfo } from '../utils/auth'

import App from '../containers/App'
import Tweet from '../components/Tweet'
import TweetForm from '../components/TweetForm'

const Home = () => {
    const dispatch = useDispatch()
    const tweets = useSelector(getTweets)

    useEffect(() => {
        const tweetsRef = getApp().database().ref('tweets')
        tweetsRef.on('value', snapshot => dispatch(getAll(snapshot.val() || [])))
    }, [dispatch])

    const handleTweetSubmit = ({ tweet }) => {
        getApp().database().ref('tweets').set([
            ...tweets,
            { username: getTokenInfo().email, tweet }
        ])
    }

    return (
        <App>
            <TweetForm onSubmit={handleTweetSubmit}/>
            { tweets.map((tweet, index) => (
                <Tweet key={index} username={tweet.username} tweet={tweet.tweet}/>
            ))}
        </App>
    )
}

export default Home
