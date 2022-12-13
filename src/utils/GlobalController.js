import { PermissionsAndroid } from 'react-native';
import { PERMISSIONS } from './constant';

const GlobalController = {
  requestCameraPermission: async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        PERMISSIONS.map(p => p.name),
      );
      return PERMISSIONS.map(p => ({ ...p, status: granted[p.name] }));
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default GlobalController;
