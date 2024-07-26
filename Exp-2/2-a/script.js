const modal = document.getElementById("state-modal")
const map = document.querySelector("map")
map.addEventListener("click",popupModal)
const content=""

function popupModal(event){
    event.preventDefault();
    const area = event.target;
    const title = area.getAttribute("title");
    let content = "";
    let content_link="";

    switch(title) {
        case 'tamil_nadu':
            content = "Tamil Nadu is the southernmost state of India. The tenth largest Indian state by area and the sixth largest by population, Tamil Nadu is the home of the Tamil people, whose Tamil language—one of the longest surviving classical languages in the world—is widely spoken in the state and serves as its official language. The capital and largest city is Chennai.";
            content_link = "https://en.wikipedia.org/wiki/Tamil_Nadu";
            break;
        case 'andhra_pradesh':
            content = "Andhra Pradesh is a state in the southeastern coastal region of India. It is the seventh-largest state by area and the tenth-most populous state. The state has a coastline of 972 km, the second longest in India, after Gujarat. The capital and largest city is Visakhapatnam.";
            content_link = "https://en.wikipedia.org/wiki/Andhra_Pradesh";
            break;
        case 'kerala':
            content = "Kerala is a state on the southwestern Malabar Coast of India. It was formed on 1 November 1956, following the passage of the States Reorganisation Act, by combining Malayalam-speaking regions. Spread over 38,863 km², Kerala is the twenty-first largest Indian state by area. The capital is Thiruvananthapuram.";
            content_link = "https://en.wikipedia.org/wiki/Kerala";
            break;
        case 'karnataka':
            content = "Karnataka is a state in the southwestern region of India. It was formed on 1 November 1956, with the passage of the States Reorganisation Act. Originally known as the State of Mysore, it was renamed Karnataka in 1973. The capital and largest city is Bangalore.";
            content_link = "https://en.wikipedia.org/wiki/Karnataka";
            break;
        case 'maharashtra':
            content = "Maharashtra is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau. Maharashtra is the second-most populous state in India as well as the second-most populous country subdivision. The capital is Mumbai.";
            content_link = "https://en.wikipedia.org/wiki/Maharashtra";
            break;
        case 'madhya_pradesh':
            content = "Madhya Pradesh is a state in central India. Its capital is Bhopal, and the largest city is Indore. Nicknamed the 'Heart of India' due to its geographical location, Madhya Pradesh is the second-largest Indian state by area and the fifth-largest by population.";
            content_link = "https://en.wikipedia.org/wiki/Madhya_Pradesh";
            break;
        case 'rajasthan':
            content = "Rajasthan is a state in northern India. The state covers an area of 342,239 square kilometres or 10.4 percent of the total geographical area of India. It is the largest Indian state by area and the seventh largest by population. The capital is Jaipur.";
            content_link = "https://en.wikipedia.org/wiki/Rajasthan";
            break;
        case 'orissa':
            content = "Odisha, formerly Orissa, is an Indian state located in Eastern India. It is the 8th largest state by area, and the 11th largest by population. The state has a coastline of 485 kilometres along the Bay of Bengal. The capital is Bhubaneswar.";
            content_link = "https://en.wikipedia.org/wiki/Odisha";
            break;
        case 'gujarat':
            content = "Gujarat is a state on the western coast of India with a coastline of 1,600 km – most of which lies on the Kathiawar peninsula – and a population of 60.4 million. It is the fifth-largest Indian state by area and the ninth-largest state by population. The capital is Gandhinagar.";
            content_link = "https://en.wikipedia.org/wiki/Gujarat";
            break;
        case 'uttar_pradesh':
            content = "Uttar Pradesh is a state in northern India. It is the most populous state in India as well as the most populous country subdivision in the world. The densely populated state, located in the northern region of the Indian subcontinent, has over 200 million inhabitants. The capital is Lucknow.";
            content_link = "https://en.wikipedia.org/wiki/Uttar_Pradesh";
            break;
        case 'jammu_and_kashmir':
            content = "Jammu and Kashmir is a region administered by India as a union territory and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947. The capital is Srinagar.";
            content_link = "https://en.wikipedia.org/wiki/Jammu_and_Kashmir_(union_territory)";
            break;
        case 'chattisgarh':
            content = "Chhattisgarh is a state located in the region of Central India. It is the ninth-largest state in India, with an area of 135,192 km². With a population of 25.5 million, Chhattisgarh is the 17th most-populated state in the country. The capital is Raipur.";
            content_link = "https://en.wikipedia.org/wiki/Chhattisgarh";
            break;
        case 'west_bengal':
            content = "West Bengal is a state in the eastern region of India along the Bay of Bengal. With over 91 million inhabitants, it is the fourth-most populous state and the fourteenth-largest state by area in India. The capital is Kolkata.";
            content_link = "https://en.wikipedia.org/wiki/West_Bengal";
            break;
        case 'bihar':
            content = "Bihar is a state in eastern India. It is the third-largest state by population and twelfth-largest by area, with close to 104 million residents as per the 2011 Census. The capital is Patna.";
            content_link = "https://en.wikipedia.org/wiki/Bihar";
            break;
        case 'jharkhand':
            content = "Jharkhand is a state in eastern India. It was carved out of the southern part of Bihar on 15 November 2000. The state shares its border with Bihar to the north, Uttar Pradesh to the northwest, Chhattisgarh to the west, Odisha to the south, and West Bengal to the east. The capital is Ranchi.";
            content_link = "https://en.wikipedia.org/wiki/Jharkhand";
            break;
        case 'himachal_pradesh':
            content = "Himachal Pradesh is a state in the northern part of India. Situated in the Western Himalayas, it is bordered by Jammu and Kashmir on the north, Punjab on the west, Haryana on the southwest, Uttarakhand on the southeast, and Tibet on the east. The capital is Shimla.";
            content_link = "https://en.wikipedia.org/wiki/Himachal_Pradesh";
            break;
        case 'punjab':
            content = "Punjab is a state in the northern part of India. It is bordered by the Indian states of Jammu and Kashmir to the north, Himachal Pradesh to the northeast, Haryana to the south and southeast, and Rajasthan to the southwest. The capital is Chandigarh.";
            content_link = "https://en.wikipedia.org/wiki/Punjab,_India";
            break;
        default:
            content = "Information not available.";
    }
    document.getElementById("state").innerHTML=title.toUpperCase().split('_').join(' ')
    document.getElementById("content").innerHTML=content
    document.getElementById("clink").setAttribute("href", content_link);
    modal.style.display="block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

