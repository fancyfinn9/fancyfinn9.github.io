document.getElementById('pgfooter').innerHTML ='<div class="wrapper"><div id="footer"><div class="footbox"><h2>Random Quote</h2><ul><p id="quote">"Randomness is never a good idea" - fancyfinn9</p></ul></div><div class="footbox"><h2>Webring</h2><ul><p>We proudly support the <a href="http://pkmncollectors.online" target="_blank" style="color:#A3443E">Pkmncollectors.online</a> webring! Definitely check out the ring below.</p><div style="height:32px;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:end;gap:0.4em" id="ring"><a href="http://pkmncollectors.online/prev.php?id=0" title="Previous site">&#8656;&nbsp;</a><a href="http://pkmncollectors.online/rand.php?id=0" title="Random site">?&nbsp;</a><a href="http://pkmncollectors.online"><img src="http://pkmncollectors.online/03.gif" width="32"height="32" alt="pkmnCollectors.Online Webring" title="PkmnCollectors.Online"></a><a href="http://pkmncollectors.online/list.php?id=0" title="Site list">&nbsp;!</a><a href="http://pkmncollectors.online/next.php?id=0" title="Next site">&nbsp;&#8658;</a></div></ul></div><div class="footbox"><h2>Some random links</h2><ul><li><a href="#" id="rl1">Lorem ipsum dolor</a></li><li><a href="#" id="rl2">Suspendisse in neque</a></li><li><a href="#" id="rl3">Praesent et eros</a></li><li><a href="#" id="rl4">Lorem ipsum dolor</a></li><li class="last"><a href="#" id="rl5">Suspendisse in neque</a></li></ul></div><div class="footbox last"><h2>Keep In Touch</h2> <ul><li><a href="#">Discord</a></li><li><a href="https://donphan.social/@fancyfinn9" target="_blank">Mastodon</a></li><li><a href="https://github.com/fancyfinn9" target="_blank">GitHub</a></li><li><a href="https://www.chess.com/member/fancyfinn9" target="_blank">Chess.com</a></li><li class="last"><a href="#">Email</a></li></ul></div><br class="clear" /></div></div><!-- ####################################################################################################### --><div class="wrapper"><div id="copyright"><p class="fl_left">Copyright &copy; 2023 fancyfinn9</p><p class="fl_right">Design by <span title="I\'d put a link here but their website no longer exists">OS Templates</span></p><br class="clear" /></div></div>';

// Random subtitle (at top of page)
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
r.push("Trainee Pok&#233;mon Professor");
r.push("FATAL ERROR: API responded with HTTP code 418");
r.push("...");
r.push("Pok&#233;mon nerd");
r.push("Writer dude");
r.push("*crowd applauds*");
r.push("Now available in Australia!");
r.push("Lowest-rated MKW Lounge player");

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
r = shuffle(r);
var i = Math.floor(r.length*Math.random());
document.getElementById('ticker').innerHTML = r[i];

// Random quote (footer)
var q = new Array ();
q.push("It's not a bug&#59; it's an undocumented feature. - Anonymous");
q.push("Hi, I'm Magnus Carlsen. - Magnus Carlsen");
q.push("Code is like humor. When you have to explain it, it's bad. - Cory House");
q.push("Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it. - Ellen Ullman");
q.push("Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Linus Torvalds");
q.push("When you see a good move, look for a better one - Emanuel Lasker");
q.push("All I want to do, ever, is just play Chess - Bobby Fischer");
q.push("Unfortunately I'm still not a fashion expert. - Magnus Carlsen");
q.push("I've run out of quotes. - fancyfinn9");

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
q = shuffle(q);
var i = Math.floor(q.length*Math.random());
document.getElementById('quote').innerHTML = q[i];

function remove(item, array) {
  var index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Random links (footer)
var l = new Array ();
l.push('<a href="https://google.ie" target="_blank">Google (the best search engine)</a>');
l.push('<a href="https://wiimmfi.de" target="_blank">Wiimmfi (play Wii games online again)</a>');
l.push('<a href="https://replit.com/@fancyfinn9" target="_blank">Replit (code from your browser)</a>');
l.push('<a href="https://chess.com/members/fancyfinn9" target="_blank">Chess.com (play chess online)</a>');
l.push('<a href="https://lichess.org/@/fancyfinn9" target="_blank">Lichess (play chess online)</a>');
l.push('<a href="https://fancyfinn9.github.io" target="_blank">This page (because why not?)</a>');
l.push('<a href="https://donphan.social/@fancyfinn9" target="_blank">donphan.social (the best Mastodon instance)</a>');
l.push('<a href="https://github.com/fancyfinn9" target="_blank">GitHub (if you\'re a programmer you should already know this)</a>');
l.push('<a href="https://pokemonaaah.net/" target="_blank">Pok&#233;mon Aaah! (best Pok&#233;mon site)</a>');

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {randomIndex = Math.floor(Math.random() * currentIndex);currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];}return array;}
it = 1;
while (it<7) {l = shuffle(l);var i = Math.floor(l.length*Math.random());document.getElementById('rl'+it).innerHTML = l[i];it++;l = remove(l[i], l);}