function getMyRandom() {
  return makeid(8) + "-" + makeid(4) + "-" + makeid(4) + "-" + makeid(4) + makeid(12);
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function getEpochInMillisAsString() {
   return (new Date()).getTime() + "";
}

module.exports = {
   getMyRandom : getMyRandom,
   getEpochInMillisAsString : getEpochInMillisAsString
}