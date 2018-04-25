import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onPost('/api/auth').reply(200, {
  user: { id: 1, name: 'Paul Stepanenko' }
});

mock.onGet('/api/data').reply(200, {
  id: 1, name: 'Test Data'
});

export default {
    user: {
        login: credentials =>
              axios.post('/api/auth').then(res => res.data.user),
        getData: () => axios.get('/api/data').then(res => res.data),
    }
};
