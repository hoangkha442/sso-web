import { toast, ToastOptions, Slide } from 'react-toastify';

const useToastify = () => {
  
  const showToast = (message: string, options?: ToastOptions) => {
    toast(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      ...options,
    });
  };

  const showSuccessToast = (message: string, options?: ToastOptions) => {
    showToast(message, { ...options, type: 'success' });
  };

  const showErrorToast = (message: string, options?: ToastOptions) => {
    showToast(message, { ...options, type: 'error' });
  };

  const showInfoToast = (message: string, options?: ToastOptions) => {
    showToast(message, { ...options, type: 'info' });
  };

  const showWarningToast = (message: string, options?: ToastOptions) => {
    showToast(message, { ...options, type: 'warning' });
  };

  return {
    showToast,
    showSuccessToast,
    showErrorToast,
    showInfoToast,
    showWarningToast,
  };
};

export default useToastify;
