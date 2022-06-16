// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const randomFactsAboutMe =
      ['I play soccer at my free time', 'I like Billie Eilish', 'Lewis Capaldi is among my favorite artistes', 'I am Ghanaian and i like Ed Sheeran'];

  // Pick a random greeting.
  const randomFact = randomFactsAboutMe[Math.floor(Math.random() * randomFactsAboutMe.length)];

  const nothing = '';

  // Add it to the page.
    //factsContainer.innerText = randomFact;

        const factsContainer = document.getElementById('facts-container');


        if (factsContainer.classList == "hidden"){

            factsContainer.innerText = randomFact;

            factsContainer.classList.remove("hidden");

        }

        else{

            factsContainer.innerText = nothing;

            factsContainer.classList.add("hidden");


        }
        
        

}



function displayAbout(){

    document.getElementById("content").innerHTML = ""

    document.getElementById("content").innerHTML += `

    <h1>Abdul Raufs Portfolio</h1>
      <p>Welcome to my portfolio.</p>

      <div> Hello, I am Abdul Rauf Abdul Karim. A Computer Science student at Amherst College. </div>
    
    
    `
}


