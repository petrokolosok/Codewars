function spongeMeme(sen) {
  return sen.replace(/./g, (k, i) => i % 2 == 0 ? k.toUpperCase() : k.toLowerCase());
}
console.log(spongeMeme(sen));