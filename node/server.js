const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5501;

//MiddleWare to be able to use my html static file
app.use(express.static('node'));
app.use(bodyParser.urlencoded({ extended: true })); // Use URL-encoded body parser


app.get('/car', (req, res) => {
  res.sendFile(__dirname + '/node/car/car.html');
})
 
app.get('/boat', (req, res) => {
  res.sendFile(__dirname + '/node/boat/boat.html');
})

app.get('/health', (req, res) => {
  res.sendFile(__dirname + '/node/health/health.html');
})

app.get('/house', (req, res) => {
  res.sendFile(__dirname + '/node/house/house.html');
})


function difHTML(html){

  app.post(html, (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'luislahens123@gmail.com',
        pass: 'tues bgvb mfqs zlqz'
      }
    })

    const mailOptions = {
      from: req.body.email,
      to: 'lululala12305@gmail.com',
      subject: `New Insurance Inquiry (${req.body.email})`,
      text: `Possible Customer: \n${req.body.fname} Email:${req.body.email} \nPhone Number: ${req.body.number} \nInsurance Type: ${req.body.insurancesTypes}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        console.log(error);
      }else{
        console.log('Email sent.')
        res.send('Sucess');
      }
    })
  })
}
difHTML('/car')
difHTML('/boat')
difHTML('/health')
difHTML('/house')



app.listen(PORT, () => {
  console.log('Server is running on ' + PORT);
})