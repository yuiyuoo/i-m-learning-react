import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quotes from './components/Quotes'
function App() {

  const [currentIndex, setCurrentIndex] = useState(0)
 
  const quotes = [
    {
      quote: "Waste no more time arguing what a good man should be. Be One.",
      author: "Marcus Aurelius"
    },
    {
      quote: "Think of the life you have lived until now as over and, as a dead man, see what's left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?",
      author: "Marcus Aurelius"
    },
    {
      quote: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
      author: "Marcus Aurelius"
    },
    {
      quote: "In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.",
      author: "Marcus Aurelius"
    },
    {
      quote: "If it is not right, do not do it, if it is not true, do not say it.",
      author: "Marcus Aurelius"
    },
    {
      quote: "The best revenge is not to be like your enemy.",
      author: "Marcus Aurelius"
    },
    {
      quote: "Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.",
      author: "Marcus Aurelius"
    },
    {
      quote: "It’s time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.",
      author: "Marcus Aurelius"
    },
    {
      quote: "External things are not the problem. It’s your assessment of them. Which you can erase right now.",
      author: "Marcus Aurelius"
    },
    {
      quote: "If anyone can refute me—show me I’m making a mistake or looking at things from the wrong perspective—I’ll gladly change. It’s the truth I’m after, and the truth never harmed anyone.",
      author: "Marcus Aurelius"
    },
    {
      quote: "You could leave life right now. Let that determine what you do and say and think.",
      author: "Marcus Aurelius"
    },
    {
      quote: "Be tolerant with others and strict with yourself.",
      author: "Marcus Aurelius"
    },

    // Seneca
    {
      quote: "We are more often frightened than hurt; and we suffer more in imagination than in reality.",
      author: "Seneca"
    },
    {
      quote: "If a man knows not which port he sails, no wind is favorable.",
      author: "Seneca"
    },
    {
      quote: "No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.",
      author: "Seneca"
    },
    {
      quote: "Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.",
      author: "Seneca"
    },
    {
      quote: "He who fears death will never do anything worthy of a man who is alive.",
      author: "Seneca"
    },
    {
      quote: "This is our big mistake: to think we look forward to death. Most of death is already gone. Whatever time has passed is owned by death.",
      author: "Seneca"
    },
    {
      quote: "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
      author: "Seneca"
    },
    {
      quote: "I judge you unfortunate because you have never lived through misfortune. You have passed through life without an opponent—no one can ever know what you are capable of, not even you.",
      author: "Seneca"
    },
    {
      quote: "How does it help…to make troubles heavier by bemoaning them?",
      author: "Seneca"
    },
    {
      quote: "People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.",
      author: "Seneca"
    },

    // Epictetus
    {
      quote: "How long are you going to wait before you demand the best for yourself?",
      author: "Epictetus"
    },
    {
      quote: "Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.",
      author: "Epictetus"
    },
    {
      quote: "First say to yourself what you would be; and then do what you have to do.",
      author: "Epictetus"
    },
    {
      quote: "Curb your desire—don’t set your heart on so many things and you will get what you need.",
      author: "Epictetus"
    },
    {
      quote: "That’s why the philosophers warn us not to be satisfied with mere learning, but to add practice and then training. For as time passes we forget what we learned and end up doing the opposite, and hold opinions the opposite of what we should.",
      author: "Epictetus"
    },
    {
      quote: "Don’t explain your philosophy. Embody it.",
      author: "Epictetus"
    },
    {
      quote: "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own…",
      author: "Epictetus"
    },
    {
      quote: "If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, ‘He was ignorant of my other faults, else he would have not mentioned these alone.’",
      author: "Epictetus"
    },

    // Cato
    {
      quote: "I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.",
      author: "Cato"
    },

    // Viktor Frankl
    {
      quote: "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.",
      author: "Viktor Frankl"
    },
    {
      quote: "When we are no longer able to change a situation, we are challenged to change ourselves.",
      author: "Viktor Frankl"
    },
    // Epictetus (additional quotes)
    {
      quote: "It's not what happens to you, but how you react to it that matters.",
      author: "Epictetus"
    },
    {
      quote: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
      author: "Epictetus"
    },
    {
      quote: "I cannot escape death, but at least I can escape the fear of it.",
      author: "Epictetus"
    },
    {
      quote: "He who laughs at himself never runs out of things to laugh at.",
      author: "Epictetus"
    },
    {
      quote: "Don't explain your philosophy. Embody it.",
      author: "Epictetus"
    },
    {
      quote: "Know, first, who you are, and then adorn yourself accordingly.",
      author: "Epictetus"
    },
    {
      quote: "A ship should not ride on a single anchor, nor life on a single hope.",
      author: "Epictetus"
    },
    {
      quote: "The key is to keep company only with people who uplift you.",
      author: "Epictetus"
    },
    {
      quote: "First, say to yourself what you would be, and then do what you have to do.",
      author: "Epictetus"
    },
    {
      quote: "There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.",
      author: "Epictetus"
    },
    {
      quote: "Wealth consists not in having great possessions, but in having few wants.",
      author: "Epictetus"
    },
    {
      quote: "Don't seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.",
      author: "Epictetus"
    },
    {
      quote: "You become what you give your attention to.",
      author: "Epictetus"
    },
    {
      quote: "It is the nature of the wise to resist pleasures, but the foolish to be a slave to them.",
      author: "Epictetus"
    },
    {
      quote: "The more we value things outside our control, the less control we have.",
      author: "Epictetus"
    },
    {
      quote: "Nothing great is created suddenly, any more than a bunch of grapes or a fig.",
      author: "Epictetus"
    },
    {
      quote: "Difficulties show a person's character.",
      author: "Epictetus"
    },
    {
      quote: "Nature hath given men one tongue but two ears, that we may hear from others twice as much as we speak.",
      author: "Epictetus"
    },
    {
      quote: "Men are disturbed not by things, but by the views which they take of things.",
      author: "Epictetus"
    },
    {
      quote: "When someone is properly grounded in life, they shouldn't have to look outside themselves for approval.",
      author: "Epictetus"
    },
    {
      quote: "Settle on the type of person you want to be and stick to it, whether alone or in company.",
      author: "Epictetus"
    },
    {
      quote: "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
      author: "Epictetus"
    },
    {
      quote: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are, and you will have a tranquil flow of life.",
      author: "Epictetus"
    },
    {
      quote: "Practice yourself, for heaven's sake, in little things; and thence proceed to greater.",
      author: "Epictetus"
    },
    {
      quote: "Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him.",
      author: "Epictetus"
    },
    {
      quote: "Circumstances don't make the man, they only reveal him to himself.",
      author: "Epictetus"
    },
    {
      quote: "First learn the meaning of what you say, and then speak.",
      author: "Epictetus"
    },
    {
      quote: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
      author: "Epictetus"
    }

  ];

  function getRandomQuote() {
    setCurrentIndex(Math.floor(Math.random() * quotes.length))
  }
  return (
    <>
      <Quotes quote={quotes[currentIndex].quote} 
            author={quotes[currentIndex].author}
      />
      <button onClick={getRandomQuote}>
        get a new quote
      </button>
    </>
  )
}

export default App
