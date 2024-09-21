const clearAll = document.querySelector('.clearAll')
const mortgage = document.querySelector('.mortgage')
const inputTerm = document.querySelector('.inputTerm')
const inputRate = document.querySelector('.inputRate')
const repaymentBtn = document.querySelector('.repaymentButton')
const interestBtn = document.querySelector('.interestButton')
const calculate = document.querySelector('.calculate')
const empty = document.querySelector('.empty')
const complete = document.querySelector('.complete')
const mthRepayments = document.querySelector('.monthlyRepayments')
const overTerm = document.querySelector('.overTime')

clearAll.addEventListener("click", (e)=>{
    window.location.reload()
})


calculate.addEventListener("click", (e)=>{
    e.preventDefault()

    empty.classList.toggle('show')
    complete.classList.toggle('show')


    console.log("calculating...")
    const calculateD = calculating()
    if(calculateD){
        overTerm.textContent = calculateD.totalRepayments
        mthRepayments.textContent = calculateD.monthlyRepayments
    }
    else{
        console.log("Error")
    }

    function calculating(){
        const mortgage = document.querySelector('.mortgage').value
        const inputTerm = document.querySelector('.inputTerm').value
        const inputRate = document.querySelector('.inputRate').value
    
        if(mortgage !== isNaN() || inputTerm !== isNaN() || inputRate !== isNaN()){
            if(repaymentBtn.checked){
                let monthlyRate = (inputRate / 100)/12
                let totalPayments = inputTerm * 12
                let monthlyRepayments = mortgage * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1)
                let totalRepayments = monthlyRepayments * totalPayments
                return {
                    monthlyRepayments: monthlyRepayments.toFixed(2),
                    totalRepayments: totalRepayments.toFixed(2)
                }
            }
            else if(interestBtn.checked){
                let monthlyRate = (inputRate / 100)/12
                let monthlyInterestPayments = (mortgage * monthlyRate).toFixed(2)
                let totalInterest = monthlyInterestPayments * (inputTerm * 12)
                let totalRepayments = (+(totalInterest + mortgage)).toFixed(2)
                console.log(totalRepayments)
                return{
                    monthlyRepayments: monthlyInterestPayments,
                    totalRepayments: totalRepayments
                }
            }
    
            
        }
        return false
    }

})