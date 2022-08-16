import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
    CardMedia,
    Card,
    Grid,
    CardContent,
    CardActionArea,
    CircularProgress,
    Typography
  } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.primary.main,
    },
    image: {
        height: 400,
        [theme.breakpoints.up("lg")]: {
        height: 300,
        },
    },
}));

const PetCard = (props) => {
  const { result } = props;
  console.log(result);
  const classes = useStyles();
  const [imageLoading, setImageLoading] = useState(true);

  let ImageComponent;
  let Title = 'No name'
  let Description = 'No Description'
  let Target = '/';
  if (result) {
    Title = result.name;
    Description = result.description;
    Target = result.url;
  }
  if (result && result.photos && result.photos[0] && result.photos[0].full) {
    
    ImageComponent = () => (
      <div
        className={classes.image}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "rgb(200,200,200)",
        }}
      >
        (
        <CardMedia
          component="img"
          className={classes.image}
          image={result.photos[0].full}
          onLoad={() => setImageLoading(false)}
          style={imageLoading ? { display: "none" } : {}}
        />
        ){imageLoading && <CircularProgress color="secondary"/>}
      </div>
    ); 
  } else {
    ImageComponent = () => (
      <div
        className={classes.media}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "rgb(200,200,200)",
        }}
      >
        <PetsIcon fontSize={"large"} />
        <span>No Photo Found</span>
      </div>
    );
}
  return (
    <Grid item xs={6} lg={3} style={{ padding: 5 }}>
        <CardActionArea href={Target}>
            <Card className={classes.card}>
                <ImageComponent />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {Description}
                    </Typography>
                </CardContent>
                
            </Card>
        </CardActionArea>
    </Grid>
    
  );
}

export default PetCard;
