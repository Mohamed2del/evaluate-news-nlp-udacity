function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('url').value;

  if (Client.checkForURL(formText)) {
    postData('http://localhost:8081/article', { url: formText }).then(function (
      res
    ) {
      document.getElementById('polarity').innerHTML =
        'Polarity: ' + apihandle(res.score_tag);
      document.getElementById(
        'agreement'
      ).innerHTML = `Agreement: ${res.agreement}`;
      document.getElementById(
        'subjectivity'
      ).innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById(
        'confidence'
      ).innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
    });
  } else {
    alert('Seems like an invalid URL, please try with a valid URL.');
  }
}

const postData = async (url = '', data = {}) => {
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
