class Quiz {

    constructor(questions, timeLimit, timeRemaining) {

        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }
    getQuestion() {

        return this.questions[this.currentQuestionIndex];

    }

    moveToNextQuestion() {

        if (this.currentQuestionIndex < this.questions.length - 1) {

            this.currentQuestionIndex++;
        }
        return this.currentQuestionIndex
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

    checkAnswer(answer) {

        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers += 1;
            return true;
        }
        return false;
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        }
        return true
    }
    filterQuestionsByDifficulty(difficulty) {
        return this.getQuestion.difficulty(this.difficulty.filter(levelOfdificulty => 1 && levelOfdificulty <= 3))
        
        }
}