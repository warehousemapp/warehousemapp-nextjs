import React from 'react';
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div>
      Clone youtube com Next.js + Material-UI
      <Button variant="contained" size="small" color="primary">
        Small
      </Button>
      <Button variant="contained" size="medium" color="primary">
        Medium
      </Button>
      <Button variant="contained" size="large" color="primary">
        Large
      </Button>
    </div>
  );
}
