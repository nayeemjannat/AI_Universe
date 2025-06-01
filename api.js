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
   <button  onclick="showDetails('${course.id}')">
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

// modal details..
const showDetails = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
  const data = await res.json();
  const tool = data.data;

  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
  <!-- Left Side -->
  <div class="bg-red-50 rounded-lg p-5 border">
    <h3 class="text-lg font-semibold mb-3">${tool.description}</h3>

    <!-- Pricing Box -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
      ${tool.pricing?.map((p, index) => `
        <div class="bg-white rounded-lg text-center p-3 text-sm font-medium border ${
          index === 0 ? 'text-green-600' : index === 1 ? 'text-orange-600' : 'text-red-600'
        }">
          <p>${p.price}</p>
          <p>${p.plan}</p>
        </div>
      `).join('') || '<div class="col-span-3 text-center">No pricing data</div>'}
    </div>

    <!-- Features & Integrations -->
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div>
        <h4 class="font-semibold text-md mb-2">Features</h4>
        <ul class="list-disc list-inside text-sm">
          ${Object.values(tool.features || {}).map(f => `<li>${f.feature_name}</li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-md mb-2">Integrations</h4>
        <ul class="list-disc list-inside text-sm">
          ${tool.integrations?.map(i => `<li>${i}</li>`).join('') || '<li>No data found</li>'}
        </ul>
      </div>
    </div>
  </div>

  <!-- Right Side -->
  <div class="relative border p-4 rounded-lg text-center">
    <div class="relative">
      <img src="${tool.image_link?.[0]}" alt="Tool Image" class="rounded-lg mb-4 w-full max-h-56 object-contain" />
      ${
        tool.accuracy?.score
          ? `<div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              ${tool.accuracy.score * 100}% accuracy
            </div>`
          : ''
      }
    </div>
    <div class="text-left px-2">
      <h3 class="font-bold text-md mb-1">${tool.input_output_examples?.[0]?.input || "No input example"}</h3>
      <p class="text-sm">${tool.input_output_examples?.[0]?.output || "No output example"}</p>
    </div>
  </div>
  `;

  my_modal_1.showModal();
};



loadCourse();
