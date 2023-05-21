import React, { useState } from "react";
import "./Quiz.css"

const Quiz = () =>{

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "Who are the main characters in Guernica?",
          options: [
            { id: 0, text: "Men", isCorrect: false },
            { id: 1, text: "Children", isCorrect: false },
            { id: 2, text: "Aliens", isCorrect: false },
            { id: 3, text: "Women", isCorrect: true },
          ],
        },
        {
          text: "What feeling does the use of greyscale convey?",
          options: [
            { id: 0, text: "Despondency", isCorrect: true },
            { id: 1, text: "Joy", isCorrect: false },
            { id: 2, text: "Excitement", isCorrect: false },
            { id: 3, text: "Nostalgia", isCorrect: false },
          ],
        },
        {
          text: "Which 3 countries were responsible for the bombing of Guernica?",
          options: [
            { id: 0, text: "Spain, Germany and Italy", isCorrect: true },
            { id: 1, text: "Poland, Russia and Tunisia", isCorrect: false },
            { id: 2, text: "Italy, America and England", isCorrect: false },
            { id: 3, text: "France, Germany and Morocco", isCorrect: false },
          ],
        },
        {
          text: "What did the German Gestapo officer allegedly ask Picasso regarding the artwork?",
          options: [
            { id: 0, text: "Can you make me one?", isCorrect: false },
            { id: 1, text: "Did you do that?", isCorrect: true },
            { id: 2, text: "What does the ligthbulb represent?", isCorrect: false },
            { id: 3, text: "Is that a volcano on the left side?", isCorrect: false },
          ],
        },
      ];

      // Helper Fuctions //

      const optionClicked = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinalResults(true);
        }

    }

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
    }
    

      {/* END OF QUESTIONS */}

    return (
    <div className="Quiz">
    {/* 1. Header */}
    <h1>Guernica Quiz</h1>

     {/* 2. Current Score */}
    <h2>Current Score: {score}</h2>

    { showFinalResults ? (
        /* 4. Final Results */
    <div className="final-results">
        <h1>Final Results</h1>
        <h2>{score} out of {questions.length} correct - ({(score/questions.length) * 100}%)</h2>
        <button onClick={() => restartQuiz()}>Restart Quiz</button>
    </div>
    ) : (
    /* 3. Question Card */
    <div className="question-card">
        <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
        <h3 className="question-text">{questions[currentQuestion].text}</h3>

        <ul>
        {questions[currentQuestion].options.map((option) => {
            return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            );
        })}
    </ul>
    </div>
    )}
    </div>
    );
}

export default Quiz;
