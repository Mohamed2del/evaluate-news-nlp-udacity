function submitButton(event) {
  event.preventDefault();
  const getLocalHost = 'http://localhost:8080/article';
  fetch(getLocalHost)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      document.getElementsById(submitButtonResults).innerHtML = JSON.stringify(
        response
      );
    });
}
export { submitButton };
