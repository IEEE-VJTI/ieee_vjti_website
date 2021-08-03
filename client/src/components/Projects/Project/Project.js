import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {deleteProject,getProjects} from '../../../actions/projects';
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const Project = ({ project, setCurrentId }) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const location = useLocation();
  
  const delete_an_project=()=>{
      if(window.confirm("Are you sure you want to delete this post? "))
       {
         dispatch(deleteProject(project._id));
         dispatch(getProjects());
         window.alert("Event deleted successfully!");
       }
    }

//   const openPost = (e) => {
//     // dispatch(getPost(post._id, history));

//     history.push(`/events/${event._id}`);
//   };

  return (

      <Card className={classes.card} raised elevation={6} >     
            <div className={classes.details}>
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                >
                    {project.title}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {project.year}
                </Typography>
              </CardContent>
            </div>
        
            <Typography
              className={classes.project_desc}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {project.project_desc}
            </Typography>
            
          {/* </ButtonBase> */}
          { admin?.result && (location.pathname ==='/dashboard/projects')?(
        <div>
          <Button onClick={() => {setCurrentId(project._id); window.scrollTo(0,0);}} style={{ color: 'black' }} size="small">
            EDIT
          </Button>
            &nbsp; &nbsp;
            <Button size="small" color="secondary" onClick={delete_an_project}>
            DELETE
          </Button>
        </div>):null}
           
      </Card>
  );
};

export default Project;