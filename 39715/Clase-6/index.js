function getRandomInt(min, max) {
    let result = Math.random() * (max - min) + min;
    console.log(result);
  }

  getRandomInt(0, 20);

  let object = {};

  for(let i = 0; i <= 10000; i++) {
    const randomNumber = Math.floor(Math.random() * 20 + 1);

    if(!object[randomNumber]) object[randomNumber] = 1;
    else object[randomNumber]++;
  }

  console.log(object);