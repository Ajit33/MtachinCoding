


const dummyApiResponse={
    showlightAndDark:true,
    showTicTakToe:true,
    showRanndomColorGen:false,
    showAccordian:false,
    showTreeView:true
}


function featureFlagsDataServicecall(){
   return new Promise((res,rej)=>{
if(dummyApiResponse) setTimeout(res(dummyApiResponse),500);
else rej("some Error Happens")
}) 
}



export default featureFlagsDataServicecall;