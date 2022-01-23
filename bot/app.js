require('dotenv').config()
const { Telegraf } = require('telegraf');
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 3030

const bot = new Telegraf(process.env.TOKEN)

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  console.log(req.body);
  const {name, phone} = req.body

  let msg = `
<b>Name:</b> ${name}
<b>Phone:</b> ${phone}
  `
  try {
    const response = await axios.post(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
      chat_id: 355919981,
      parse_mode: 'html',
      text: msg
    });

    if (response?.status == 200) {
      return res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
    }
    
  } catch (error) {
    console.log('Catch error:', error); 
  }


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




