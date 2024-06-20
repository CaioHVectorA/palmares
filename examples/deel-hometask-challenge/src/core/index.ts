import { ExtractCommandsType, domain } from '@palmares/core';
import { Profile } from '../auth/models';
import { Contract } from '../contracts/models';
import { Jobs } from '../jobs/models';
import { path, serverDomainModifier, Response } from '@palmares/server';


export default domain('core', __dirname, {
  modifiers: [serverDomainModifier],
  getRoutes: () => path('/error').get(async (req) => {
    return Response.html('<h1>Internal server error</h1>');
  }),
  commands: {
    seedDb: {
      description: 'Seed the database with some data. Used for testing.',
      keywordArgs: undefined,
      positionalArgs: undefined,
      handler: async () => {
        console.log('Seeding the database...');
        await Profile.default.set({
          id: 1,
          firstName: 'Harry',
          lastName: 'Potter',
          profession: 'Wizard',
          balance: 1150,
          type: 'client',
        });
        await Promise.all([
          Profile.default.set({
            id: 2,
            firstName: 'Mr',
            lastName: 'Robot',
            profession: 'Hacker',
            balance: 231.11,
            type: 'client',
          }),
          Profile.default.set({
            id: 3,
            firstName: 'John',
            lastName: 'Snow',
            profession: 'Knows nothing',
            balance: 451.3,
            type: 'client',
          }),
          Profile.default.set({
            id: 4,
            firstName: 'Ash',
            lastName: 'Kethcum',
            profession: 'Pokemon master',
            balance: 1.3,
            type: 'client',
          }),
          Profile.default.set({
            id: 5,
            firstName: 'John',
            lastName: 'Lenon',
            profession: 'Musician',
            balance: 64,
            type: 'contractor',
          }),
          Profile.default.set({
            id: 6,
            firstName: 'Linus',
            lastName: 'Torvalds',
            profession: 'Programmer',
            balance: 1214,
            type: 'contractor',
          }),
          Profile.default.set({
            id: 7,
            firstName: 'Alan',
            lastName: 'Turing',
            profession: 'Programmer',
            balance: 22,
            type: 'contractor',
          }),
          Profile.default.set({
            id: 8,
            firstName: 'Aragorn',
            lastName: 'II Elessar Telcontarvalds',
            profession: 'Fighter',
            balance: 314,
            type: 'contractor',
          }),
          Contract.default.set({
            id: 1,
            terms: 'bla bla bla',
            status: 'terminated',
            clientId: 1,
            contractorId: 5,
          }),
          Contract.default.set({
            id: 2,
            terms: 'bla bla bla',
            status: 'in_progress',
            clientId: 1,
            contractorId: 6,
          }),
          Contract.default.set({
            id: 3,
            terms: 'bla bla bla',
            status: 'in_progress',
            clientId: 2,
            contractorId: 6,
          }),
          Contract.default.set({
            id: 4,
            terms: 'bla bla bla',
            status: 'in_progress',
            clientId: 2,
            contractorId: 7,
          }),
          Contract.default.set({
            id: 5,
            terms: 'bla bla bla',
            status: 'new',
            clientId: 3,
            contractorId: 8,
          }),
          Contract.default.set({
            id: 6,
            terms: 'bla bla bla',
            status: 'in_progress',
            clientId: 3,
            contractorId: 7,
          }),
          Contract.default.set({
            id: 7,
            terms: 'bla bla bla',
            status: 'in_progress',
            clientId: 4,
            contractorId: 7,
          }),
          Contract.default.set({
            id: 8,
            terms: 'bla bla bla',
            status: 'in_progress',
            clientId: 4,
            contractorId: 6,
          }),
          Contract.default.set({
            id: 9,
            terms: 'bla bla bla',
            status: 'in_progress',
            clientId: 4,
            contractorId: 8,
          }),
          Jobs.default.set({
            description: 'work',
            price: 200,
            contractId: 1,
          }),
          Jobs.default.set({
            description: 'work',
            price: 201,
            contractId: 2,
          }),
          Jobs.default.set({
            description: 'work',
            price: 202,
            contractId: 3,
          }),
          Jobs.default.set({
            description: 'work',
            price: 200,
            contractId: 4,
          }),
          Jobs.default.set({
            description: 'work',
            price: 200,
            contractId: 7,
          }),
          Jobs.default.set({
            description: 'work',
            price: 2020,
            paid: true,
            paymentDate: '2020-08-15T19:11:26.737Z',
            contractId: 7,
          }),
          Jobs.default.set({
            description: 'work',
            price: 200,
            paid: true,
            paymentDate: '2020-08-15T19:11:26.737Z',
            contractId: 2,
          }),
          Jobs.default.set({
            description: 'work',
            price: 200,
            paid: true,
            paymentDate: '2020-08-16T19:11:26.737Z',
            contractId: 3,
          }),
          Jobs.default.set({
            description: 'work',
            price: 200,
            paid: true,
            paymentDate: '2020-08-17T19:11:26.737Z',
            contractId: 1,
          }),
          Jobs.default.set({
            description: 'work',
            price: 200,
            paid: true,
            paymentDate: '2020-08-17T19:11:26.737Z',
            contractId: 5,
          }),
          Jobs.default.set({
            description: 'work',
            price: 21,
            paid: true,
            paymentDate: '2020-08-10T19:11:26.737Z',
            contractId: 1,
          }),
          Jobs.default.set({
            description: 'work',
            price: 21,
            paid: true,
            paymentDate: '2020-08-15T19:11:26.737Z',
            contractId: 2,
          }),
          Jobs.default.set({
            description: 'work',
            price: 121,
            paid: true,
            paymentDate: '2020-08-15T19:11:26.737Z',
            contractId: 3,
          }),
          Jobs.default.set({
            description: 'work',
            price: 121,
            paid: true,
            paymentDate: '2020-08-14T23:11:26.737Z',
            contractId: 3,
          }),
        ]);
      },
    },
  },
});
