export default function parseErrors(error) {
  //check if this is validation error

  if (error?.response?.data?.error?.name === 'ValidationError') {
    return {
      message: error.response.data.error.message,
      details: error.response.data.error.details.errors,
    };
  }

  if (error?.message === 'NetworkError') {
    return {
      message: 'Unable to connect to the server endpoint provided',
      details: [],
    };
  }

  if (error?.response?.status === 403) {
    return {
      message: 'Your role does not have access to the chosen pathway',
      details: [],
    };
  }

  return {
    message: 'Contact Support',
    details: [],
  };
}
