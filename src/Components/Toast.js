import * as Burnt from 'burnt';

const Toast = {
  success: ({ title, message }) => {
    Burnt.toast({
      title,
      preset: 'done',
      message,
      shouldDismissByDrag: true,
      haptic: 'success',
    });
  },
  error: ({ title, message }) => {
    Burnt.toast({
      title,
      preset: 'error',
      message,
      shouldDismissByDrag: true,
      haptic: 'error',
    });
  },
};

export default Toast;
