import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class QuestionList extends Component {

    renderItem(question) {
        return <ListItem question={question} />
    }

    onPress = () => {
        this.props.navigation.navigate('results')
    }

    render () {
        return (
            <View>
                <FlatList 
                    data={this.props.questions}
                    renderItem={this.renderItem}
                    keyExtractor={question => question.question }
                />
                <TouchableOpacity onPress={this.onPress} style={styles.fab}>
                    <Text style={styles.fabIcon}>Go</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fab: { 
        position: 'absolute', 
        width: 56, 
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 20, 
        backgroundColor: '#03A9F4', 
        borderRadius: 30, 
        elevation: 8 
        }, 
        fabIcon: { 
          fontSize: 24, 
          color: 'white' 
        }
  });


const mapStateToProps = state => {
    return {
        questions: state.questions.questions
    }
}

export default connect(mapStateToProps)(QuestionList);
