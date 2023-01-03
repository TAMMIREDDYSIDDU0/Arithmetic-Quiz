import './Quiz1.css'
import bg from '../../Assests/bg.jpg'
import { useState } from 'react';
const Quiz1 = (props) => {
    let operators=['+','-','*','/'];
    let  index=Math.floor(Math.random()*4);
    const [answer,setAnswer]=useState('')
    const [noofQues,setNoofQues]=useState(0);
    const [answers,setAnswers]=useState([]);
    const [start,setStart]=useState(true);
    const [score,setScore]=useState(0);
    var dummy=[]
    const [Que,setQue]=useState({

        var1:Math.floor(Math.random()*10),
        var2:Math.floor(Math.random()*10),
        operator:operators[index]

    })

    const nextQ=(e)=>{
        e.preventDefault();
         setNoofQues(noofQues+1)
        console.log(noofQues)
        if(noofQues<=19){
            setAnswers([...answers,{l:Que.var1,o:Que.operator,r:Que.var2,useranswer:answer,correctans:eval(Que.var1+Que.operator+Que.var2).toFixed(2)}])
            setQue({
                var1:Math.floor(Math.random()*10),
                var2:Math.floor(Math.random()*10),
                operator:operators[index],

            })

            setAnswer('')



        }
    if(noofQues===19){
    console.log('Quiz Completed!');
    answers.map((ele)=>{
        if(ele.useranswer===ele.correctans){
            dummy.push(ele.useranswer)
             setScore(dummy.length)
        }
       })
   }
        // answers.map((ele)=>{
        //     console.log(ele)
        // })

            }


// Que.length=10;
    return (
        <div className="container">
{start&&<div className="containerfluid">
<div className="badge rounded-pill bg-warning">Note</div>
<div className="alert alert-warning" style={{width:'70%',textAlign:'center',marginLeft:'15%'}}>Please Enter the Answer with 2 Decimal Places<br/>
<b>If Answer is 12 enter 12.00</b></div>
<button className="btn1" onClick={()=>{setStart(false)}}>START QUIZ</button>

</div>}
{!start&&<div className="quiz1">
<h2>{'Quiz - '+ props.num}</h2>

{noofQues<20&&<form action="" className='form-control'>
    {<h6>{noofQues+1}/20</h6>}
    <h5>{Que.var1+'  '+Que.operator+'  '+Que.var2} </h5>
    <input type="text" name="" id="" value={answer} className='form-control' onChange={(e)=>{setAnswer(e.target.value)}} style={{margin:'0% 25%',width:'50%'}} placeholder='Enter Answer'/>
    <button className={noofQues===19?"btn btn-outline-success":'btn btn-outline-warning'} onClick={nextQ}>{noofQues===19?'Submit':'Next'}</button>
</form>}
    {noofQues===20&&<div className="al" >
            {score>=8&&<div className={score>15?'btn btn-success score':'btn btn-warning score'} style={{textAlign:'center',justifyContent:'center',marginBottom:'15px',width:'35%'}}>Score: {score}</div>}
            {score<8&&<div className='btn btn-danger score' style={{textAlign:'center',justifyContent:'center',marginBottom:'15px',width:'35%'}}>Score: {score}</div>}

        {answers.map((ele,i)=><div className="nss" key={i}>

            {ele.useranswer!=''&&<div className={ele.useranswer!=ele.correctans?'Question alert alert-danger':'Question alert alert-success'} role="alert">
                <div className={ele.useranswer!=ele.correctans?"badge rounded-pill bg-danger":"badge rounded-pill bg-success"}>{ele.useranswer!=ele.correctans?'Wrong':'Correct'}</div>
                <div className='Que'><span className='Q'>{'Q'+`${i+1}`+')  '}</span>{ele.l+ele.o+ele.r+'='+ele.useranswer}</div>
                {ele.useranswer!=ele.correctans&&<div className="correctans badge rounded-pill bg-success">{'Correct Answer: '+ele.correctans}</div>}
                </div>}


            {ele.useranswer===''&&<div className='Question alert alert-warning' role="alert">
                <div className="badge rounded-pill bg-warning">Not Attempted</div>
                <div className='Que'><span className='Q'>{'Q'+`${i+1}`+')  '}</span>{ele.l+'  '+ele.o+'  '+ele.r+'='+ele.useranswer}</div>
                {ele.useranswer!=ele.correctans&&<div className="correctans badge rounded-pill bg-success">{'Correct Answer: '+ele.correctans}</div>}
                </div>}

        </div>)}
        <button className="btn btn-primary"onClick={()=>{setStart(true);setNoofQues(0);dummy.length=0;setAnswers([])}}>Play Again!</button>
    </div>

    }

</div>}

</div>

 );
}

export default Quiz1;