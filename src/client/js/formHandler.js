function handleSubmit(event) {
  event.preventDefault();

  // get the url from the form using DOM
  let formUrl = document.getElementById('url').value;

  // make sure the url is real url to avoid fakes requests
  postReq('http://localhost:8081/article', { url: formUrl }).then(function (
    res
  ) {
    // minuplate DOM to display values from the respone
    document.getElementById('polarityTag').innerHTML =
      'Polarity: ' + $(res.score_tag);
    document.getElementById(
      'agreementTag'
    ).innerHTML = `Agreement: ${res.agreement}`;
    document.getElementById(
      'subjectivityTag'
    ).innerHTML = `Subjectivity: ${res.subjectivity}`;
    document.getElementById(
      'confidenceTag'
    ).innerHTML = `Confidence: ${res.confidence}`;
    document.getElementById('ironyTag').innerHTML = `Irony: ${res.irony}`;
  });
}

const postReq = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('error', err);
  }
};

export { handleSubmit };
