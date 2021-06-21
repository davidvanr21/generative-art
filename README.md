# Personal Generative Timeline

![alt text](https://github.com/davidvanr21/generative-art/blob/main/readME/curiousIndex.png "Project landing page")

Read my improvements for the resit [here]().

## About
* **Name:** `David van Rumpt`
* **Class:** `vid-1B`
* **Minor:** `Visual Interface Design, Communicaction and Multimedia Design`
* **Favoriete dier:** `as long as it is a combination` [link](https://nl.pinterest.com/Robinhood2000/random-animals/)
* **Start level:** `blue`

## Concept

This project is all about me as a designer. What are my qualities? What kind of projects have I made in the past? You're going to find oyt more about who I am. This project excist out of two pages: 1. Landing page with my qualities as a designer with generated words and interactive hover 2. All of the projects I've made from when I was 8 years old.

## Features

`index.html`
There are two great features on this page. You can move your cursors over the text that is displayed, which will give you a sick effect. Also you can renew the page by clicking on the 🔄 icon. This will give you a new word each time you refresh the page.

`timeline.html`
On this page you can drag the slider which will add more and more circles to the screen.

## Research & inspiration

## Process

In the first two weeks I was busy with getting to know the basics of the P5 Library and refreshing my knowledge about JavaScript. Which I found very hard. JavaScript can do a lot, but it's very hard to know everything about it. Fortunately, that is not necessary. The most important thing is to have a good concept so you can look up some things to realize it and make it work.

I did some exercises to get a feeling of what the possibilities are with P5. Watch all my skecthes in the online webeditor [here](https://editor.p5js.org/davidvanr21/sketches).

![alt text](https://github.com/davidvanr21/generative-art/blob/main/readME/procesGif1.gif "Project landing page")

The first thing that I made was the animation of my name. My name itself excists out of shapes only, so that was a good exercise to . After that, I picked some examples from the P5.js website and changed values to see what happend. And also I started to make a function which allowed me to change words each time I pressed on a button. That didn't go well for a period, but it worked at the end.


### Future Proof

Some things that I had in mind, but didn't work already at the time I finished this project:
- [ ] Centering the words
- [ ] Only refresh the words, not the whole page
- [ ] Generate words from personal database
- [ ] Don't allow the algorithm to generate the same words in a row

## Reflection

My concept was good at the middle of the project. But I could have asked more feedback and help from my teacher and students around me. Because I've made the most important things at the end of the project, I couldn't iterate very good in terms of code. I would love to make the code work even better and put it on my online portfolio.

## Resources

* [Particle effect on text border](https://www.youtube.com/watch?v=4hA7G3gup-4)
* [P5 createSlider](https://p5js.org/reference/#/p5/createSlider)
* [Generated circles](https://www.youtube.com/watch?v=XATr_jdh-44)
* [Source slider.changed()](https://editor.p5js.org/SjorsWijsman/sketches/XlxxDBT8G)

## Install

Dive into the code within your own text editor? You only need to clone this repository. Put this in your terminal:

git clone https://github.com/davidvanr21/generative-art.git

## Second change

Some feedback that I've got after handing in my first trial:
- Remove the timeline
- Make a transition from all the many dots to something like 10 circles for the projects I wanna show > adjust radius (for the scale) + position 
- Place images inside of the circles
- Centering the text > try windowWidth/2 & windowHeight/2
- Rectmode
If I could make the timeline, then:
- Slider from 0 to 30 instead of 300
- Place years inside of the circles
- Show projects from the past 3 years, not 10 years. Too much work

General feedback: ask feedback as much as possible. It will keep you moving and improving.

Future proof 
- API that interests me

Things I've adjusted:
- Removed the timeline
Todo:
- Some colors for extra flavor?
- Animate circles from text into big ones


## Change circle value
So for my new plan I had to change the amount of the circles. When we console.log(points), we can see that each word has his own amount of circles. Which is logic. But we only need 5 of them for when we press on the button. So how can we do that? console.log(points[0]); when i use this code I can pick out one of the elements in the array.


Here are my outwritten thoughts:
- Always pick the first 5 circles of the array and remove the other ones.

Some different kind of options are possible here. So let's see which will work best.

https://love2dev.com/blog/javascript-remove-from-array/

    var ar = [1, 2, 3, 4, 5, 6];
    
    ar.length = 4; // set length to remove elements
    console.log( ar ); // [1, 2, 3, 4]`

I think this will work best

     let points = font.textToPoints(randomword, posX, posY, 130);
    points.length = 4;
    console.log( points );

I tried this. Worked out perfectly. It only showed 4 circles.
    Now I have to make it work only when a button is pressed. Here I could probably use
    something like a onClick() function. Okey nevermind. Apparently that's a no-go. So I think a have to search for a eventListener.

- So I removed the link I used. And added a button. Otherwise the eventListener won't work.
- Added the following code to try and change the length of the array:

     let button = document.getElementById("button");

    button.addEventListener('click', ()=>{
      points.length = 4;
      console.log("button works");
    })

    Source: https://codepen.io/1000mileworld/pen/JjGVRjw


    But with the code I can see the value of the first 4 elements in the array, but the image won't change. All the circles remain on the screen. So i think this code dont work. I used points.length but I think it has to be something that will delete the other items also.

    Let's try .splice()


    > let array = ["a", "b", "c"];
> let index = 1;
> array.splice(index, 1);
[ 'b' ]
> array;
[ 'a', 'c' ]


`let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]`

Source: https://bytearcher.com/articles/how-to-delete-value-from-array/

I've used this:

points.splice(5, 234);

And each time I did get the same output in the console. Super frustrating.
I think that I know what the problem is.

let points = font.textToPoints(randomword, posX, posY, 130);

Points only a variable of something. The amount of circles is now defined by the randomword.

I give up.
Nothing really worked out very well.

It's about showing some of my work & showing some of my personalitites so users can get to know me better



Used this code for experimenting with my second concept. I was trying to put in images in side of a square. But it didn't really worked out very well.
https://editor.p5js.org/jeremydouglass/sketches/T2ooOe6Nx
