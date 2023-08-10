import LearningComponent from "./LearningComponent"

const person =  {
    name : "Prakalp Jain",
    address : {
        city : "Pune",
        country : "IN"
    },
    profiles : ["twitter", "instagram", "linkedin"],
    printProfiles : () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
    }



export default function LearningJavascript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.printProfiles()}</div>
        </>
    );
}