import React from 'react';
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate';
import { CreateVantCard } from '../../components/CreateVantCard';

const CreateVant = () => {


  return (
    <AuthenticatedTemplate active='Novo Drone'>
        <CreateVantCard />
    </AuthenticatedTemplate>

  );
}

export { CreateVant };