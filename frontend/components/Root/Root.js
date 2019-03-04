import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Info from './../InfoField/InfoField';
import Map from './../Map/Map';
import ButtonField from './../ButtonField/ButtonField';
import { rootStyles } from './Root.Styles';
import { requestLocation, getPlatform, getConnectionInfo } from './Root.Action';
import ProviderPicker, { NO_PROVIDER } from '../ProviderPicker/ProviderPicker';
class Root extends React.Component {
    constructor(props) {
        super(props);
        props.requestLocation();
        props.getPlatform();
        props.getConnectionInfo();
    }

    renderMapOrInfoField = () => {
        if (this.props.showingMap) {
            return <Map />;
        }
        return <Info />;
    };

    render() {
        const { provider } = this.props
        if( provider === NO_PROVIDER ){
            return (
                <ProviderPicker />
            )
        }
        return (
            <View style={[rootStyles.container, { alignItems: 'stretch' }]}>
                <View style={{ flex: 4, backgroundColor: '#333' }}>
                    {this.renderMapOrInfoField()}
                </View>
                <View style={{ flex: 2 }}>
                    <ButtonField />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        showingMap: state.showingMap,
        provider: state.currentInformation.provider,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            requestLocation: requestLocation,
            getPlatform: getPlatform,
            getConnectionInfo: getConnectionInfo,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
