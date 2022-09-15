let sec = 0;
let min = 0;
let hou = 0;
let interval;

function starter() {
  let bodyHTML=document.getElementsByTagName('body')[0]
  let index = 0;

  let addBtn = document.createElement("button");
  addBtn.className = "btn-add";
  addBtn.innerText = "ADD";
  addBtn.addEventListener("click", () => {
    var newChrono = new chronometer();
    newChrono.add();
  });

  bodyHTML.appendChild(addBtn);

  function chronometer() {
    var c = this;
    this.id = index++;
    this.interval;

    this.sec = 0;
    this. min = 0;
    this. hou = 0;
    this.start = function() {
      c.interval = setInterval(c.time, 10);
    }
  
    this.reset = function() {
      clearInterval(c.interval);
      c.sec = 0;
      c.min = 0;
      c.hou = 0;
      document.getElementById(c.id).innerText = "00:00:00";
    }
  
    this.stopCro = function() {
      clearInterval(c.interval);
    }
  
    this.time = function() {
      c.sec++;
      if (c.sec === 60) {
        c.min++;
        c.sec = 00;
      }
      if (c.min === 60) {
        c.hou++;
        c.sec = 00;
        c.min = 00;
      }
      if (c.hou === 24) {
        clearInterval(interval);
        c.sec = 0;
        c.min = 0;
        c.hou = 0;
      }
      let result =
      (c.hou < 10 ? "0" + c.hou : c.hou) +
      ":" +
      (c.min < 10 ? "0" + c.min : c.min) +
      ":" +
      (c.sec < 10 ? "0" + c.sec : c.sec);
      var cronH1 = document.getElementById(c.id);
      cronH1.innerText = result;
      var date = new Date();
      console.log(date);
    }
  
    this.add = function() {
  
      let cronDiv = document.createElement("div");
      cronDiv.className = "cron";
      let cronH1 = document.createElement("h1");
      cronH1.innerText = "00:00:00";
      cronH1.id = c.id;
      let startBtn = document.createElement("button");
      startBtn.className = "btn-start";
      startBtn.innerText = "START";
      startBtn.addEventListener("click", this.start);
      let stopBtn = document.createElement("button");
      stopBtn.className = "btn-stop";
      stopBtn.innerHTML = "STOP";
      stopBtn.addEventListener("click", this.stopCro);
      let resetBtn = document.createElement("button");
      resetBtn.className = "btn-reset";
      resetBtn.innerText = "RESET";
      resetBtn.addEventListener("click", c.reset);
  
      cronDiv.appendChild(cronH1);
      cronDiv.appendChild(startBtn);
      cronDiv.appendChild(stopBtn);
      cronDiv.appendChild(resetBtn);
  
  
      bodyHTML.appendChild(cronDiv)
    }
  }

}

starter();




