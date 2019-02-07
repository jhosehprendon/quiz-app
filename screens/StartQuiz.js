import React, { Component } from 'react';
import Button from '../components/UI/Button'
import { connect } from 'react-redux';
import CardSection from '../components/UI/CardSection'
import {fetchQuestions} from '../store/actions/questions'

class StartQuiz extends Component {
    onPress = () => {
        this.props.fetchQuestions()
        this.props.navigation.navigate('list')
    }

    render() {
        return (
            <CardSection>
                <Button onPress={this.onPress} text='Start Quiz'/>
            </CardSection>
        )
    }
}




export default connect(null, {fetchQuestions})(StartQuiz)