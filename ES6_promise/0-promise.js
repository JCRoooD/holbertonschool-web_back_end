#!/usr/bin/node
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Promise is OK');
    reject(new Error());
  });
}
