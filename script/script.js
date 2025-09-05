const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};
// script for leson click handler
const loadLessonWord = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayWord(json.data));
};

// {
//     "id": 94,
//     "level": 2,
//     "word": "Dance",
//     "meaning": "নৃত্য",
//     "pronunciation": "ডান্স"
// }

const displayWord = (words) => {
  const lessonWord = document.getElementById("lesson-word");
  lessonWord.innerHTML = "";
  if (words.length === 0) {
    lessonWord.innerHTML = `
     <div class="col-span-full text-center space-y-6">
           <img class="mx-auto" src="./assets/alert-error.png" alt="" />
            <p class="text-[#79716B] text-[13px]">
             এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>
            <h3 class="text-[#292524] font-medium text-[33px]">
            নেক্সট Lesson এ যান
            </h3>
          </div>
    `;
  }
  words.forEach((word) => {
    console.log(word);
    const newEl = document.createElement("div");
    newEl.innerHTML = `
       <div class="bg-white p-4 text-center rounded-xl shadow-lg">
            <h3 class="font-bold text-xl text-[#000000] mb-3">
             ${word.word ? word.word : "word not found"}
            </h3>
            <h3 class="text-[#000000] font-medium text-lg mb-3">
             Meaning /Pronounciation
            </h3>
            <h3 class="font-semibold text-[#18181B] bangla-font mb-3">
             "${word.meaning ? word.meaning : "Meaing are not Found"} /  ${
      word.pronunciation ? word.pronunciation : "Pronunciation are not here"
    }"
            </h3>
            <div class="mt-7 flex justify-between  items-center">
              <button class="btn bg-[#1a91ff1a] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
              <button class="btn bg-[#1a91ff1a] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i> </button>
            </div>
          </div>
    
    `;
    lessonWord.append(newEl);
  });
};
// script for lesson button
const displayLessons = (lessons) => {
  const lebelContainer = document.getElementById("lebel-container");
  lebelContainer.innerHTML = "";
  for (let lesson of lessons) {
    const newDivBtn = document.createElement("div");
    newDivBtn.innerHTML = `
                  <button onclick="loadLessonWord(${lesson.level_no})"  class="btn btn-outline btn-primary"
                    ><i class="fa-brands fa-leanpub"></i>lesson- ${lesson.level_no}
                    </button>
    `;
    lebelContainer.append(newDivBtn);
  }
};
loadLessons();
