import React from 'react';
import { connect } from 'react-redux'
import {AuthAction} from '../../Redux/action'

import Aux from '../../hoc/hoc';

const Home = (props) => {
        console.log(props)
       //props.AuthAction();

    return (
        <Aux>
        <div>this is home component</div>
        <button onClick = {() => {props.authAction(true,'loggedin')}}>clickMe</button>
        </Aux>
    )

}
const mapDispatchToProps = dispatch => ({
    authAction: (a, b) => dispatch(AuthAction(a, b))
})
export default connect(null, mapDispatchToProps)(Home);