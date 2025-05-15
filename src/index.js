const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');


const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8000;
const limiter =  rateLimit({
    max : 100,
    windows : 15*60*1000, // 15 minutes
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(limiter);

app.use('/user',router)

router.get('/health-check', (req,res)=>{
    res.send('Apis is running fine')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})