import React from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";
import {
    Grid,
} from "@material-ui/core";
import PetCard from './PetCard';

const PetList = (props) => {
    const {results} = props;
    if (results.length === 0) {
        return <LinearProgress style={{ width: "100%", height: 5 }} />;
    }

    return <Grid
        style={{ width: "100%" }}
        container
        justifyContent="center"
        alignItems="center"
    >
         {results.map((result) => (
          <PetCard key={result.id} result={result} />
        ))}
    </Grid>
}

export default PetList;