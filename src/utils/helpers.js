import axios from 'axios';

function getWorkCard(){
  let address = `https://raw.githubusercontent.com/mengmeng183/demodata/master/Card.json`
  return axios.get(address)
    .then((res) => (
      { getData:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
export {getWorkCard};
