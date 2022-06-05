
let fetchCalls = ()=>{
    let times={};
    for(let i=1;i<=70;i++){
        times[i]=new Date();
        fetch('http://localhost/movies/'+i)
            .then((res)=>{
                if(res.status===500){
                    throw new Error("Some Database Error");
                }
                return res.json();
            })
            .then((data)=>{
                times[i]=new Date()-times[i];
                if(i===70){
                    console.log(times);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }

};

document.getElementById('fetchCalls').addEventListener('click',(e)=>{
    fetchCalls();
});