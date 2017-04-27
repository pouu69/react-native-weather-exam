import * as navigationActions from './navigation';
import * as dustActions from './dust';
import * as viewActions from './views';

export default { ...dustActions, ...navigationActions , ...viewActions};
