document.getElementById("student").addEventListener("submit",function(event){
    event.preventDefault();
   const n=document.getElementById("name").value;
    const r=document.getElementById("roll").value;
    const m=document.getElementById("mark").value;
    
      const data={
        sname:n,
        sroll:r,
        smark:m
      };
     
      localStorage.setItem("data",JSON.stringify(data));
      window.location.href='display.html'
})