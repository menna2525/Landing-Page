//Declaring some variables.

const elements=[1,2,3,4];
let i =1;
const list = document.querySelector('#navbar__list');


//Creating li , adding claasname, and references.
for (let element of elements) {

    element =document.createElement('li');
    element.classList="section";
    element.innerHTML='<a href="#section'+i+'">Section '+i+'</a>';
    i++;
    list.appendChild(element);
  

}



// Clicking on Navbar and scrolling down to sections.

const sections = document.querySelectorAll('.section');
sections[0].addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("section1").scrollIntoView({behavior: "smooth", block: "center"});

  });
  sections[1].addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("section2").scrollIntoView({behavior: "smooth", block: "center"});
});

sections[2].addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("section3").scrollIntoView({behavior: "smooth", block: "center"});
    
});
sections[3].addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("section4").scrollIntoView({behavior: "smooth", block: "center"});
    
});


// Intersection Observer Function 

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
}

let enteries = document.querySelectorAll('section')

const sectionObserver = new IntersectionObserver(callback,options)
function callback(changes)
{
    changes.forEach(change => {
        const getId = change.target.getAttribute('id');
        const getElement = document.querySelector(`#${getId}`);

        if(change.isIntersecting){
            getElement.classList.add('your-active-class');
        }else{

            getElement.classList.remove('your-active-class');
        }
    });

}

enteries.forEach((entry) =>
{
    sectionObserver.observe(entry);
});

//Collapsible Sections 

    const col =document.getElementsByClassName('collapsible');
    var k;
    for (k = 0; k < col.length; k++) {
      col[k].addEventListener("click", function() {
        this.classList.toggle("active");
        var sec = this.parentElement.parentElement.parentElement;
        const content=sec.querySelectorAll('p');
        content.forEach(con =>
            {
                if (con.style.display === "block") {
                    con.style.display = "none";
                  } else {
                    con.style.display = "block";
                  }

            });
       
      });
    }
    

   