
export const submitUserAction = (data) => {
   return dispatch => {
      postAPI(dispatch, data)
   }
}

export const postAPI = (dispatch, data) =>{
   let url = "http://localhost:8080/usuario"
   fetch(url, {
      method: "POST",
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
   })
       .then(response => response.json())
       .then(json => successPostAPI(dispatch, json))
}

export const successPostAPI = (dispatch, response) =>{
   dispatch({type:'USER_REQUEST_SUBMIT', payload:true})
}
