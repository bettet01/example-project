import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import ProtectedRoute from "../../components/auth/ProtectedRoute";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const LandingLayout = () => {
  const classes = useStyles();
  const themeMode = useSelector((state: RootState) => state.UserReducer.isDarkMode)

  return (
    <div className={classes.root}>
      <TopBar  theme={themeMode} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLayout;