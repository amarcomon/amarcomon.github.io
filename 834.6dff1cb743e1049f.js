"use strict";(self.webpackChunkangular_trivia=self.webpackChunkangular_trivia||[]).push([[834],{1834:(h,c,r)=>{r.r(c),r.d(c,{ResultsModule:()=>f});var l=r(6814),i=r(157),t=r(5879),a=r(7244);function d(e,n){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-question",6),t.qZA()),2&e){const s=n.$implicit,o=n.index;t.xp6(1),t.Q6J("key",o)("question",s)("mode","results")}}const g=[{path:"",component:(()=>{var e;class n{constructor(o){this.router=o,this.correctAnswers=0}ngOnInit(){this.questions=this.router.lastSuccessfulNavigation?.extras?.state,this.correctAnswers=this.questions.filter(o=>o.correct_answer===o.user_answer).length}goToQuiz(){this.router.navigate([""])}setBackgroundColor(){return this.correctAnswers>=4?"green":this.correctAnswers<=1?"red":"yellow"}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(i.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-results"]],decls:10,vars:3,consts:[[1,"container","text-center"],[1,"ml-4"],[4,"ngFor","ngForOf"],[3,"ngClass"],[1,"flex-fill"],[1,"button-primary",3,"click"],[3,"key","question","mode"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"RESULTS"),t.qZA()(),t.YNc(3,d,2,3,"div",2),t.TgZ(4,"div",0)(5,"p",3),t._uU(6),t.qZA(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return u.goToQuiz()}),t._uU(9," Create a new quiz "),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("ngForOf",u.questions),t.xp6(2),t.Q6J("ngClass",u.setBackgroundColor()),t.xp6(1),t.hij("You scored ",u.correctAnswers," of 5"))},dependencies:[l.mk,l.sg,a.Y],styles:[".button-primary[_ngcontent-%COMP%]{width:100%;min-height:40px;background-color:gray;color:#fff;border-radius:10px}.red[_ngcontent-%COMP%]{background-color:red}.green[_ngcontent-%COMP%]{background-color:green}.yellow[_ngcontent-%COMP%]{background-color:#ff0}"]}),n})()}];let p=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Bz.forChild(g),i.Bz]}),n})();var m=r(1535);let f=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,p,m.C]}),n})()}}]);