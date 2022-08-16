import React, { createRef } from 'react';
import { connect } from 'react-redux'; 
import { selectAccessToken } from './selectors';
import { fetchAccessTokenRequest } from './slice';
import { fetchPetsRequest } from '../../Pet/slice';
import { selectPetIds } from '../../Pet/selectors';
import PetList from '../../../components/PetList'

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { accessToken, ...actions } = this.props;

        if(accessToken === null) {
            actions.fetchAccessTokenRequest();
        }
        
    }

    componentDidUpdate(prevProps) {
        const { accessToken, pets, ...actions } = this.props;
        const { accessToken: prevAccessToken, pets: prevPets } = prevProps;
        if (accessToken !== prevAccessToken) {
            actions.fetchPetsRequest();
        }
        if (pets !== prevPets) {
            this.render();
        }
    }

    componentWillUnmount() {

    }

    render() {
        const {pets} = this.props;
        let page;
        if(pets) {
            page = <PetList results={pets} />;
        } else {
            page = null
        }

        return <div id="project" >
            {page}
        </div>
    }
}

const mapStateToProps = (state) => ({
    accessToken: selectAccessToken(state),
    pets: selectPetIds(state)
});

const mapDispatchToProps = {
    fetchAccessTokenRequest,
    fetchPetsRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Project);
