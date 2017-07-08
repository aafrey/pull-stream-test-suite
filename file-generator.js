const fs = require('fs')
const file = fs.createWriteStream('./big.file')
const text =
"Oh, I sure like her, Marty, she is such a sweet girl. Isn't tonight the night of the big date?\n \
Well, now we gotta sneak this back into my laboratory, we've gotta get you home. Where were we.\n \
Biff. It's taken me almost thirty years and my entire family fortune to realize the vision of \n \
that day, my god has it been that long. Things have certainly changed around here. I remember when\n \
this was all farmland as far as the eye could see. Old man Peabody, owned all of this. He had this\n \
crazy idea about breeding pine trees. C'mon. That was so stupid, Grandpa hit him with the car. \n \
Thank god I still got my hair. What on Earth is that thing I'm wearing? Roads? Where we're going we\n \
don't need roads. Oh hey, Biff, hey, guys, how are you doing? God dammit, I'm late. Look me up when\n \
you get there, guess I'll be about 47. Jesus, George, it's a wonder I was ever born. Okay, real \n \
mature guys. Okay, Biff, will you pick up my books? Hello.\n"

for (let i = 0; i < 1e6; i++)
  file.write(text)

file.end()

