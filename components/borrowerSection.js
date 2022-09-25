import Image from "next/image"
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon' //Randomly generated profiles
import USDC from "./cryptologos/usdc.js" //USDC svg component
import ETH from "./cryptologos/eth.js" //ETH svg component
import DAI from "./cryptologos/dai.js"
import USDT from "./cryptologos/usdt.js" //Currently not wokring (hydration error)

export default function BorrowerSection({index,data}){

    // If this is the first profile in the list, do not render the border at the top
    let borrowerProfileCSS;
    if(index==0){
        borrowerProfileCSS = "py-5 pt-0 grid grid-cols-9 grid-flow-row justify-between text-xl items-center hover:opacity-70 hover:cursor-pointer"
    }else{
        borrowerProfileCSS = "py-5 border-t-2 grid grid-cols-9 grid-flow-row justify-between text-xl items-center hover:opacity-70 hover:cursor-pointer"

    }

    //This is for shortening an address for easy display
    const shortenAddress = (str) => {
        return str.substring(0, 5) + "..." + str.substring(str.length - 3);
    };


    return(
        
        <div className={borrowerProfileCSS}>
            {/* Account profile and address */}
            <div className="flex gap-5 col-span-2  items-center ">
            <Jazzicon diameter={50} seed={jsNumberForAddress(data.borrower)} />
                {shortenAddress(data.borrower)}
            </div>

            {/* Currency and Amount */}
            <div className="flex gap-2 col-span-2 items-center">
                {data.currency=="USDC" && 
                <USDC width="2rem"></USDC>}
                {data.currency=="ETH" &&
                <ETH width="2rem"></ETH>}
                <DAI width="2rem"></DAI>
                
                {data.borrowAmount/1000000000000000000} DAI
            </div>
            {/* Loan Maturity, Credit Score, Salary History, and APR */}
            <div className="col-span-2">{data.paybackMonths} months</div>
            {/* <div className="col-span-2">{data.creditScore}</div>
            <div className="col-span-2">{data.salaryHistory}</div> */}
            <div className="col-span-2">{data.interestRate}%</div>

            {/* Status Indicator */}
            <div className="flex gap-2 items-center col-span-1" >

                <div className="w-5 h-5 rounded-full bg-green-400"/> Active
                {/* {data.status == "Inactive" && <div className="w-5 h-5 rounded-full bg-red-400"/>}
                {data.status} */}
            </div>
        </div>
        
    )
}