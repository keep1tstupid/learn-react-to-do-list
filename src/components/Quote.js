import React, { useState }  from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

const Quote = () => {
  const [quote, setQuote] = React.useState({
    text: '',
    author: '',
  });

  React.useEffect(() => {
      fetch("https://type.fit/api/quotes")
        .then(response=>{
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        .then(data=>{
          const i = Math.floor(Math.random() * 100);
          const txt = data[i].text;
          const auth = data[i].author;
          setQuote({
            text: txt,
            author: auth,
          })
        })
        .catch(err=>console.log(err))
    }, []
  );

  return (
    <>
      <Jumbotron fluid className={'mt-3'}>
        <Container>
          <h2>{quote.text}</h2>
          <p>{quote.author}</p>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Quote;
