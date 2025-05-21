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
  <div class="card-body items-start text-center">
    <h2 class="card-title">Features</h2>
    <ol class="text-left list-inside list-decimal">
 ${course.features.map(feature=>`<li>${feature}</li>`).join('')}
    </ol>
   
    <hr class="border-t border-gray-500 w-full my-6">
    <p class="font-bold">${course.name}</p>
     <p>${course.published_in}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
  `
//append child
courseContainer.appendChild(courseCard)

    });
}

loadCourse();
