// lol no sql here

var r = new Array ();
r.push("<b>*trumpet fanfare sounds*</b>");
r.push("THE ONE AND ONLY");
r.push("Squirtle, I choose you!");
r.push('if move == "e4": print("I move "+str(move)+". Your move!")');
r.push("2nd-worst Mario Kart Wii player");
r.push("It's a-me!");
r.push('"Hi, I\'m Magnus Carlsen" - Magnus Carlsen');
r.push("Author of War and Peace 2");
r.push("Traceback (most recent call last):<br>File \"main.py\", line 1, in &#60;module&#62;<br>int(\"hello world\")<br>ValueError: invalid literal for int() with base 10: 'hello world'");
r.push("Have an idea of what I could put here? Fire me a message on Discord!");
r.push("Daisy on Mach Bike &#62; Funky Kong on Flame Runner");
r.push("What do you call a train full of toffee?<br>A chew chew train");
r.push("Trainee Pok&#233;mon Professor");
r.push("FATAL ERROR: API responded with HTTP code 418");

var i = Math.floor(r.length*Math.random());

document.getElementById('ticker').innerHTML = r[i];