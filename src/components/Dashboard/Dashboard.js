import React from 'react';

export default class Dashboard extends React.Component {
    //A variant to be used for token validation
    /*useEffect(() => {
        axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
      })
    function redirectToLogin() {
    	props.history.push('/login');
    }*/
  render() {
    return (
      <div>USERS</div>
    );
  }
}