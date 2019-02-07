import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { changeScore } from '../store/actions/questions'
import Button from '../components/UI/Button';
import  CardSection  from '../components/UI/CardSection';

class ListItem extends Component {

    state = {
        selected: [true,false,false,false]
    }

    updateScore = () => {
        var options = [...this.props.question.item.incorrect_answers, this.props.question.item.correct_answer ]   
        var correct = this.props.question.item.correct_answer
        
        var result = options.map(option => {
            if(option === correct) {
                return true
            } else {
                return false
            }
        })

        var arrState = this.state.selected

        var bool = false

        for(var i =0 ; i < result.length ; i++) {
            if(result[i] === arrState[i]) {
                bool = true
            } else {
                bool = false
                break
            }
        }

        if(bool) {
            this.props.changeScore()
        } 
    }
    
    selectOption = (i) => {

        if(i === 0) {
            this.setState({ selected : [true,false,false,false]}, () => {
                this.updateScore()
            })
        } else if (i == 1) {
            this.setState({ selected : [false,true,false,false] }, () => {
                this.updateScore()
            })
        } else if (i == 2) {
            this.setState({ selected : [false,false,true,false] }, () => {
                this.updateScore()
            })
        } else if (i == 3) {
            this.setState({ selected : [false,false,false,true] }, () => {
                this.updateScore()
            })
        }

    }

    renderOptions =  () => {
        var options = [this.props.question.item.correct_answer, ...this.props.question.item.incorrect_answers]   

        return options.map((option, i) => {
            return (
                <CardSection key={i}>
                    <Button text={option} onPress={() => this.selectOption(i)} selected={this.state.selected[i]}/>
                </CardSection>
            )
        })            
    }

    render() {

        const { titleStyle } = styles

        return (
        <TouchableWithoutFeedback>
            <View>
                <CardSection>
                    <Text style={titleStyle}>
                        {this.props.question.item.question}
                    </Text>
                </CardSection>
                {this.renderOptions()}
            </View>
        </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = state => {
    return {
        score: state.questions.score
    }
}

export default connect(mapStateToProps, {changeScore})(ListItem);