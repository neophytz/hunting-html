const SKILLS_CONTAINER = document.getElementById('dynamicSkills');

const USER_SKILLS = [
    {
        title: 'skill 1',
        description: 'Lead React Native developer for Polbol App, a social media for voters, politician & journalists with over 5k',
        image: 'https://picsum.photos/200'
    },
    {
        title: 'skill 2',
        description: 'Lead React Native developer for Polbol App, a social media for voters, politician & journalists with over 5k',
        image: 'https://picsum.photos/200'
    },
    {
        title: 'skill 3',
        description: 'Lead React Native developer for Polbol App, a social media for voters, politician & journalists with over 5k',
        image: 'https://picsum.photos/200'
    },
    {
        title: 'skill 4',
        description: 'Lead React Native developer for Polbol App, a social media for voters, politician & journalists with over 5k',
        image: 'https://picsum.photos/200'
    },
]

const createCards = (skill) => {
    return `
    <div class="col-lg-3 col-md-6">
        <div class="feature_item">
            <img src="${skill.image}" alt="full stack developer - sachin duhan">
            <h4>${skill.title}</h4>
            <p>${skill.description}</p>
        </div>
    </div>
    `;
}

(function processDynamicSkillsUi(__skills) {
    if(!__skills || !Array.isArray(__skills)) return;
    // at this point, we have an array of skills, with length > 0;
    for(const skill of __skills){
        SKILLS_CONTAINER.innerHTML += createCards(skill);
    }
})(USER_SKILLS);


const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());

const person2 = {
    firstName:"Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.call(person2);
console.log(fullName);
