import axios from "axios";

export default function handler(req, res) {
  if( req.method === 'POST') {
    const { name,email,info } = req.body
    const options = {
      method: 'POST',
      url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
      },
      data: `{
        "personalizations":[
          {
            "to":[{"email":"ejeiokekeemmanuel@gmail.com"}],
            "subject":"${name}. Contact message from Website."}],
            "from":{"email":"${email}"},
            "content":[{"type":"text/plain",
            "value":"${info}"
          }
        ]}`
    };
  
  
    axios.request(options).then(function (response) {
      console.log(response.data, "Email sent")
      res.status(200).json("Email sent succesfully")
    }).catch(function (error) {
      res.status(500).json(error.message)
    });
  
  } 
  else {
    res.status(403).json("Method Not allowed")
  }
}
