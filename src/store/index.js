import { init } from '@rematch/core';

import * as models from './models/badge/badge'
import packages from './models/packages/packages'
import users from './models/users/users'


const store = init({
  models
});

export default store;
