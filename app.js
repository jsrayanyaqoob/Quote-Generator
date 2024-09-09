// Quote Generator



function generateQuote() {
        
    var randomNum = Math.floor(Math.random() * 25) + 1;
    

    var quote = "";

   
    if(randomNum === 1) {
        quote = "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion";
    } else if(randomNum === 2) {
        quote = "In the end, we will remember not the words of our enemies, but the silence of our friends.";
    } else if(randomNum === 3) {
        quote = "Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there.";
    } else if(randomNum === 4) {
        quote = "Man suffers only because he takes seriously what the gods made for fun.";
    } else if(randomNum === 5) {
        quote = "You have power over your mind—not outside events. Realize this, and you will find strength.";
    } else if(randomNum === 6) {
        quote = "The wound is the place where the light enters you."
    } else if(randomNum === 7) {
        quote = "It is not length of life, but depth of life."
    } else if(randomNum === 8) {
        quote = "To live is the rarest thing in the world. Most people exist, that is all"
    } else if(randomNum === 9) {
        quote = "You are the universe, experiencing itself"
    } else if(randomNum === 10) {
        quote = "Life is not a problem to be solved, but a reality to be experienced."
    } else if(randomNum === 11) {
        quote = "He who has a why to live can bear almost any how."
    } else if(randomNum === 12) {
        quote = "We suffer more often in imagination than in reality."
    } else if(randomNum === 13) {
        quote = "It is not what you look at that matters, it's what you see."
    } else if(randomNum === 14) {
        quote = "We do not see things as they are, we see them as we are."
    } else if(randomNum === 15) {
        quote = "I am not what happened to me, I am what I choose to become."
    } else if(randomNum === 16) {
        quote = "You are not a drop in the ocean. You are the entire ocean in a drop."
    } else if(randomNum === 17) {
        quote = "You are the universe, expressing itself as a human for a little while."
    } else if(randomNum === 18) {
        quote = "One is never afraid of the unknown; one is afraid of the known coming to an end."
    } else if(randomNum === 19) {
        quote = "I am the wisest man alive, for I know one thing, and that is that I know nothing."
    } else if(randomNum === 20) {
        quote = "The real question is not whether life exists after death. The real question is whether you are alive before death."
    } else if(randomNum === 21) {
        quote = "The mind is not a vessel to be filled, but a fire to be kindled."
    } else if(randomNum === 22) {
        quote = "The universe is not in a place. It is a story. And you are a story within a story."
    } else if(randomNum === 23) {
        quote = "Perhaps the world is not the world at all, but only a reflection of the infinite possibilities within your own mind."
    } else if(randomNum === 24) {
        quote = "I am the infinite wrapped in the finite."
    } else if(randomNum === 25) {
        quote = "Everything is nothing, with a twist."
    } 

    // Display the quote in the paragraph with id 'quotes'
    document.querySelector("#quotes").innerHTML = quote;
}