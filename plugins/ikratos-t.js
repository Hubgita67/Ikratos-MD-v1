import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} Truth ${htka}*
 _Please be honest and answer your Question_

 Whatsapp Bot by Ahmad Ali
 *wa.me/923470027813*


 Follow me on instagram:\n\t\t\titx_ahmad.ali
 `
let buttons = [{ buttonText: { displayText: 'Truth or Dare' }, buttonId: `${usedPrefix}tod` }]

	let truth = [
  "Which friend do you hate the most among us?",
   "Who was the last person you contacted on WhatsApp?",
   "If I were beside you now, what would you do?",
   "How much remaining balance is still in the ATM?",
   "How much money do you currently have in your wallet?",
   "If you were to be an animal, what animal would you like to be?",
   "If I turn into an ultraman, will you still want to be friends with me?",
   "Which friend among the hangouts do you feel the closest to?",
   "Have you ever secretly liked one of the hangouts here?",
   "When do you remember the first time you cried?",
   "What's the easiest thing to make you feel happy in a short time?",
   "Have you ever been loaned money and have not returned it until now?",
   "Have you ever borrowed money and haven't paid it back until now?",
   "What do you think is the most disgusting thing?",
   "Do you know what EQ (emotional intelligence) is? If someone had a high EQ, what would they be like?",
   "What emotions do you know? How do you detect them?",
   "What do you think is the purpose of having those various emotions?",
   "When you feel a strong emotion, what's the best way to respond?",
   "How do you see Mama handling big emotions?",
   "What's the best way to handle emotions when you're feeling really angry?",
   "Do you think it's okay for people to cry when they're angry? (male and female, young and old?)",
   "What do you feel when you feel different emotions in your body?",
   "Can you tell Mama or someone else when you are upset?",
   "How do you feel when someone is mad at you? How do you act?",
   "Are you the type of person whose cup is half full or cup half empty?",
   "What do you do to cheer yourself up when you're feeling down?",
   "What do you do to comfort other people who are sad?",
   "What words do you wish someone would say to you when you're having a hard time?",
   "Have you ever not noticed you when you were sad?",
   "What's the best way for Mama to help you when you're feeling upset?",
   "When do you want Mama to hug you? Does it embarrass you?",
   "What hurt your feelings? How do you act when your feelings are hurt?",
   "When you're upset, do you want Mama to stay close or to give you space?",
   "When you're really upset, how do you help yourself calm down?",
   "When you're really mad at Mom, what do you think you can do to respond?",
   "When you make a mistake, are you able to fix something so you feel okay? What's the hardest part in fixing something?",
   "How did you feel when you apologized, before, during, and after?",
   "Do you find it difficult to forgive others? Why and why not?",
   "Have you ever held grudges against other people? If so, why?",
   "How do you get rid of grudges?",
   "What are the types of courage? How do you define courage?",
   "In what way do you feel braver?",
   "When you're scared, what do you do?",
   "What do you do when you feel so frustrated or hopeless that you want to give up?",
   "Have you ever wished to die? When and why?",
   "Have you ever thought about hurting yourself? What did you do?",
   "What things do you do to make the day better?",
   "When you wake up in a bad mood, what strategies do you use to help yourself feel better so you finally have a good day?",
   "Do you think you have cell phone addiction? Do you think we have proper rules around phones in our family?",
   "What is the easiest movie to make you feel overwhelmed and cry?",
   "Have you ever intentionally violated any laws or regulations?",
   "What do you think is the worst habit you have?",
   "What is a hidden talent that you have that no one has ever known about?",
   "What makes you jealous?",
   "What makes you so happy?",
   "What made you so scared?",
   "What do you hate most about yourself?",
   "What's the most embarrassing thing you've ever done?",
   "What do you do when you meet someone who hates you?",
  "What's the worst mistake you've ever made?",
   "Ever cheated? What do you think about cheating?",
   "Who do you secretly like?",
   "Who was the last person you stalked on social media?",
   "Why did you break up with your ex before?",
   "What kind of person do you want?",
   "Who is your celebrity crush?",
   "What was the biggest lie someone told in your childhood?",
   "Who do you want to marry?",
   "Did you have an imaginary friend in your childhood?",
   "Name three things you think about when you sit on the toilet seat.",
   "Name your girlfriend.",
   "Tell the last thing you searched for on Google.",
   "Do you like singing while taking a bath?",
   "Have you ever fallen in love?",
   "Which superpower have you ever wanted?",
   "Have you ever proposed to someone?",
   "Tell us your biggest embarrassing secret.",
   "Who is your best friend?",
   "Tell any of your friends you'd like to have a candle light dinner with.",
   "What's the biggest lie you've told someone?",
   "Name your worst habit that you would like to get rid of.",
   "Name the cutest boy or girl in your class?",
   "Who do you love the most Father or Mother?",
   "Have you ever been caught talking in your sleep?",
   "Who is your dream girl / dream boy?",
   "Name your greatest fear.",
   "Have you ever accidentally seen your parents having sex?",
   "Have you ever picked your nose in public?",
   "Name your current crush.",
   "Name your childhood crush.",
   "Have you ever had a crush on your teacher?",
   "Please state the RP character you want.",
   "Tell me your bra size.",
   "Have you ever tried to flirt with your best friend's boyfriend?",
   "Tell the celebrity you think is the coolest.",
   "What is your weight?",
   "If you ever got the chance to marry a celebrity, who would she be?",
   "Describe the funniest joke someone has ever played on you?",
   "Do you like to lick your plate after you finish eating?",
   "Have you ever tasted cat or dog food?",
   "What was your nickname in your childhood?",
   "What hairstyle have you always wanted to have?",
   "Name the animal that most closely resembles you.",
   "What is your dream career position?",
   "What's the first thing you notice in a girl or a boy?",
   "What do you like the most? Tea or coffee?",
   "Are you feeling sexy?",
   "Have you ever cried because you missed someone?",
   "Have you ever asked someone to go on a dinner date with you?",
   "When was the last time you cried, and why?",
   "Do you dance when you're alone?",
   "Name any part of your body you'd like to swap with your best friend.",
   "Name one thing you would like to change about yourself.",
   "Name the worst kisser in this room.",
   "Who do you feel jealous of?",
   "Name your waist.",
   "Have you ever fallen in love with any of those present?",
   "If you were a vampire, which of us would you bite now?",
   "What's the worst thing that's ever happened to you?",
  "Have you ever cheated on your group members?",
   "Have you ever defecated in public?",
   "What is your darkest fantasy?",
   "What's the best thing you've ever had with another person?",
   "What was the biggest turn-off for you?",
   "What do you like most about your body and what is the ugliest?",
   "Who from our round would you like to see naked?",
   "Who in this round can you fall in love with?",
   "Have you ever had an erotic dream where someone from this round happened?",
   "If you were to tattoo yourself in the genital area - what would be there?",
   "What is more important in a relationship - sex or love?",
   "Do you think sex is cool, good, okay, fun sometimes - or is it not that important to you?",
   "What makes you really fuck?",
   "How many times a week/month have sex - and how often do you want to have sex?",
   "How many sex partners have you slept with?",
   "Which body part excites you the most?",
   "How, where and with whom were you first?",
   "How important is extended foreplay to you?",
   "What's a guy/girl gotta do to seduce you?",
   "Have you ever been three? And how do you like it?",
   "Have you ever had sex with a best friend?",
   "Have you ever had sex with any of these groups - except your partner?",
   "Have you ever wanted to change your gender?",
   "What is your dream job?",
   "What is the most useless piece of knowledge?",
   "Name someone in the room that you secretly love.",
   "What is written on the last page of your diary?",
   "Describe your first impression of your boyfriend.",
   "Have you ever kept a library book on purpose?",
   "The weirdest dream you've ever had?",
   "The weirdest scenario that ever crossed your mind about us?",
   "Most embarrassing TikTok video you've ever watched?",
   "The most embarrassing movie/series/drama/anime you've ever watched?",
   "The most embarrassing Wattpad story/fan fiction/book you've ever read?",
   "If you could only eat one type of food for the rest of your life, what would you eat?",
   "What little thing has (name of person) done and made you really happy?",
   "What was your favorite cartoon when you were little?",
   "If you could be a fictional character for a day, what would you be?",
   "Who is your secret crush?",
   "How many crushes have you had in life? (It's called more fun)",
   "Read the last chat you sent to a friend.",
   "What do you hope (person's name) can change about him?",
   "Among players, who is the closest or knows the most about you?",
   "Your first impression about (person's name)?",
   "Rate (person's name) on a scale of 1-10.",
	 "Do you love my owner Ahmad Ali?",
		'What is your biggest fear?',
'What is the most embarrassing thing you have ever done?',
'What\'s a secret you\'ve never told anyone?',
'What is your biggest fantasy?',
'When was the last time you cried?',
'What is the biggest lie you\'ve ever told?',
'What is the most embarrassing photo of you?',
 'What is a weird food that you love?',
 'What terrible movie or show is your guilty pleasure?',
 'What was your biggest childhood fear?,',
 'Who was your first crush?',
 'What is the worst grade you received for a class in school/college?',
 'What is the biggest lie you\'ve ever told?',
 'Have you ever accidentally hit something (or someone!) with your car?',
 'Have you ever broken an expensive item?',
 'What is one thing you\'d change about your appearance if you could?',
 'If you suddenly had a million dollars, how would you spend it?',
 'Who is the best teacher you\'ve ever had and why?',
 'What is the worst food you\'ve ever tasted?',
 'What is the weirdest way you\'ve met someone you now consider a close friend?',
'What is the most embarrassing thing you\'ve posted on social media?',
'Who was your first celebrity crush?',
'Have you ever revealed a friend\'s secret to someone else?',
'How many kids do you want to have one day (or how many did you want to have growing up)?',
'If you could only eat one meal for the rest of your life, what would it be?',
'What is a secret you had as a child that you never told your parents?',
'What is your favorite book of all time?',
'What is the last text message you sent your best friend?',
'What is something you would do if you knew there were no consequences?',
'What is the worst physical pain you\'ve ever been in?',
'Personality-wise, are you more like your mom or your dad?',
'When is the last time you apologized (and what did you do)?',
'Have you ever reported someone for doing something wrong (either to the police or at work/school)?',
'If your house caught on fire and you could only save three things (besides people), what would they be?',
'If you could pick one other player to take with you to a deserted island, who would it be?',
'What sport or hobby do you wish you would’ve picked up as a child?',
'Have you ever stolen anything?',
'What\'s the weirdest dream you\'ve ever had?',
'If you could travel to any year in a time machine, what year would you choose and why?',
'If you could change one thing about yourself, what would it be?',
'What\'s one of the most fun childhood memories you have?',
 'What song was or do you want to be the your first dance at your wedding?',
'What song would make the best theme music for you?',
'What is the most irrational superstition you have?',
'What is the weirdest food combination you enjoy?',
'What is the stupidest thing you ever did on a dare?',
	 "Describe some qualities of my owner Ahmad Ali, which makes him unique"
]
							 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/Kzjv9x5/truth.jpg' }, caption: `${pickRandom(truth)}`, footer: capt, buttons }, { quoted: m })
}

handler.command = /^truth?$/i


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

