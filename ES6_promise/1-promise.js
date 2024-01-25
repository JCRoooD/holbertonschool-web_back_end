function getFullResponseFromAPI(success){
  return new Promise((resolve, reject) => {
    if (success) {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'Success' })
    } else {
      console.error('The fake API is not working currently')
      reject(new Error());
    }
  });
}

export default getFullResponseFromAPI;
