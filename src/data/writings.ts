/*
  Books, essays, and podcast pieces.
  `body` paragraphs render on the /writing/[slug] pages. Em dashes intentionally
  avoided throughout. Edit freely.
*/

export type Writing = {
  slug: string;
  kind: "book" | "essay";
  title: string;
  status: "Published" | "In progress" | "Essay";
  subtitle: string;
  excerpt: string; // short teaser for cards
  buyLink?: string;
  note?: string; // e.g. source / context line on the page
  body?: string[]; // full text paragraphs (omit for the published book)
  chapters?: string[];
};

export const writings: Writing[] = [
  {
    slug: "index",
    kind: "book",
    title: "Index",
    status: "Published",
    subtitle: "My first book, available now.",
    excerpt:
      "A collection of ideas and reflections, including early writing on love as an unintended manifestation, the most powerful emotion a human can experience.",
    buyLink: "https://selar.com/11989g?currency=XOF",
    note: "Available on Selar.",
  },
  {
    slug: "life-is-random",
    kind: "book",
    title: "Life Is Random",
    status: "In progress",
    subtitle: "A book on chance, choice, and finding meaning in the chaos.",
    excerpt:
      "Forget meticulously planning every step, because chance plays a much bigger role than we often care to admit. A book about embracing the unexpected detours and unforeseen connections.",
    note: "Currently being written. An excerpt from the preface.",
    body: [
      "Let me tell you something: life is unpredictable. Forget meticulously planning every step, because chance, my friend, plays a much bigger role than we often care to admit. This book, born from my own experiences navigating this wild ride we call life, explores the power of randomness. It is about embracing the unexpected detours, the unforeseen connections, and understanding that our journeys are far more nuanced than any linear definition of success can contain.",
      "Look, I get it. We are conditioned to believe in a certain order, a predictable path to success. But what if true fulfillment lies in embracing the unknown, in allowing ourselves to explore diverse interests without the pressure of fitting into a predefined box? My own life, as you will discover within these pages, has been a testament to this very idea.",
      "From my early days in Nigeria, where creativity pulsed through me, to my decision to pursue medicine in Ukraine, a seemingly random choice sparked by a conversation with a fellow student, each step has been shaped by an openness to experience. I could have easily limited myself to the label of medical student, but where is the fun in that? Instead, I dove headfirst into the vibrant art scene in Ukraine, organizing fashion shows, holding art exhibitions, even developing a finger vein system for a tech competition.",
      "These were not distractions from my chosen path; they were enriching threads woven into the very fabric of my journey. And it is this multifaceted approach to life, embracing seemingly disparate passions like art, medicine, technology, even cryptocurrency, that I believe holds the key to unlocking a deeper understanding of success and fulfillment.",
      "This book is not about celebrating chaos, but about recognizing the power of chance encounters, unexpected setbacks, and those seemingly insignificant moments that can alter the trajectory of our lives. It is about understanding that success is not a finish line, but a constantly evolving journey shaped by the unpredictable dance between choice and chance.",
      "Through my own story, and the insights woven throughout Life is Random, I invite you to reconsider your relationship with uncertainty. What happens when we loosen the grip on rigid expectations and embrace the unexpected? What new passions might we uncover, what unforeseen connections might we forge, when we open ourselves to the infinite possibilities that arise when we embrace the randomness of life?",
    ],
    chapters: [
      "The Illusion of Control",
      "Embracing Uncertainty",
      "The Chaos of Choices",
      "You Can Make an Argument for Anything",
      "The Butterfly Effect",
      "Fate, Free Will, and Coincidence",
      "Order in Disorder",
      "The Paradox of Purpose",
      "Accidental Successes",
      "The Randomness of Relationships",
      "Luck: In the Right Place at the Right Time",
      "The Myth of Predictability",
      "Chance Encounters",
      "Living with Imperfection",
      "Finding Meaning in the Chaos",
    ],
  },
  {
    slug: "theory-of-love",
    kind: "essay",
    title: "The Yerins Theory of Love",
    status: "In progress",
    subtitle: "Why we should stop calling three different things by one word.",
    excerpt:
      "We defined so many meanings for the word love that the true meaning ceased to exist. A theory that divides love into three stages: Giddle, Frontier, and Malove.",
    note: "From forthcoming work.",
    body: [
      "For years I have wondered in the deepest ocean of my mind, trying to find the meaning of Love. What I found was that love is undefinable. Everyone has their own definition, their own explanation, according to their experience with this incredible feeling of life.",
      "But the idea that love is undefinable does not sit well with me, something must be wrong somewhere. I believe along the line, we created so many meanings for this word that the true meaning ceased to exist. And even when the true meaning resurfaces, not much value is placed on it, for the same word, Love, is used.",
      "I wrote a little about the phenomena called Love in my previous book Index, where I described it as an unintended manifestation, because the feelings manifest themselves unexpectedly. This means it is a natural emotion. I also described it as the most powerful emotion a human can experience.",
      "Evolutionary biology, evolutionary psychology and ethology all provide various explanations on how love arose from evolution. Even Darwin wrote about what he called social instincts in The Descent of Man. All explanations, to greatly simplify, amount to this: love provides a survival advantage for social species. As such, these species are more likely to reproduce and spread their genes.",
      "Love is but one of many prosocial traits that in the past few decades have been experimentally shown to exist in other hominid species. These other traits include friendship formation, altruism, a sense of justice, sharing resources, adopting genetically unrelated orphans, expressing guilt and forgiveness, and empathy, to name a few. We humans like to think we alone possess these human behaviors, but that is not the case.",
      "Now that we have established a general understanding of love, let us dive deeper into romantic love. Loving someone and marrying someone are totally different things, because love is a spontaneous feeling while marriage is a compromise to live life with social liabilities.",
      "Relationship is a journey, a journey you begin to embark on with a partner. Before you begin any journey, you need to know a couple of things: where the destination is, how long the journey is, and when it ends. Unfortunately, when it comes to love, most people do not know where their relationship is leading, or how long it will last, or even when it ends.",
      "In my previous book Index I wrote a quote saying there is an end to every beginning, but no end to beginnings. This is to say the feelings you have for someone during the first few months of your relationship will come to an end. But that also means a new kind of feeling will begin after it.",
      "So I decided to create my own words replacing love to describe these different times. The words are Giddle, Frontier and Malove. These can also be described as stages of love. What I found is that people who grow old and die together have passed all three stages. This means Giddle has an expiration date. So does Frontier. And the end of Malove is death from old age. During each stage, different parts of our brain react differently and a different neurotransmitter is released. Since this is the case, calling it one word just seems wrong. This I call The Yerins Theory of Love.",
      "So what is Giddle? Giddle is when you have a sexual or romantic feeling for someone. Its duration is three to five years. If we say I have a Giddle feeling towards you, it implies what it really is, a sexual and romantic feeling. But at the same time, it also means we can try out a long standing relationship, but with the knowledge of each stage and its end. So during the period of three to five years, we have honest, routine conversations on how we feel about each other and whether we want to proceed to the next stage.",
    ],
  },
  {
    slug: "whats-real",
    kind: "essay",
    title: "What's Real?",
    status: "Essay",
    subtitle: "On perception, belief, and the reality our brains construct.",
    excerpt:
      "What do you think is real to humans? Color does not exist out there, it is all in our brain. The mind does not seek truth and accuracy, it seeks meaning.",
    note: "From The Polymath Podcast.",
    body: [
      "So what is real? No seriously, what do you think is real to humans?",
      "The Unthinking Realist argues that everything we experience is exactly the way the world is. Sugar is sweet, water is wet because that is what water is, roses are red, the sky is blue because that is just how it is.",
      "Well, actually, no. Thinking realists beg to differ. A thinking realist would say color does not really exist out there, it is all in our brain. A rose is not red. Red is a particular wavelength of light, and our brain converts that into the sensation of red. So the sensation of red belongs to us, not to the world. Same with taste. Sugar is not sweet. It is sweet to us because of a particular reaction in our tongue that our brain interprets in a particular way. Sugar is not sweet, it is just a chemical.",
      "If a tree falls in the middle of a forest and no one was there to hear it, did it make a noise? No, it does not, because there is no one to experience that noise. Sound does not exist outside the brain. When a tree falls, it emits a vibration. Those vibrations tickle the hair cells in our ears, which activate frequency specific neurons in the brain. The brain then constructs the sound we perceive. A noise is an experience. It needs an observer in order to exist.",
      "Subjective reality is the way you personally experience and interpret the world, based on your thoughts, feelings, and perceptions. Objective reality is the way things actually are, independent of your personal thoughts. The human brain interprets and processes sensory information to create a subjective reality that we perceive as real, shaped by our perception, experiences, and biases. So what we experience is not an accurate reflection of objective reality.",
      "This is to say, the mind does not seek truth and accuracy. It seeks meaning. Our minds did not evolve to be scientific tools, they evolved to be survival tools.",
      "Now let us talk about belief. There is a phenomenon in the medical field called the placebo effect, when a person responds to a fake treatment because they believe it will work. There is even a syndrome called Koro, a psychiatric disorder characterized by acute anxiety and a belief that one's body is shrinking, where the belief itself produces the physical experience. This is real, and it is grouped under what are called culture bound syndromes, where only a specific society or culture experiences a certain syndrome based on their beliefs.",
      "So if I were to ask, is God real? Our answer focuses on the wrong word, which is God. The word we ought to focus on is real. Whether God is really real or not, if we feel him as real based on our personal experiences or societal biases, then he is real to us. Because we all experience real subjectively, and that subjective reality makes complete sense to us.",
      "I will end by asking you one question. Do our brains conform to the world, or does the world conform to our brains?",
    ],
  },
];

export const books = writings.filter((w) => w.kind === "book");
export const essays = writings.filter((w) => w.kind === "essay");

export function getWriting(slug: string) {
  return writings.find((w) => w.slug === slug);
}
