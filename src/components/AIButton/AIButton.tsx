import { useToggleAdoptionAI } from '../../graphql/mutations/toggle-adoption-ai';
import React, { FC } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { makeStyles, createStyles } from '@material-ui/core/styles/';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(
  createStyles({
    fab: {
      zIndex: 10,

    },
  })
);

const AIButton: FC<{}> = () => {
  const { fab } = useStyles();

  const [toggleAdoptionAI] = useToggleAdoptionAI();

  const onToggleClick = () => {
    toggleAdoptionAI();
  };

  return (
    <Tooltip title="activate/deactivate AI">
      <IconButton className={fab}
        aria-label="fab"
        color="inherit"
        onClick={onToggleClick}>
        <IoMdSettings />
      </IconButton>
    </Tooltip>);
};

export default AIButton;
