import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';

class Details extends Component {
    constructor(props) {
        super(props);

        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        const {
            match: { params: { itemId } },
            findCurrentItem,
        } = this.props;

        findCurrentItem(parseInt(itemId));
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            currentItem,
        } = this.props;

        return (
            <Page
                currentItem={currentItem}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    currentItem: state.currentItem,
});

const mapDispatchToProps = {
    findCurrentItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);