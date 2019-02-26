import React, { Component } from 'react';
import axios from '../../axios';
import {connect} from 'react-redux';
import Spinner from '../../component/ui-components/spinner/spinner'
import Aux from '../../hoc/hoc'


class Profile extends Component {

    state = {
        user:null
    }

    componentDidMount() {
        axios.get('/Users/'+this.props.user.userId+'?access_token='+this.props.user.id)
        .then(res => {
            console.log(res.data)
         this.setState({user:res.data})
        })
        .catch(error => console.log(error))
      
    }

    render(){
        let Profile;
        if(!this.state.user) {
            Profile = <Spinner />
        }
        else {
            Profile = (<div><p>Username:{this.state.user.username}</p>
                       <p>Email:{this.state.user.email}</p></div>)
        }

        return(
            <Aux>
            {Profile}
            </Aux>
        )
    }
}
const mapStateToProps= state => ({
    user : state.AuthReducer.user
})

export default connect(mapStateToProps)(Profile);