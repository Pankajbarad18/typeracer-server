const axios = require('axios');

const getSentence = async () => {
    const sentanceData = await axios.get("https://api.quotable.io/random"); 
    return sentanceData.data.content.split(' ');
}

module.exports = getSentence;