import { types } from 'mobx-state-tree';

const Profile = types.model('Profile', {
  version: types.literal('1'),
});

export default Profile;
