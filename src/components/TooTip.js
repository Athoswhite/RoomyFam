import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { brown } from '@mui/material/colors';

const Tooltip =() => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <p variant="contained" {...bindTrigger(popupState)}>
            Monthly Offers
          </p>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2, color: 'purple'}}>No offers this Month</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default Tooltip;