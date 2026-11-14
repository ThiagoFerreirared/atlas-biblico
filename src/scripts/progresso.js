// Todos os registros ficam exclusivamente no navegador do leitor.
// Alterações na estrutura de estudos são isoladas pelo identificador v3.
const PREFIX='atlas:v3:';
const safeGet=(key)=>{try{return JSON.parse(localStorage.getItem(key)||'null');}catch{return null;}};
const safeSet=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}};
const verseKey=(c,v)=>PREFIX+'genesis:'+c+':'+v;
export const MODULE_IDS=['textual','historico','conexoes','interpretacoes','arqueologia','revisao'];
export function getVerse(c,v){
  const stored=safeGet(verseKey(c,v));
  return stored&&typeof stored==='object'?{
    read:stored.read===true,
    opened:Array.isArray(stored.opened)?stored.opened.filter(k=>MODULE_IDS.includes(k)):[],
    done:Array.isArray(stored.done)?stored.done.filter(k=>MODULE_IDS.includes(k)):[],
    completedAt:stored.completedAt||null,
    nextReviewAt:stored.nextReviewAt||null,
    reviewStage:Number(stored.reviewStage)||0,
    lastReviewed:stored.lastReviewed||null
  }:{read:false,opened:[],done:[],completedAt:null,nextReviewAt:null,reviewStage:0,lastReviewed:null};
}
function change(c,v,fn){const s=getVerse(c,v);fn(s);safeSet(verseKey(c,v),s);return s;}
export function markRead(c,v){return change(c,v,s=>{s.read=true;});}
export function markOpened(c,v,id){return change(c,v,s=>{s.read=true;if(MODULE_IDS.includes(id)&&!s.opened.includes(id))s.opened.push(id);});}
export function markDone(c,v,id){
  return change(c,v,s=>{
    s.read=true;if(MODULE_IDS.includes(id)&&!s.done.includes(id))s.done.push(id);
    if(s.done.length===MODULE_IDS.length&&!s.completedAt){
      s.completedAt=Date.now();s.reviewStage=0;s.nextReviewAt=Date.now()+86400000;
    }
  });
}
export function reviewVerse(c,v){
  return change(c,v,s=>{
    if(s.done.length!==MODULE_IDS.length)return;
    s.lastReviewed=Date.now();
    s.reviewStage=Math.min(s.reviewStage+1,3);
    s.nextReviewAt=s.reviewStage===1?Date.now()+7*86400000:s.reviewStage===2?Date.now()+30*86400000:null;
  });
}
export function summary(){
  const chapters={1:31,2:25,3:24};
  let read=0,studied=0,modulesDone=0;
  const due=[],next=[],byChapter={},totalStudies=71;
  for(const [c,qty] of Object.entries(chapters)){
    let cRead=0,cDone=0,cModules=0;
    for(let v=1;v<=qty;v++){
      const s=getVerse(c,v),hasStudy=Number(c)!==3||v<=15;
      if(s.read){read++;cRead++;}
      if(hasStudy){modulesDone+=s.done.length;cModules+=s.done.length;if(s.done.length===6){studied++;cDone++;}
        if(s.nextReviewAt){const item={chapter:Number(c),verse:v,when:s.nextReviewAt};if(s.nextReviewAt<=Date.now())due.push(item);else next.push(item);}
      }
    }
    byChapter[c]={read:cRead,total:qty,done:cDone,studiedTotal:Number(c)===3?15:qty,moduleCount:cModules};
  }
  due.sort((a,b)=>a.when-b.when);next.sort((a,b)=>a.when-b.when);
  return {read,totalText:80,studied,totalStudies,modulesDone,moduleTotal:totalStudies*6,byChapter,due,next};
}
export function getQuiz(c){const s=safeGet(PREFIX+'quiz:'+c);return s&&typeof s==='object'?s:null;}
export function saveQuiz(c,result){return safeSet(PREFIX+'quiz:'+c,result);}
export function saveDraft(key,value){try{localStorage.setItem(PREFIX+'draft:'+key,value);}catch{}}
export function getDraft(key){try{return localStorage.getItem(PREFIX+'draft:'+key)||'';}catch{return '';}}
