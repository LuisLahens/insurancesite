require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); // Fix import statement
const app = express();
const nodemailer = require('nodemailer');

const PORT = 5502;

//MiddleWare to be able to use my html static file
app.use(express.static('node'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/node/home.html');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/node/car/car.html');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/node/boat/boat.html');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/node/health/health.html');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/node/house/house.html');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/node/workerscomp/workers.html');
})


function multiplePosts(html){
  app.post(html, (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'info.vergelinsurance@gmail.com',
        pass: `${process.env.PASS}`
      }
    })

    const mailOptions = {
      from: req.body.email,
      to: 'info.vergelinsurance@gmail.com',
      subject: `New Insurance Inquiry (${req.body.email})`,
      text: `Possible Customer: \n\nCustomers Name: ${req.body.fname} \n\nEmail: ${req.body.email} \n\nPhone Number: ${req.body.number} \n\nInsurance Type: ${req.body.insurancesTypes}`,
    }

    const mailOptions2 = {
      from: req.body.email,
      to: `${req.body.email}`,
      subject: `Thank You For Contacting Vergel Insurance`,
      text: `Hello ${req.body.fname}, \n\nThank you for contacting us! \n\nWe have received all of your information and will have a representative reach out to you shortly. \n\nBest Regards, \nVergel Insurance Agency`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        console.log(error);
      }else{
        console.log('Email sent.')
        res.send('Success');
      }
    })

    transporter.sendMail(mailOptions2, (error, info) => {
      if(error){
        console.log(error);
      }else{
        console.log('Email sent.')
        res.send('Success');
      }
    })
  })
}

multiplePosts('/');
multiplePosts('/');
multiplePosts('/');
multiplePosts('/');
multiplePosts('/');
multiplePosts('/');


app.listen(PORT, () => {
  console.log('Server is running on ' + PORT);
})