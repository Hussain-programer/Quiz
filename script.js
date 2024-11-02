const questions = {
    // correct starts form 0 to 3 because of index.
    easy: [
        {
            question: "What does HTML stand for?",
            options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Text Machine Language"],
            correct: 2
          },
          {
            question: "Which of these is a popular social media platform?",
            options: ["Facebook", "Python", "HTML", "Oracle"],
            correct: 0
          },
          {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correct: 1
          },
          {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            correct: 2
          },
          {
            question: "What color is the sky on a clear day?",
            options: ["Green", "Blue", "Red", "Yellow"],
            correct: 1
          },
          {
            question: "Which animal is known as man's best friend?",
            options: ["Cat", "Dog", "Rabbit", "Fish"],
            correct: 1
          },
          {
            question: "What shape is a soccer ball?",
            options: ["Square", "Circle", "Oval", "Hexagon"],
            correct: 1
          },
          {
            question: "What device is used to call someone?",
            options: ["Television", "Computer", "Telephone", "Microwave"],
            correct: 2
          },
          {
            question: "What season comes after spring?",
            options: ["Winter", "Autumn", "Summer", "Fall"],
            correct: 2
          },
          {
            question: "What is the boiling point of water at sea level?",
            options: ["50°C", "100°C", "150°C", "200°C"],
            correct: 1
          }
        // Add more questions Here!

    ],
    medium: [
        {
            question: "Which planet is the largest in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: 2
          },
          {
            question: "What is the capital city of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: 2
          },
          {
            question: "Which programming language is known for its 'snake' logo?",
            options: ["Java", "Python", "C++", "Ruby"],
            correct: 1
          },
          {
            question: "What is the chemical symbol for gold?",
            options: ["Gd", "Ag", "Au", "Go"],
            correct: 2
          },
          {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            correct: 1
          },
          {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
            correct: 2
          },
          {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Thailand", "South Korea", "Japan"],
            correct: 3
          },
          {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Power Unit", "Central Power Unit", "Control Processing Unit"],
            correct: 0
          },
          {
            question: "Which continent is the Sahara Desert located in?",
            options: ["Asia", "Africa", "Australia", "South America"],
            correct: 1
          },
          {
            question: "In music, what does 'tempo' refer to?",
            options: ["The melody", "The speed of the beat", "The lyrics", "The harmony"],
            correct: 1
          }
        // Add more questions Here!

    ],
    hard: [
        {
            question: "What's the current qubit count in enterprise quantum systems?",
            options: ["1 million", "10 million", "100 million", "1 billion"],
            correct: 2
          },
          {
            question: "Which company introduced the first 3nm chip for commercial use?",
            options: ["Apple", "Intel", "Samsung", "IBM"],
            correct: 3
          },
          {
            question: "What programming language is primarily used for machine learning?",
            options: ["Java", "Python", "C++", "JavaScript"],
            correct: 1
          },
          {
            question: "In web development, what does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            correct: 1
          },
          {
            question: "Which of the following is a NoSQL database?",
            options: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
            correct: 1
          },
          {
            question: "Who is known as the father of the computer?",
            options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Steve Jobs"],
            correct: 0
          },
          {
            question: "What is the main advantage of cloud computing?",
            options: ["Higher costs", "Increased flexibility", "Limited scalability", "Increased complexity"],
            correct: 1
          },
          {
            question: "What does HTTP stand for in web technology?",
            options: ["Hyper Transfer Text Protocol", "HyperText Transfer Protocol", "HyperText Translate Protocol", "HyperText Transaction Protocol"],
            correct: 1
          },
          {
            question: "Which technology is used to make websites interactive?",
            options: ["HTML", "CSS", "Python", "JavaScript"],
            correct: 3
          },
          {
            question: "What is the primary role of a frontend developer?",
            options: ["Server-side development", "Database management", "Client-side user interface development", "Network security"],
            correct: 2
          },
        // Add more questions Here!

    ],
    extreme:[
        {
            question: "What is the time complexity of the best-known algorithm for matrix multiplication?",
            options: ["O(n^3)", "O(n^2.5)", "O(n^2.81)", "O(n log n)"],
            correct: 2
          },
          {
            question: "Which of these problems is proven to be NP-complete?",
            options: ["Matrix inversion", "Traveling Salesman Problem", "Binary Search", "Quick Sort"],
            correct: 1
          },
          {
            question: "Who is known as the creator of the C programming language?",
            options: ["Alan Turing", "Ken Thompson", "Dennis Ritchie", "James Gosling"],
            correct: 2
          },
          {
            question: "In computer science, what is the Halting Problem?",
            options: [
              "Determining if a program will terminate",
              "Calculating memory usage of a program",
              "Finding the optimal runtime of a program",
              "Determining if a program will crash"
            ],
            correct: 0
          },
          {
            question: "Which sorting algorithm has the worst-case time complexity of O(n^2) but is often faster on small datasets?",
            options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
            correct: 1
          },
          {
            question: "In functional programming, what is a 'monad'?",
            options: [
              "A design pattern for user interfaces",
              "A type of variable scope",
              "A structure that represents computations",
              "A syntax structure for loops"
            ],
            correct: 2
          },
          {
            question: "What is 'currying' in functional programming?",
            options: [
              "A method to enhance code readability",
              "A process of reducing multiple arguments into functions with single arguments",
              "A sorting algorithm",
              "A concurrency technique"
            ],
            correct: 1
          },
          {
            question: "Which language introduced the concept of garbage collection?",
            options: ["C", "LISP", "Fortran", "Pascal"],
            correct: 1
          },
          {
            question: "What does 'CAP theorem' stand for in distributed systems?",
            options: [
              "Consistency, Availability, Partition tolerance",
              "Concurrency, Accessibility, Performance",
              "Control, Accountability, Privacy",
              "Consistency, Authentication, Partition tolerance"
            ],
            correct: 0
          },
          {
            question: "What is the maximum theoretical speedup using n processors according to Amdahl's Law?",
            options: ["n times", "n/2 times", "2^n times", "1/(1 - p) times where p is parallelizable code fraction"],
            correct: 3
          }
        // Add more questions Here!
    ]
    // You can add more Levels
  };

  let currentQuestion = 0;
  let score = 0;
  let currentDifficulty = null;

  // Create floating particles
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.width = Math.random() * 5 + "px";
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 5 + "s";
    particlesContainer.appendChild(particle);
  }

  document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("difficulty-select").style.display = "block";
  });

  document.querySelectorAll(".difficulty-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      currentDifficulty = e.target.dataset.difficulty;
      document.getElementById("difficulty-select").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      loadQuestion();
    });
  });

  function loadQuestion() {
    if (currentQuestion >= questions[currentDifficulty].length) {
      showResults();
      return;
    }

    const question = questions[currentDifficulty][currentQuestion];
    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      optionsContainer.appendChild(button);
    });

    updateProgress();
  }

  function checkAnswer(selectedIndex) {
    const buttons = document.querySelectorAll(".options button");
    buttons.forEach((button) => (button.disabled = true));

    const correct = questions[currentDifficulty][currentQuestion].correct;

    if (selectedIndex === correct) {
      score++;
      buttons[selectedIndex].classList.add("correct");
    } else {
      buttons[selectedIndex].classList.add("incorrect");
      buttons[correct].classList.add("correct");
    }

    document.getElementById("score").textContent = score;

    setTimeout(() => {
      currentQuestion++;
      loadQuestion();
    }, 1500);
  }

  function updateProgress() {
    const progress =
      (currentQuestion / questions[currentDifficulty].length) * 100;
    document.getElementById("progress").style.width = progress + "%";
  }

  function showResults() {
    const container = document.getElementById("quiz");
    container.innerHTML = `
            <h2 style="text-align: center; margin-bottom: 1rem;">Quiz Complete</h2>
            <p style="text-align: center; font-size: 1.2rem;">
                Difficulty: ${
                  currentDifficulty.charAt(0).toUpperCase() +
                  currentDifficulty.slice(1)
                }<br>
                Final Score: ${score} out of ${
      questions[currentDifficulty].length
    }
            </p>
            <button onclick="location.reload()" style="width: 100%; margin-top: 2rem;">
                Restart Quiz
            </button>
        `;
  }
