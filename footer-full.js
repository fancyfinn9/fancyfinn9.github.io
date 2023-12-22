document.getElementById('pgfooter').innerHTML ='<div class="wrapper"><div id="footer"><div class="latestgallery"><h2>Latest Projects</h2><ul><li><a href="#"><img src="images/demo/80x80.gif" alt="" /></a></li><li><a href="#"><img src="images/demo/80x80.gif" alt="" /></a></li><li><a href="#"><img src="images/demo/80x80.gif" alt="" /></a></li><li class="last"><a href="#"><img src="images/demo/80x80.gif" alt="" /></a></li><li><a href="#"><img src="images/demo/80x80.gif" alt="" /></a></li><li><a href="#"><img src="images/demo/80x80.gif" alt="" /></a></li><li><a href="#"><img src="images/demo/80x80.gif" alt="" /></a></li><li class="last"><a href="#"><img src="images/demo/80x80.gif" alt="" /></a></li></ul></div><div class="footbox"><h2>Latest From The Blog</h2><ul><li><a href="#">Lorem ipsum dolor</a></li><li><a href="#">Suspendisse in neque</a></li><li><a href="#">Praesent et eros</a></li><li><a href="#">Lorem ipsum dolor</a></li><li><a href="#">Suspendisse in neque</a></li><li class="last"><a href="#">Praesent et eros</a></li></ul></div><div class="footbox last"><h2>Keep In Touch</h2> <ul><li><a href="#">Discord</a></li><li><a href="https://donphan.social/@fancyfinn9" target="_blank">Mastodon</a></li><li><a href="https://github.com/fancyfinn9" target="_blank">GitHub</a></li><li><a href="https://www.chess.com/member/fancyfinn9" target="_blank">Chess.com</a></li><li><a href="#">Email</a></li><li class="last"><a href="#">Sub-Etha</a></li></ul></div><br class="clear" /></div></div><!-- ####################################################################################################### --><div class="wrapper"><div id="copyright"><p class="fl_left">Copyright &copy; 2023 fancyfinn9</p><p class="fl_right">Design by <a href="http://www.os-templates.com/" title="Free Website Templates" target="_blank">OS Templates</a></p><br class="clear" /></div></div>';

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
r.push("Only &euro;99.99!");

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