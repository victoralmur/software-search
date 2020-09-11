import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
import {
    withRouter
} from 'react-router-dom';

class IAppBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text){
        this.setState({ text });
        this.props.findSuggestions(text);
    }

    //Se ejecuta cuanto se de click a un item de las opciones muestra un elemento
    //o se presiona cuando se escribe una letra muestra todas las opciones
    onChangeSelection(text){
        this.setState({ text });
        this.props.findResults(text);
        this.props.history.push('/results');
    }

    render() {

        const { text } = this.state;
        const { suggestions } = this.props;
        console.log('props', this.props);
        return(
            <Page
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

//Todos los reducers de store, se almacenan en el objeto state
const mapStateToProps = (state) => {
    return{
        suggestions: state.suggestions,
    };
};
//Retorna acciones
const mapDispatchToProps = {
    findSuggestions,
    findResults,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);