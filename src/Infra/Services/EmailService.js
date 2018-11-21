// const mailgun = require('mailgun.js');
// const mg = mailgun.client({
//   username: 'api',
//   key: process.env.MAILGUN_API_KEY || '',
// });


const send = (body) => {
  // mg.messages.create('sandbox3339498d99bd4c6cb1455103ebc69d9a.mailgun.org', {
  //   from: 'email@nazarenonatal.com.br',
  //   to: ['wescleymatos@ymail.com'],
  //   subject: 'Hello',
  //   text: 'Testing some Mailgun awesomness!',
  //   html: `<h1>${body}</h1>`
  // })
  // .then(msg => console.log(msg))
  // .catch(err => console.log(err));
  // eslint-disable-next-line no-console
  console.log(body);
};

module.exports = {
  send
};
