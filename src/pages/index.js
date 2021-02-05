import React from 'react';
import Button from '@material-ui/core/Button';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="WarehouseApp">
      <h1>Clone youtube com Next.js</h1>
      <Button href="/teste" variant="contained" size="small" color="primary">
        Small
      </Button>
    </Layout>
  );
}
