# Frontend Mentor - Dictionary Web App

This is my solution to the [Dictionary Web App](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL).

## Screenshot

![dictionary-web-app-solution-screenshot](https://github.com/bhoamikhona/frontend-mentor-challenges/assets/50435319/2fefc575-54a6-4bc5-9fbd-1038b2424857)

## Links

- Solution URL: [Link](https://github.com/bhoamikhona/frontend-mentor-challenges/tree/main/dictionary-web-app)
- Live Site URL: [Link](https://dictionary-web-app-bhoami-nine.vercel.app/)

## Built with

- JavaScript
- React.js
- Axios
- [Dictionary API](https://dictionaryapi.dev/)

## Solution Retrospective

### What are you most proud of, and what would you do differently next time?

I am fairly new in terms of using React so the fact that I was able to complete this project makes me feel proud. It was definitely challenging for someone who is a beginner. I am still learning about redux and context so, next time that I make this project, I will probably end up using one of those two.

### What challenges did you encounter, and how did you overcome them?

My biggest issue was when I set the initial state of data to null.

I wanted to set "keyboard" as the initial value and then use the useEffect hook to call the API to get its data when the page first renders but, I was facing a lot of errors regarding it. For this I saw a few YouTube videos, and googled online along with checking out some Stack Overflow queries however, I am still not sure what is going on. So, I will continue my research on the topic.

Another issue was passing data as props from one component to another. I used async-await before I got the data and for some reason when I passed the data from one component to another, and tried destructure the data there, I got an error. For this, I asked one of my acquaintance to help me figure out why that was happening, and I got to know that when I pass data to another component, I need to check if the data is null in that component before using it. Which is something that I find weird so, I mean to do some more research about it.

### What specific areas of your project would you like help with?

Honestly, it would be great to have feedback on anything. Like I said, I am a beginner in ReactJS and I am sure there is a huge room for improvement so, any constructive feedback would be greatly appreciated. Thank you!

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
