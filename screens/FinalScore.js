import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from '../components/UI/Button'
import { connect } from 'react-redux';
import CardSection from '../components/UI/CardSection';
import { fetchQuestions, resetScore } from '../store/actions/questions';

class FinalScore extends Component {

    onPress = () => {
        this.props.resetScore()
        this.props.fetchQuestions()
        this.props.navigation.navigate('list')
    }

    render() {
        return (
            <CardSection>
                <Text>Your Score is:</Text>
                <Text>{this.props.score}</Text>
                <Button onPress={this.onPress} text='Start Again'/>
            </CardSection>
        )
    }
}

  const mapStateToProps = state => {
      return {
          score: state.questions.score
      }
  }

  export default connect(mapStateToProps, {fetchQuestions, resetScore})(FinalScore)