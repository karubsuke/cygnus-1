

/* Moralis init code */
const serverUrl = "https://omvfqvcn9c8w.usemoralis.com:2053/server";
const appId = "p18sOxPTHfIPo6rqfaMpEffK3QIwVMpnzq9ee12J";
Moralis.start({ serverUrl, appId });

// let nfts = await Moralis.Web3API.account.getNFTs({chain:"kovan"})
// console.log(nfts)

/* TODO: Add Moralis Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");



}




// let nfts = await Moralis.Web3API.account.getTokenMetadata({chain:"kovan", address:"0xa86a"})

// console.log(nfts)


// Get metadata for one token
// const options = { chain: "eth", addresses: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE" };
// const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata(options);


//Get metadata for an array of tokens
// const options = { chain: "bsc", addresses: ["0xe...556", "0xe...742"] };
// const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata(options);




document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
