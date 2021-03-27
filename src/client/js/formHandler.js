function handleSubmit(event) {
  event.preventDefault();

  // get the url from the form using DOM
  let formText = document.getElementById('url').value;

  // make sure the url is real url to avoid fakes requests
  handlePost('http://localhost:8081/article', { url: formText }).then(function (
    res
  ) {
    // minuplate DOM to display values from the respone
    document.getElementById('polarityTag').innerHTML =
      'Polarity: ' + apihandle(res.score_tag);
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

const handlePost = async (url = '', data = {}) => {
  console.log('working on it:', data);
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
    console.log('Data is coming:', data);
    return data;
  } catch (error) {
    console.log('error', error);
  }
};

// API response output (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)
const apihandle = (score) => {
  let show;
  switch (score) {
    case 'P+':
      show = 'P+';
      break;
    case 'P':
      show = 'P';
      break;
    case 'NEW':
      show = 'neutral';
      break;
    case 'N':
      show = 'normal negative';
      break;
    case 'N+':
      show = ' negative + ';
      break;
    case 'NONE':
      show = 'none';
  }
  return show.toUpperCase();
};

export { handleSubmit };
export { apihandle };
