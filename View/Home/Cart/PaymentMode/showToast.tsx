import { ToastAndroid, Platform } from 'react-native';

export const showToast = (message: string, duration = ToastAndroid.LONG) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, duration);
  }
};