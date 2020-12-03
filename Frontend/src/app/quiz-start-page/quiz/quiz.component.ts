import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { QuizService } from '../../services/quiz.service';

import { Question, Quiz } from '../../models/index';

import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';
import { HostListener } from '@angular/core';
import { faClock, faEye, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  faEye = faEye;
  faUser=faUser;
  faClock=faClock;
  
  quizes: any[];
  @Input() userName: string;
  @Input() quiz: Quiz = new Quiz(null);
  
  mode = 'quiz';
 

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  ellapsedTime = '00:00';
  duration = '';
  diff: number=0;
  keyForCookie: string=null;
  timeForCookie=0;
  

  textAnswer = '';

  constructor(private quizService: QuizService, private router: Router,
    private route: ActivatedRoute, private participantService: ParticipantService, private cookie: CookieService) { }

  ngOnInit() {
    this.quiz.time=this.quiz.time*60;
    this.participantService.updateParticipant(this.quiz.quizId).subscribe(res => {
    }), (error) => console.log('error', error)

    this.pager.index = Number(this.cookie.get(this.userName));
    this.keyForCookie=this.userName + 's';
    if(this.cookie.get(this.keyForCookie)){
      this.ellapsedTime = this.cookie.get(this.keyForCookie);
      console.log(this.ellapsedTime);
      this.timeForCookie=60*Number(this.ellapsedTime.substr(0,2))+Number(this.ellapsedTime.substr(3,2));
      console.log(this.timeForCookie);
    }
    
    this.pager.count = this.quiz.l;
    this.startTime = new Date();
    this.duration = this.parseTime(this.quiz.time);
    
    this.timer = setInterval(() => { this.tick(); }, 1000);
    

  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    const dateNow = new Date();
    dateNow.setHours(dateNow.getHours() + 1);
    
    this.cookie.set(this.keyForCookie,this.ellapsedTime, dateNow);
    this.participantService.removeParticipant(this.quiz.quizId).subscribe(res => {


    }, (error) => console.log('error', error))
  }

  getStyleClass(value: number) {
    if (value < 0.333)
      return 'progress-easy';
    if (value >= 0.333 && value < 0.50)
      return 'progress-medium';
    if (value >= 0.50 && value <= 0.80)
      return 'progress-hard';
    if (value >= 0.80) {
      return 'progress-very-hard';
    }
  }

  liveUsers = 0;
  tick() {
    const now = new Date();
    this.diff = (now.getTime() - this.startTime.getTime()+this.timeForCookie*1000) / 1000;
    this.getLiveUsers(this.quiz.quizId);
    if (this.diff >= this.quiz.time) {
      this.onSubmit();

    }

    this.ellapsedTime = this.parseTime(this.diff);
    
  }
  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  getLiveUsers(quizId: number) {
    this.quizService.liveUserNumber(quizId).subscribe(
      response => {
        this.liveUsers = response;
      },
      (error) => console.log('error', error)
    )
  }

  

  get filteredQuestions() {

    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option1: string, letter: string) {
  
        question.answer.answer = letter;
        question.answer.len = 1;

    

  }
  onSelectMulti(question: Question, option: string, letter: string) {
    
      let flag = 0;
      let str = '';
      for (let i = 0; i < question.answer.len; i++) {
        if (question.answer.answer.charAt(i) != letter) {
          str = str + question.answer.answer.charAt(i);
        }
        else {
          flag = 1;
        }
      }
      if (flag == 0) {
        question.answer.answer = question.answer.answer + letter;
        question.answer.len = question.answer.len + 1;
      }
      else {
        question.answer.answer = str;
        question.answer.len = str.length;
      }
 

  }
  onWritingText(question: Question) {
    question.answer.answer = this.textAnswer;
    this.textAnswer='';
   

  }



  goTo(question: Question, index: number) {
    question.answer.quesId = question.quesId;
    
    question.answer.quizId = this.quiz.quizId;
    
    question.answer.userName = this.userName;
    const dateNow = new Date();
    dateNow.setHours(dateNow.getHours() + 1);
    
    this.cookie.set(this.userName, (this.pager.index + 1).toString(), dateNow);
    if (index >= 0 && index <= this.pager.count) {
      this.pager.index = index;
      

    }
    else {
   
      this.mode = 'quizEnded';
    }
    if(question.answer.answer){
        this.quizService.saveAnswer(question.answer).subscribe(
          response => {
          },
          (error) => console.log('error', error)
        )

    }
    // const dateNow = new Date();
    // dateNow.setHours(dateNow.getHours() + 1);
    // this.cookie.set(this.userName, (this.pager.index + 1).toString(), dateNow);

    
  }
  score: number;

  onSubmit() {

   

    this.quizService.submitQuiz(this.userName, this.quiz.quizId).subscribe(
      response => {
        this.score = response;
        this.router.navigateByUrl('/result', { state: { quiz: this.quiz, username: this.userName, score: this.score } });
      }, (error) => console.log('error', error)
    )
    this.cookie.delete(this.userName);
    this.cookie.delete(this.keyForCookie);
  }
}