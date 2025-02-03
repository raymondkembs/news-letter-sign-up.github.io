window.addEventListener('resize', handleImageChange);
window.addEventListener('DOMContentLoaded',handleImageChange);

function handleImageChange(){
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const screenWidth = window.innerWidth;

    if(screenWidth < 800){
        image1.classList.remove('active');
        image2.classList.add('active');
    }else{
        image1.classList.add('active');
        image2.classList.remove('active');
    }
}
let myInput;
let myNewInput = document.getElementById("conValid");
let myInputBox = document.getElementById("email");
let mysubmittion = document.getElementById("myform");
let setmail = document.getElementById("setmail");

function handleChange(event){
    console.log(event.target.value);
    myInput = event.target.value;

    updateStorage();

    if(myInput.includes('@')){
        console.log("contains @");
        myNewInput.style.color = "green";
        mysubmittion.action = "success.html";
        
    }else{
        console.log("doesn't contain @");
        mysubmittion.action = "  ";
        myNewInput.style.color ="#ff6257";
        myNewInput.style.display="block";
        myInputBox.style.borderColor = "#ff6257";
        myInputBox.style.color = "#ff6257";
        myInputBox.style.backgroundColor = "#FECACA";
        myNewInput.style.display = "flex";
        myNewInput.style.justifyContent = "flex-end";
        myNewInput.style.alignItems = "center";
        myNewInput.style.visibility = "visible"
        event.preventDefault();
    }
}
function myClose(){
    window.location.href = "index.html"
}


function updateStorage() {
    // Change something in localStorage
    localStorage.setItem("newContent", myInput);
  }

  window.addEventListener('storage', function(event) {
    if (event.key === 'newContent') {
      // Get the updated content from localStorage
      var newContent = localStorage.getItem('newContent');
      setmail.innerHTML = newContent;
    }
  });
  
  // Initial check when the page loads
  var newContent = localStorage.getItem('newContent');
  if (newContent) {
    setmail.innerHTML = newContent;
  }else{
    console.log("it's not available")
  }
