// Abu Kamal
// sample question array collectyed from Google
// ts format of interface building

export interface Question {
    question: string;
    options: string[];
    answer: string;
    userAnswer?: string;  //optional property for storing user answer
}

export const questions: Question[] = [
    {
        question: "What is the capital of France?",
        options: ["New York", "London", "Paris", "Berlin"],
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "H2SO4"],
        answer: "H2O",
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Jane Austen",
          "Leo Tolstoy",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "What is the largest animal on Earth?",
        options: ["Elephant", "Blue whale", "Giraffe", "Rhino"],
        answer: "Blue whale",
      },
      {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        answer: "Avocado",
      },
      {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        answer: "Hydrogen",
      },
      {
        question: "What year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1923"],
        answer: "1912",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Vincent Van Gogh",
          "Pablo Picasso",
          "Leonardo da Vinci",
          "Claude Monet",
        ],
        answer: "Leonardo da Vinci",
      },
      {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Russia", "Japan"],
        answer: "Brazil",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Dollar", "Euro", "Yen", "Rupee"],
        answer: "Yen",
      },
      {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
      },
      {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Earth", "Venus"],
        answer: "Mercury",
      },
      {
        question: "Which language is primarily spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Portuguese",
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile",
      },
      {
        question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "Chicago", "New York", "San Francisco"],
        answer: "New York",
      },
      {
        question: "What temperature does water boil at?",
        options: ["90°C", "100°C", "120°C", "80°C"],
        answer: "100°C",
      },
      {
        question: "Who invented the telephone?",
        options: [
          "Thomas Edison",
          "Alexander Graham Bell",
          "Nikola Tesla",
          "Michael Faraday",
        ],
        answer: "Alexander Graham Bell",
      },
      {
        question: "What gas do living creatures need to breathe?",
        options: ["Hydrogen", "Carbon dioxide", "Oxygen", "Nitrogen"],
        answer: "Oxygen",
      },   
]