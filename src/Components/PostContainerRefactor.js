import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchUsers  } from "../Redux";


function PostContainerRefactor(userData,fetchUsers) {

    useEffect(() => {
      fetchUsers()
    }, [])

    return userData.loading ?<h1>Loading</h1> : userData.error ? <h2>Error</h2>: (<div>
        <h2>Data is</h2>
        {/* Incomplete watch details from (https://www.youtube.com/watch?v=tcCS4mGAq7Q&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=29) */}
    </div>);
    
}

const mapStateToProps = (state) => {
    return {
        userData: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostContainerRefactor)
