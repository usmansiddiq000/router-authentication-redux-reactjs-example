import React from 'react';
import { connect } from 'react-redux'
import Aux from '../../hoc/hoc';
import Spinner from '../ui-components/spinner/spinner'

const Home = (props) => {
    let home = ( <div>this is home </div>)
    if(props.isStart) {
        home = ( <Spinner />)
    }

    return (
        <Aux>
         {home}
        </Aux>
    )

}
const mapStateToProps = state => ({
    isAuthenticated: state.AuthReducer.isAuthenticated,
    isStart : state.AuthStart.start
  })
export default connect(mapStateToProps)(Home);