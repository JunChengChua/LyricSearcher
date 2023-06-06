const request = require('request');
const cheerio = require('cheerio');

const $  = cheerio.load('<pre id="lyric-body-text" class="lyric-body wselect-cnt" dir="ltr" data-lang="en">Let\'s go dancing, far into the galaxy, fly to the moon and then to me\n' +
    'I\'ll <a style="color:#222;" href="https://www.definitions.net/definition/light">light</a> up Pluto, Venus, Mars, and <a style="color:#222;" href="https://www.definitions.net/definition/Mercury">Mercury</a> before I <a style="color:#222;" href="https://www.definitions.net/definition/think">think</a> to leave\n' +
    'I\'ll get a one way <a style="color:#222;" href="https://www.definitions.net/definition/ticket">ticket</a> out into the cosmos, <a style="color:#222;" href="https://www.definitions.net/definition/leaving">leaving</a> behind the <a style="color:#222;" href="https://www.definitions.net/definition/milky">milky</a> way\n' +
    'Picking a star to take me far to <a style="color:#222;" href="https://www.definitions.net/definition/where">where</a> I <a style="color:#222;" href="https://www.definitions.net/definition/wanna">wanna</a> be, <a style="color:#222;" href="https://www.definitions.net/definition/riding">riding</a> on the rays\n' +
    '\n' +
    'And if you come with me we <a style="color:#222;" href="https://www.definitions.net/definition/could">could</a> go <a style="color:#222;" href="https://www.definitions.net/definition/explore">explore</a> each constellation\n' +
    'See the universe, <a style="color:#222;" href="https://www.definitions.net/definition/explore">explore</a> an <a style="color:#222;" href="https://www.definitions.net/definition/alien">alien</a> space station\n' +
    'Flying high <a style="color:#222;" href="https://www.definitions.net/definition/above">above</a> the night, <a style="color:#222;" href="https://www.definitions.net/definition/watching">watching</a> our <a style="color:#222;" href="https://www.definitions.net/definition/planet">planet</a> as it spins\n' +
    'I have hope that you\'ll <a style="color:#222;" href="https://www.definitions.net/definition/follow">follow</a> me but I <a style="color:#222;" href="https://www.definitions.net/definition/start">start</a> to <a style="color:#222;" href="https://www.definitions.net/definition/wonder">wonder</a> if\n' +
    '\n' +
    'It\'s yes or no?\n' +
    'Won\'t you come along? The look in your eyes says take me with\n' +
    'Let me know, what will it be? (So, what will it be?)\n' +
    'Come <a style="color:#222;" href="https://www.definitions.net/definition/escape">escape</a> with me and you can see\n' +
    'Space, <a style="color:#222;" href="https://www.definitions.net/definition/right">right</a> here by my side, the <a style="color:#222;" href="https://www.definitions.net/definition/summer">summer</a> triangle <a style="color:#222;" href="https://www.definitions.net/definition/guiding">guiding</a> us\n' +
    'And that\'s when I hear you say (When I hear you say) \n' +
    'That if only for today\n' +
    '"Let\'s <a style="color:#222;" href="https://www.definitions.net/definition/dance">dance</a> through the stars"\n' +
    '\n' +
    'Let\'s go <a style="color:#222;" href="https://www.definitions.net/definition/dancing">dancing</a> far into the galaxy, take my hand as we fly away\n' +
    'We\'ll pave the road we\'re taking, no need for a <a style="color:#222;" href="https://www.definitions.net/definition/guide">guide</a> to take us on our way\n' +
    'Giving the <a style="color:#222;" href="https://www.definitions.net/definition/passing">passing</a> planets <a style="color:#222;" href="https://www.definitions.net/definition/names">names</a> like "Aristotle, Rogue," and all <a style="color:#222;" href="https://www.definitions.net/definition/kinds">kinds</a> of <a style="color:#222;" href="https://www.definitions.net/definition/silly">silly</a> things\n' +
    'We\'re <a style="color:#222;" href="https://www.definitions.net/definition/finding">finding</a> faces in the <a style="color:#222;" href="https://www.definitions.net/definition/meteors">meteors</a> that fly by, they\'ve no time to stay\n' +
    '\n' +
    'It\'s like it\'s <a style="color:#222;" href="https://www.definitions.net/definition/meant">meant</a> to be, <a style="color:#222;" href="https://www.definitions.net/definition/following">following</a> the path that our <a style="color:#222;" href="https://www.definitions.net/definition/starlight">starlight</a> had shown\n' +
    'Hand in hand we fly to what\'s <a style="color:#222;" href="https://www.definitions.net/definition/beyond">beyond</a> all we\'ve ever known\n' +
    'Your face <a style="color:#222;" href="https://www.definitions.net/definition/illuminates">illuminates</a> all the dark <a style="color:#222;" href="https://www.definitions.net/definition/empty">empty</a> space around\n' +
    'Shining bright, <a style="color:#222;" href="https://www.definitions.net/definition/second">second</a> to the sun, and I <a style="color:#222;" href="https://www.definitions.net/definition/start">start</a> to <a style="color:#222;" href="https://www.definitions.net/definition/wonder">wonder</a> if\n' +
    '\n' +
    'This <a style="color:#222;" href="https://www.definitions.net/definition/might">might</a> be love, we\'re <a style="color:#222;" href="https://www.definitions.net/definition/soaring">soaring</a> the skies, <a style="color:#222;" href="https://www.definitions.net/definition/exploring">exploring</a> unknown far, far away\n' +
    'We\'ve <a style="color:#222;" href="https://www.definitions.net/definition/adapted">adapted</a> here to this (\'dapted here to this) \n' +
    'Intergalactic reality\n' +
    'Yet, you\'re here by my side, <a style="color:#222;" href="https://www.definitions.net/definition/traveling">traveling</a> through this nebula\n' +
    'Shining <a style="color:#222;" href="https://www.definitions.net/definition/brighter">brighter</a> than the moon (brighter than the moon)\n' +
    'I can\'t speak, but I want to...\n' +
    '"I\'m in love with you"\n' +
    '\n' +
    'Next to me, I can see your eyes that land upon the night\n' +
    'Sweeping over me, I see the <a style="color:#222;" href="https://www.definitions.net/definition/ending">ending</a> of our journey\n' +
    'Let\'s head back, I was <a style="color:#222;" href="https://www.definitions.net/definition/right">right</a> in that there\'s no way that gaze was for me\n' +
    'Then as I <a style="color:#222;" href="https://www.definitions.net/definition/prepare">prepare</a> to head back, I feel <a style="color:#222;" href="https://www.definitions.net/definition/someone">someone</a> grab my hand\n' +
    '\n' +
    'You look at me <a style="color:#222;" href="https://www.definitions.net/definition/despite">despite</a> all the stars, <a style="color:#222;" href="https://www.definitions.net/definition/despite">despite</a> all the <a style="color:#222;" href="https://www.definitions.net/definition/moondust">moondust</a> in my hair\n' +
    'Then you <a style="color:#222;" href="https://www.definitions.net/definition/smiled">smiled</a> at me and said (smiled at me and said) \n' +
    '"Let\'s <a style="color:#222;" href="https://www.definitions.net/definition/continue">continue</a> on this odyssey"\n' +
    'So, with <a style="color:#222;" href="https://www.definitions.net/definition/stars">stars</a> in our eyes, let\'s fly <a style="color:#222;" href="https://www.definitions.net/definition/through">through</a> the <a style="color:#222;" href="https://www.definitions.net/definition/glowing">glowing</a> galaxies\n' +
    'Taking on a <a style="color:#222;" href="https://www.definitions.net/definition/world">world</a> so new (on a <a style="color:#222;" href="https://www.definitions.net/definition/world">world</a> so new) \n' +
    'And I\'m glad that it\'s with you\n' +
    'We\'re <a style="color:#222;" href="https://www.definitions.net/definition/dancing">dancing</a> through space\n' +
    '\n' +
    'This is all so new (This is all so new) \n' +
    'I hope you can feel it too\n' +
    'I\'m in love with you</pre>');


var lyric =  $('pre#lyric-body-text').text();
console.log(typeof(lyric));


function setLyrics() {
    var song = document.getElementById('song');
    var artist = document.getElementById('artist');

    var lyrics = document.getElementById('lyrics');

    lyrics.value = lyric;
}
