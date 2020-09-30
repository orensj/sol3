import React, {FC} from 'react';
import {FiWifiOff, FiWifi} from 'react-icons/fi';
import {GiStopSign} from 'react-icons/gi';
import {FaPython} from 'react-icons/fa'
import {makeStyles, createStyles} from '@material-ui/core/styles/';
import {useAIStatusQuery} from '../../graphql/queries/ai-status';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(
  createStyles({
    fab: {
      zIndex: 10,

    },
  })
);
const getIcon = (desc: string)=>{
  if(desc.indexOf('not') >= 0){
      return <FiWifiOff/>
  }
  if(desc.indexOf('py') >= 0){
    return <GiStopSign style={{color: 'red'}}/>
  }
  if(desc.indexOf('working') >= 0){
    return <FiWifi/>
  }
  return <></>
}


const AIStatus: FC<{}> = () => {
  const {fab} = useStyles();

  const {data} = useAIStatusQuery();

  return (
    <Tooltip title={ data && data.challenge3AiStatus ? data.challenge3AiStatus : ''}>
       <IconButton
      className={fab}
      color="inherit"
      aria-label="fab"
      >{
        data && getIcon(data.challenge3AiStatus)
      }
    </IconButton>
    </Tooltip>
   
  );
};

export default AIStatus;
