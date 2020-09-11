import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Results extends Component {

    render() {
        const { results } = this.props;
        console.log(this.props);

        return(
            <Page
                results={results}
                goTo={
                    (path) => {
                        this.props.history.push(path);
                    }
                }
            />
        );
    }
}
//Todos los reducers de store, se almacenan en el objeto state
const mapStateToProps = (state) => {
    return{
        results: state.results,
        hola: '123',
    };
};

export default connect(mapStateToProps)(Results);