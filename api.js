const loadCourse=async()=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data= await res.json()
    const courses=data.data.tools;
    // console.log(courses)
const courseContainer=document.getElementById('course-container');
courseContainer.innerHTML=''
courseContainer.className='flex flex-wrap justify-center gap-6 mt-6 px-2 md:px-4'
    //display data
courses.forEach(course=>
    {
        console.log(course);
        //create a div
        const courseCard=document.createElement('div')
        courseCard.className=`card bg-base-100 w-96 shadow-sm`
        
//create innerHtml
        courseCard.innerHTML=
`
  <figure class="px-10 pt-10">
    <img src="${course.image}"
      alt="course"
      class="rounded-xl" />
  </figure>
  <div class="card-body text-left">
    <h2 class="card-title">Features</h2>
    <ol class="text-left list-inside list-decimal">
 ${course.features.map(feature=>`<li>${feature}</li>`).join('')}
    </ol>
   
    
<div class="flex justify-between items-center border-t pt-4 px-4 w-full max-w-md mx-auto">
  <!-- Left Side -->
  <div>
    <h2 class="font-bold text-lg">ChatGPT</h2>
    <div class="flex items-center text-sm text-gray-600 mt-1">
      <p>
  <i class="fa-solid fa-calendar-days mr-2 text-gray-600"></i>
  11/01/2022
</p>

    </div>
  </div>

  <!-- Right Side -->
  <div class="bg-red-100 rounded-full p-3">                                  
   <button  onclick="my_modal_1.showModal()">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
   </button>

   
  </div>
</div>

  </div>
  `
//append child
courseContainer.appendChild(courseCard)

    });
}

loadCourse();
